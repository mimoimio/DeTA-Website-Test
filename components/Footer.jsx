import React from "react";
import Pill from "./Pill";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import FooterButton from "./FooterButton";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#080808]">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent"></div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Image
                  src="/images/Deta.png"
                  width={40}
                  height={40}
                  alt="DeTA Logo"
                  className="relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-orange-600 rounded-full blur-lg opacity-50"></div>
              </div>
              <span className="text-xl font-bold">DeTA</span>
            </div>

            <p className="text-white/60 mb-6 leading-relaxed">
              Developer Tanah Air - A community of developers building the future, one commit at a time.
            </p>

            <a
              href="mailto:deta@gmail.com"
              className="inline-flex items-center gap-3 text-white/80 hover:text-[#FF6B00] transition-colors"
            >
              <MdOutlineEmail className="w-5 h-5" />
              <span>deta@gmail.com</span>
            </a>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-[#FF6B00] hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-[#FF6B00] hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-[#FF6B00] hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-[#FF6B00] hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">About DeTA</h3>
            <ul className="space-y-3">
              <FooterButton address="" title="Home" />
              <FooterButton address="about" title="About" />
              <FooterButton address="about" title="Background" />
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Programs</h3>
            <ul className="space-y-3">
              <FooterButton address="about" title="Hackathon" />
              <FooterButton address="about" title="Meetup" />
              <FooterButton address="about" title="Study Group" />
              <FooterButton address="about" title="Alumni Talk" />
              <FooterButton address="about" title="Workshop" />
            </ul>
          </div>

          {/* Organization Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Organization</h3>
            <ul className="space-y-3">
              <FooterButton address="" title="The Team" />
              <FooterButton address="about" title="Register in DeTA" />
              <FooterButton address="contact" title="Contact Us" />
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <FooterButton address="blogs" title="Blogs" />
              <FooterButton address="gallery" title="Gallery" />
              <FooterButton address="activities" title="Activities" />
              <FooterButton address="organisation" title="Organisation" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} DeTA. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            Made with <span className="text-[#FF6B00]">♥</span> by IIUM Developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
