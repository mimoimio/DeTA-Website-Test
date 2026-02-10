import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { notFound } from 'next/navigation'

import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from 'fs'
import matter from "gray-matter";
import FooterButton from "@/components/FooterButton";
import Pill from "@/components/Pill";


function getPostContent(slug) {
    const folder = 'content/posts/'  // Changed from 'posts/' to 'content/posts/'
    const file = folder + `${slug}.md`

    // Check if file exists before trying to read it
    if (!fs.existsSync(file)) {
        return null;
    }

    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
}


export const generateStaticParams = async () => {
    const posts = getPostMetadata()  // Updated path
    return posts.map((post) => ({ slug: post.slug }))
}

// This controls what happens with dynamic params not returned by generateStaticParams
// false = 404 for non-static params, true = generate on-demand
// export const dynamicParams = false


export async function generateMetadata({ params, searchParams }) {
    const resolvedParams = await params;
    const id = resolvedParams?.slug ? ' • ' + resolvedParams.slug : ''
    return {
        title: `Developer Tanah Air ${id.replaceAll('_', ' ')}`
    }
}


export default async function BlogPage({ params }) {
    const { slug } = await params;
    const post = getPostContent(slug)

    // If post doesn't exist, trigger 404
    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-full flex flex-col">
            <Header />
            <div className="flex flex-col max-w-4xl w-full mx-auto p-4 pt-24 gap-4">
                <div className="flex flex-col justify-center w-10 ">
                    <Pill address="blogs" title="Back" back />
                </div>
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
