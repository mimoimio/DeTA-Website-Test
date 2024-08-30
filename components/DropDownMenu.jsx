import { useState } from "react";
import { NavList } from "./Header";
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden relative inline-block text-center">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Menu
                </button>
            </div>
            {isOpen && (<NavList/> || <div>cat</div>)}
        </div>
    );
};

export default DropdownMenu;
