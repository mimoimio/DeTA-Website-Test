"use client";

import React from "react";
import Pill from "./Pill";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import FooterButton from "./FooterButton";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  { icon: FaDiscord, href: "#", label: "Discord", color: "hover:bg-indigo-500" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
  { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
  { icon: FaGithub, href: "#", label: "GitHub", color: "hover:bg-gray-800" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-16 pb-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/mainpage/deta2.png"
                width={40}
                height={40}
                alt="DeTA Logo"
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-white">DeTA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              A community of developers, git pushers, and turbo-nerds. 
              Building the future, one commit at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} text-white transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">About DeTA</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link href="/organisation" className="hover:text-orange-500 transition-colors">The Team</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/activities" className="hover:text-orange-500 transition-colors">Meetups</Link></li>
              <li><Link href="/activities" className="hover:text-orange-500 transition-colors">Hackathons</Link></li>
              <li><Link href="/activities" className="hover:text-orange-500 transition-colors">Study Groups</Link></li>
              <li><Link href="/activities" className="hover:text-orange-500 transition-colors">Workshops</Link></li>
              <li><Link href="/activities" className="hover:text-orange-500 transition-colors">Alumni Talks</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="mailto:deta@gmail.com" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <MdOutlineEmail className="text-xl" />
              <span>deta@gmail.com</span>
            </a>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DeTA. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
