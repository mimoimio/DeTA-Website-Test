"use client";

import Link from "next/link";

const sidebarItems = [
    "Blogs",
    "E-books",
    "Github Repositories",
    "Libraries",
    "Softwares",
    "Tools",
    "Tweets",
    "YouTube Links",
];

export default function ResourcesSidebar({ activeCategory, setActiveCategory }) {
    return (
        <ul className="max-w-[200px] w-full border-r-2 border-gray-200 p-4 space-y-2">
            {sidebarItems.map((item, index) => (
                <SidebarItem
                    key={index}
                    label={item}
                    isActive={activeCategory === item}
                    onClick={() => setActiveCategory(item)}
                />
            ))}
        </ul>
    );
}

function SidebarItem({ label, isActive, onClick }) {
    return (
        <li>
            <button
                onClick={onClick}
                className={`w-full text-left flex items-center gap-2 p-2 transition-colors rounded-md ${isActive
                    ? "bg-orange-200 text-orange-600 border-orange-500"
                    : "hover:bg-gray-200"
                    }`}
            >
                {label}
            </button>
        </li>
    );
}
