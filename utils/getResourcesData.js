import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getResourcesData() {
    const resourcesPath = path.join(process.cwd(), 'content', 'resources', 'resources.md');

    if (!fs.existsSync(resourcesPath)) {
        console.warn('Resources file not found, returning empty data');
        return {};
    }

    const fileContents = fs.readFileSync(resourcesPath, 'utf8');
    const { content } = matter(fileContents);

    // Parse markdown content into structured data
    const resourcesData = {};
    const lines = content.split('\n');
    let currentCategory = null;
    let currentResource = null;

    for (const line of lines) {
        const trimmedLine = line.trim();

        // Category headers (## Category Name)
        if (trimmedLine.startsWith('## ') && !trimmedLine.startsWith('### ')) {
            currentCategory = trimmedLine.replace('## ', '');
            resourcesData[currentCategory] = [];
        }
        // Resource headers (### Resource Name)
        else if (trimmedLine.startsWith('### ')) {
            if (currentCategory) {
                currentResource = {
                    title: trimmedLine.replace('### ', ''),
                    href: '',
                    description: ''
                };
                resourcesData[currentCategory].push(currentResource);
            }
        }
        // URL lines (- **URL**: ...)
        else if (trimmedLine.startsWith('- **URL**:') && currentResource) {
            currentResource.href = trimmedLine.replace('- **URL**: ', '');
        }
        // Description lines (- **Description**: ...)
        else if (trimmedLine.startsWith('- **Description**:') && currentResource) {
            currentResource.description = trimmedLine.replace('- **Description**: ', '');
        }
    }

    return resourcesData;
}
