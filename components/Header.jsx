import React from "react"
import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between w-full p-4 bg-white">
      {/* <div className="flex text-4xl">DeTA</div> */}
      <Image
        src={"/images/Deta.png"}
        width={40}
        height={40}
        className="scale-[1.6] mix-blend-multiply mx-6"
      />

      <div className="flex flex-wrap items-center justify-center bg-white">
        <ul className="flex space-x-8">
          <Pill address="" title="Home"></Pill>
          <Pill address="about" title="About"></Pill>
          <Pill address="activities" title="Activities"></Pill>
          <Pill address="organisation" title="Team"></Pill>
          <Pill address="gallery" title="Gallery"></Pill>
          <Pill address="contact" title="Contact Us"></Pill>

          <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSf-4JnJQNX2Yf2n9I8BzQySDcG_CPpyDVAT8b8_AAAQT5n1EA/viewform"} target="_blank" className="bg-slate-800 hover:bg-slate-600 px-4 py-1 rounded-lg text-slate-50 duration-75 hover:-translate-y-1">
            <li>Register Now</li>
          </Link>
        </ul>
      </div>
      {/* <div className="flex items-center justify-between">
        <input className="flex rounded-full bg-blue-50 p-2 px-4 mr-4" placeholder="Search in DeTA" />
        <FaSearch /><FaMicrophone />

      </div> */}

    </header>
  );
}

export default Header;