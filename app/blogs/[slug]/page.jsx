import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from 'fs'
import matter from "gray-matter";


function getPostContent(slug) {
    const folder = 'content/posts/'  // Changed from 'posts/' to 'content/posts/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')

    const matterResult = matter(content)
    return matterResult

}


export const generateStaticParams = async () => {
    const posts = getPostMetadata('content/posts')  // Updated path
    return posts.map((post) => ({ slug: post.slug }))
}


export async function generateMetadata({ params, searchParams }) {
    const resolvedParams = await params;
    const id = resolvedParams?.slug ? ' • ' + resolvedParams.slug : ''
    return {
        title: `Developer Tanah Air ${id.replaceAll('_', ' ')}`
    }
}


export default async function BlogPage({ params }) {
    const slug = await params.slug;
    const post = getPostContent(slug)
    return (
        <main className="min-h-full flex flex-col">
            <Header />
            <div className="flex flex-col max-w-2xl w-full mx-auto p-4 pt-12 gap-4">
                <h1 className="text-2xl">{`${post.data.title}`}</h1>
                <hr />

                <article>
                    <Markdown className="prose prose-lg prose-slate max-w-none">
                        {`${post.content}`}
                    </Markdown>
                </article>

            </div>
            <Footer />
        </main>
    )
}