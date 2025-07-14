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

async function main() {
    console.log('🚀 Fetching content from repository...');
    console.log(`Repository: ${CONTENT_REPO}`);
    console.log(`Branch: ${CONTENT_BRANCH}`);

    try {
        // Fetch posts directory contents
        const postsFiles = await fetchDirectoryContents('posts');

        console.log(`Found ${postsFiles.length} items in posts directory`);

        // Download all markdown files
        for (const file of postsFiles) {
            if (file.type === 'file' && (file.name.endsWith('.md') || file.name.endsWith('.mdx'))) {
                console.log(`📄 Downloading: ${file.name}`);

                const content = await fetchFileContent(file.path);
                if (content) {
                    const filePath = path.join(postsDir, file.name);
                    fs.writeFileSync(filePath, content, 'utf-8');
                    console.log(`✅ Saved: ${file.name}`);
                }
            }
        }

        console.log('✨ Content fetch completed!');
    } catch (error) {
        console.error('❌ Error during content fetch:', error);
        process.exit(1);
    }
}

main();
