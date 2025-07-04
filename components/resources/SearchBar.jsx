"use client";
import { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi2";

const sidebarItems = [
    "Blogs",
    "E-books",
    "Github Repositories",
    "Libraries",
    "Softwares",
    "Tools",
    "Tweets",
    "YouTube Links"
];

export default function SearchBar({ setActiveCategory }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSuggestions([]);
            setIsOpen(false);
            return;
        }

        const filteredSuggestions = sidebarItems.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
        setIsOpen(true);
    }, [searchTerm]);

    // Close suggestions when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSuggestionClick = (suggestion) => {
        setActiveCategory(suggestion);
        setSearchTerm("");
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (suggestions.length > 0) {
            handleSuggestionClick(suggestions[0]);
        }
    };

    return (
        <div className="relative max-w-xs w-full" ref={searchRef}>
            <form onSubmit={handleSubmit}>
                <div className="border-2 border-gray-200 p-2 rounded-md flex items-center gap-2 bg-white">
                    <IoMdSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full outline-none bg-transparent"
                        value={searchTerm}
                        onChange={handleInputChange}
                        onFocus={() => searchTerm && setIsOpen(true)}
                    />
                    <HiOutlineMicrophone className="text-gray-500 cursor-pointer" />
                </div>
            </form>

            {/* Suggestions Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                    {suggestions.length > 0 ? (
                        <ul className="py-1">
                            {suggestions.map((suggestion, index) => (
                                <SuggestionItem
                                    key={index}
                                    suggestion={suggestion}
                                    searchTerm={searchTerm}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div className="px-4 py-3 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <IoMdSearch className="text-gray-400" />
                                <span>No categories found for "{searchTerm}"</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function SuggestionItem({ suggestion, searchTerm, onClick }) {
    // Highlight matching text
    const highlightText = (text, highlight) => {
        if (!highlight.trim()) return text;

        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="bg-yellow-200 font-medium">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <li>
            <button
                onClick={onClick}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
                <IoMdSearch className="text-gray-400 text-sm" />
                <span className="text-sm">
                    {highlightText(suggestion, searchTerm)}
                </span>
            </button>
        </li>
    );
}