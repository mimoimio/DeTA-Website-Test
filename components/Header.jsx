"use client";

import React, { useState } from "react";
import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";


export const NavList = ({ mobile = false, closeMenu = () => { } }) => {
  return (
    <div className={`${mobile ? "w-full" : "lg:h-7.5"}`}>
      <ul
        className={`flex ${mobile
          ? "flex-col gap-4"
          : "items-center justify-center gap-6 text-base font-medium "
          }`
        }
      >
        <Pill address="blogs" title="Blogs" onClick={closeMenu} />
        <Pill address="about" title="About" onClick={closeMenu} />
        <Pill address="gallery" title="Gallery" onClick={closeMenu} />
        <Pill address="affiliates" title="Affiliates" onClick={closeMenu} />
        <Pill address="resources" title="Resources" onClick={closeMenu} />
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md hover:scale-105 transition-transform"
    >
      <Image src="/images/Deta.png" width={32} height={32} alt="DeTA Logo" />
      <span className="text-base font-semibold">DeTA</span>
    </Link>
  );
};

const ContactUs = ({ mobile = false }) => {
  return (
    <Link
      href="/contact"
      className={`flex items-center rounded-full px-4 py-2 shadow-md bg-white font-medium ${mobile ? "w-full justify-center mt-4" : ""
        } hover:scale-105 transition-transform`}
    >
      Contact Us
      <GoArrowUpRight className="ml-3 bg-orange-500 text-white rounded-full h-6 w-6 p-1" />
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo />

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="bg-white rounded-full px-6 py-2 shadow-md">
              <NavList />
            </div>
          </div>

          <div className="hidden lg:flex">
            <ContactUs />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden rounded-lg p-2 bg-white "
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="w-full lg:hidden mt-4 space-y-4 bg-white p-4 rounded-xl">
            <NavList mobile closeMenu={closeMenu} />
            <ContactUs mobile />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
