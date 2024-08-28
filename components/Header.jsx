import React from "react";
import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex flex-col lg:flex-wrap lg:flex-row container m-auto justify-center items-center lg:justify-between w-full p-4 bg-white">
      <Link href={"/"}>
        <Image
          src={"/images/Deta.png"}
          width={40}
          height={40}
          className="scale-[1.6] mix-blend-multiply mx-6"
        />
      </Link>

      <div className="flex items-center bg-white ">
        <ul className="grid grid-cols-3 gap-2 lg:flex lg:flex-wrap lg:space-x-8 p-2">
          <Pill address="" title="Home"></Pill>
          <Pill address="about" title="About"></Pill>
          <Pill address="activities" title="Activities"></Pill>
          <Pill address="organisation" title="Team"></Pill>
          <Pill address="gallery" title="Gallery"></Pill>
          <Pill address="contact" title="Contact Us"></Pill>

          <Link
            href={"https://docs.google.com/forms/d/e/1FAIpQLSf-4JnJQNX2Yf2n9I8BzQySDcG_CPpyDVAT8b8_AAAQT5n1EA/viewform"}
            target="_blank"
            className="bg-slate-800 hover:bg-slate-600 px-4 py-1 rounded-lg text-slate-50 duration-75 hover:-translate-y-1">
            <li>Register Now</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
