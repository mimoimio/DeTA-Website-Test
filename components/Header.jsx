"use client";

import React from "react";
import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropDownMenu";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { stringify } from "postcss";

export const NavList = () => {
  return (
    <div className=" flex lg:h-[56px] lg:bg-white rounded-full shadow-md">
      <ul className="flex flex-wrap space-x-8 static m-0 w-full gap-2 text-xl p-2 ">
        <Pill address="blogs" title="Blogs"></Pill>
        <Pill address="about" title="About"></Pill>
        <Pill address="gallery" title="Gallery"></Pill>
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center font-bold font-montserrat bg-white rounded-full py-2 px-4 gap-4 text-xl h-[56px]  shadow-md"
    >
      {" "}
      <Image
        src={"/images/Deta.png"}
        width={40}
        height={40}
        alt="DeTA Logo"
        className=""
      />
      DeTA
    </Link>
  );
};

const ContactUs = () => {
  return (
    <Link
      href=""
      className={
        "h-[56px] flex items-center bg-white rounded-full px-4  shadow-md"
      }
    >
      Contact Us
      <GoArrowUpRight className="rounded-full bg-yellow-600 h-8 w-8 ml-4 text-white p-1" />
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col fixed w-full top-0 z-50 ">
      <div className="flex lg:flex-wrap lg:flex-row container m-auto  items-center justify-between p-4">
        <Logo />
        <NavList />
        <ContactUs />
      </div>
    </header>
  );
};

export default Header;
