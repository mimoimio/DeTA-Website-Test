"use client";
import { useState } from 'react';
import SearchBar from './resources/SearchBar';
import ResourcesSidebar from './resources/ResourcesSidebar';
import ResourcesContent from './resources/ResourcesContent';

export default function Resources({ resourcesData }) {
    const [activeCategory, setActiveCategory] = useState("Blogs");

    return (
        <div className="mx-auto max-w-4xl w-full min-h-screen flex flex-col justify-start pt-32">


            <div className="w-full flex-col p-4 items-center justify-between py-2 border-b-2 md:flex-row">
                <h1 className="text-2xl font-semibold">
                    Resources
                </h1>
                <SearchBar setActiveCategory={setActiveCategory} />
            </div>

            {/* amek dari markdown file nanti */}


            <div className="flex flex-col md:flex-row">
                <ResourcesSidebar
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <ResourcesContent
                    activeCategory={activeCategory}
                    resourcesData={resourcesData}
                />
            </div>


        </div>
    );
}