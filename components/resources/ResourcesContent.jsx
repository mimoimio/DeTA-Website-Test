import Link from "next/link";

export default function ResourcesContent({ activeCategory, resourcesData }) {
    const items = resourcesData?.[activeCategory] || [];

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
