import React from "react"
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";


const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between w-full p-4 bg-white">
      <div className="flex text-4xl">DeTA</div>
      <div className="flex items-center justify-between">
        <input className="flex rounded-full bg-blue-50 p-2 px-4 mr-4" placeholder="Search in DeTA" />
        <FaSearch /><FaMicrophone />

      </div>

    </header>
  );
}

export default Header;