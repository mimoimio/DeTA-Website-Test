"use client";

import React, { useState, useEffect } from "react";
import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

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

const Logo = ({ isScrolled }) => {
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo isScrolled={isScrolled} />

          <div className="hidden lg:flex flex-1 justify-center">
            <div className={`rounded-full px-6 py-2 shadow-md transition-all duration-300 ${
              isScrolled ? "bg-white/90 backdrop-blur-sm" : "bg-white"
            }`}>
              <NavList />
            </div>
          </div>

          <div className="hidden lg:flex">
            <ContactUs />
          </div>

          <button
            className={`lg:hidden rounded-lg p-2 ${isScrolled ? "bg-white" : "bg-white"}`}
            onClick={toggleMenu}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full lg:hidden mt-4 space-y-4 bg-white p-4 rounded-xl"
          >
            <NavList mobile closeMenu={closeMenu} />
            <ContactUs mobile />
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
