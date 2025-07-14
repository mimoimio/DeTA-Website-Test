const https = require('https');
const fs = require('fs');
const path = require('path');

const GITHUB_API_BASE = 'https://api.github.com';
const CONTENT_REPO = process.env.CONTENT_REPO || 'mimoimio/detacommunity-content';
const CONTENT_BRANCH = process.env.CONTENT_BRANCH || 'main';

// Create content directory if it doesn't exist
const contentDir = path.join(process.cwd(), 'content');
if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
}

// Create posts directory
const postsDir = path.join(contentDir, 'posts');
if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
}

// Create resources directory
const resourcesDir = path.join(contentDir, 'resources');
if (!fs.existsSync(resourcesDir)) {
    fs.mkdirSync(resourcesDir, { recursive: true });
}

// Create public content mirror directory
const publicDir = path.join(process.cwd(), 'public', 'content_repo');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Node.js'
            }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve(data);
                }
            });
        }).on('error', reject);
    });
}

async function fetchFileContent(filePath) {
    const url = `${GITHUB_API_BASE}/repos/${CONTENT_REPO}/contents/${filePath}?ref=${CONTENT_BRANCH}`;
    console.log(`Fetching: ${filePath}`);

    try {
        const response = await makeRequest(url);
        if (response.content) {
            // Decode base64 content
            const content = Buffer.from(response.content, 'base64').toString('utf-8');
            return content;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching ${filePath}:`, error.message);
        return null;
    }
}

async function fetchDirectoryContents(dirPath) {
    const url = `${GITHUB_API_BASE}/repos/${CONTENT_REPO}/contents/${dirPath}?ref=${CONTENT_BRANCH}`;
    console.log(`Fetching directory: ${dirPath}`);

    try {
        const response = await makeRequest(url);
        return Array.isArray(response) ? response : [];
    } catch (error) {
        console.error(`Error fetching directory ${dirPath}:`, error.message);
        return [];
    }
}

async function fetchDirectoryRecursively(remotePath, localBasePath) {
    const items = await fetchDirectoryContents(remotePath);

    for (const item of items) {
        const localPath = path.join(localBasePath, item.name);

        if (item.type === 'dir') {
            // Create directory if it doesn't exist
            if (!fs.existsSync(localPath)) {
                fs.mkdirSync(localPath, { recursive: true });
                console.log(`📁 Created directory: ${localPath}`);
            }

            // Recursively fetch subdirectory contents
            await fetchDirectoryRecursively(item.path, localPath);
        } else if (item.type === 'file') {
            // Download file
            console.log(`📄 Downloading: ${item.path}`);
            const content = await fetchFileContent(item.path);
            if (content) {
                fs.writeFileSync(localPath, content, 'utf-8');
                console.log(`✅ Saved: ${item.name} to ${localPath}`);
            }
        }
    }
}

async function fetchAndFlattenPublicDirectory(remotePath, localBasePath) {
    const items = await fetchDirectoryContents(remotePath);

    for (const item of items) {
        if (item.type === 'dir') {
            // Skip nested "content_repo" folder and go directly to its contents
            if (item.name === 'content_repo') {
                await fetchDirectoryRecursively(item.path, localBasePath);
            } else {
                const localPath = path.join(localBasePath, item.name);
                if (!fs.existsSync(localPath)) {
                    fs.mkdirSync(localPath, { recursive: true });
                }
                await fetchDirectoryRecursively(item.path, localPath);
            }
        } else if (item.type === 'file') {
            const content = await fetchFileContent(item.path);
            if (content) {
                const filePath = path.join(localBasePath, item.name);
                fs.writeFileSync(filePath, content, 'utf-8');
                console.log(`✅ Saved: ${item.name} to ${filePath}`);
            }
        }
    }
}

async function main() {
    console.log('🚀 Fetching content from repository...');
    console.log(`Repository: ${CONTENT_REPO}`);
    console.log(`Branch: ${CONTENT_BRANCH}`);

    try {
        // Fetch entire repository structure and mirror it
        console.log('📂 Fetching entire repository structure...');

        // Get root directory contents
        const rootItems = await fetchDirectoryContents('');

        for (const item of rootItems) {
            if (item.type === 'dir') {
                console.log(`\n� Processing directory: ${item.name}`);

                if (item.name === 'posts') {
                    // Mirror posts directory to content/posts
                    await fetchDirectoryRecursively(item.path, postsDir);
                } else if (item.name === 'resources') {
                    // Mirror resources directory to content/resources
                    await fetchDirectoryRecursively(item.path, resourcesDir);
                } else if (item.name === 'public') {
                    // Special handling for public directory - flatten the structure
                    console.log(`Fetching public directory contents...`);
                    await fetchAndFlattenPublicDirectory(item.path, publicDir);
                } else {
                    // Mirror other directories to content/{dirname}
                    const targetDir = path.join(contentDir, item.name);
                    if (!fs.existsSync(targetDir)) {
                        fs.mkdirSync(targetDir, { recursive: true });
                    }
                    await fetchDirectoryRecursively(item.path, targetDir);
                }
            } else if (item.type === 'file') {
                // Handle root-level files (like README.md, etc.)
                console.log(`📄 Downloading root file: ${item.name}`);
                const content = await fetchFileContent(item.path);
                if (content) {
                    const filePath = path.join(contentDir, item.name);
                    fs.writeFileSync(filePath, content, 'utf-8');
                    console.log(`✅ Saved: ${item.name} to ${filePath}`);
                }
            }
        }

        console.log('\n✨ Content fetch completed!');
        console.log(`📍 Content mirrored to:`);
        console.log(`   - Posts: ${postsDir}`);
        console.log(`   - Resources: ${resourcesDir}`);
        console.log(`   - Public assets: ${publicDir}`);
        console.log(`   - Other content: ${contentDir}`);
    } catch (error) {
        console.error('❌ Error during content fetch:', error);
        process.exit(1);
    }
}

main();
