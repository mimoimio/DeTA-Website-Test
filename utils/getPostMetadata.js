import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))
    const posts = markdownPosts.map( (filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            image: matterResult.data.image,
            tags: matterResult.data.tags || [],
            slug: filename.replace('.md', '')
        }
    } )
    return posts
}