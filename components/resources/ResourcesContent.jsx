import Link from "next/link";

const resourcesData = {
    Blogs: [
        {
            title: "React Best Practices 2024",
            href: "/blog/react-best-practices",
            description: "Learn modern React patterns",
        },
        {
            title: "JavaScript ES2024 Features",
            href: "/blog/js-es2024",
            description: "New JavaScript features",
        },
        {
            title: "Next.js Performance Tips",
            href: "/blog/nextjs-performance",
            description: "Optimize your Next.js app",
        },
        {
            title: "CSS Grid vs Flexbox",
            href: "/blog/css-grid-flexbox",
            description: "When to use which layout method",
        },
    ],
    "E-books": [
        {
            title: "You Don't Know JS",
            href: "https://github.com/getify/You-Dont-Know-JS",
            description: "Deep dive into JavaScript",
        },
        {
            title: "Eloquent JavaScript",
            href: "https://eloquentjavascript.net/",
            description: "Modern introduction to programming",
        },
        {
            title: "Clean Code",
            href: "/ebooks/clean-code",
            description: "Writing maintainable code",
        },
    ],
    "Github Repositories": [
        {
            title: "React",
            href: "https://github.com/facebook/react",
            description: "A declarative JavaScript library",
        },
        {
            title: "Next.js",
            href: "https://github.com/vercel/next.js",
            description: "The React Framework",
        },
        {
            title: "Tailwind CSS",
            href: "https://github.com/tailwindlabs/tailwindcss",
            description: "Utility-first CSS framework",
        },
    ],
    Libraries: [
        {
            title: "Lodash",
            href: "https://lodash.com/",
            description: "JavaScript utility library",
        },
        {
            title: "Moment.js",
            href: "https://momentjs.com/",
            description: "Date manipulation library",
        },
        {
            title: "Axios",
            href: "https://axios-http.com/",
            description: "HTTP client for JavaScript",
        },
    ],
    Softwares: [
        {
            title: "Visual Studio Code",
            href: "https://code.visualstudio.com/",
            description: "Code editor",
        },
        {
            title: "Figma",
            href: "https://figma.com/",
            description: "Design tool",
        },
        {
            title: "Postman",
            href: "https://postman.com/",
            description: "API testing tool",
        },
    ],
    Tools: [
        {
            title: "Chrome DevTools",
            href: "https://developer.chrome.com/docs/devtools/",
            description: "Browser debugging tools",
        },
        {
            title: "Webpack Bundle Analyzer",
            href: "https://www.npmjs.com/package/webpack-bundle-analyzer",
            description: "Analyze bundle size",
        },
        {
            title: "ESLint",
            href: "https://eslint.org/",
            description: "JavaScript linter",
        },
    ],
    Tweets: [
        {
            title: "@dan_abramov on React",
            href: "https://twitter.com/dan_abramov",
            description: "React core team insights",
        },
        {
            title: "@addyosmani on Performance",
            href: "https://twitter.com/addyosmani",
            description: "Web performance tips",
        },
        {
            title: "@kentcdodds on Testing",
            href: "https://twitter.com/kentcdodds",
            description: "Testing best practices",
        },
    ],
    "YouTube Links": [
        {
            title: "Fireship",
            href: "https://youtube.com/@Fireship",
            description: "Quick coding tutorials",
        },
        {
            title: "Web Dev Simplified",
            href: "https://youtube.com/@WebDevSimplified",
            description: "Web development tutorials",
        },
        {
            title: "The Net Ninja",
            href: "https://youtube.com/@NetNinja",
            description: "Programming tutorials",
        },
    ],
};

export default function ResourcesContent({ activeCategory }) {
    const items = resourcesData[activeCategory] || [];

    return (
        <div className="px-8 py-4 w-full">
            <h1 className="text-xl font-semibold">{activeCategory}</h1>

            {items.length > 0 ? (
                <ul className="list-disc ps-8 space-y-2 mt-4">
                    {items.map((item, index) => (
                        <ResourceItem
                            key={index}
                            title={item.title}
                            href={item.href}
                            description={item.description}
                        />
                    ))}
                </ul>
            ) : (
                <p className="mt-4 text-gray-500">
                    No resources available for this category yet.
                </p>
            )}
        </div>
    );
}

function ResourceItem({ title, href, description }) {
    const isExternal = href.startsWith("http");

    return (
        <li>
            <Link
                href={href}
                className="text-orange-400 hover:text-orange-500 transition-colors"
                {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                })}
            >
                {title}
            </Link>
            {description && (
                <span className="text-gray-600"> - {description}</span>
            )}
        </li>
    );
}