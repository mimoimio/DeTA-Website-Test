"use client";

import React, { useState, useEffect } from "react";
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
        <Pill address="activities" title="Activities" onClick={closeMenu} />
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 rounded-2xl glass px-4 py-2.5 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="relative">
        <Image src="/images/Deta.png" width={28} height={28} alt="DeTA Logo" className="relative z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-orange-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <span className="text-base font-bold tracking-tight">DeTA</span>
      <span className="mono-badge text-[#FF6B00] ml-1">dev</span>
    </Link>
  );
};

const ContactUs = ({ mobile = false }) => {
  return (
    <Link
      href="#contact"
      className={`flex items-center rounded-full px-4 py-2 shadow-md font-medium ${mobile ? "w-full justify-center mt-4" : ""
        } hover:scale-105 transition-transform hover:bg-white/10`}
    >
      <span>Contact Us</span>
      <GoArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45 group-hover:scale-110" />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-700"></div> */}
    </Link>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="glass rounded-2xl px-2 py-1.5">
              <NavList />
            </div>
            <ContactUs />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FiMenu className={`w-5 h-5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'opacity-100'}`} />
            <FiX className={`absolute w-5 h-5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96 mt-5 opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="glass rounded-2xl p-5 space-y-4">
            <NavList mobile closeMenu={closeMenu} />
            <div className="h-px "></div>
            <ContactUs mobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
