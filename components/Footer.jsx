import React from "react";
import Pill from "./Pill";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import FooterButton from "./FooterButton";
const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between w-full p-8 bg-slate-200 text-gray-800">
      <div className="flex flex-col items-start mb-4 space-y-4">
        <Image
          src="/images/Deta.png"
          width={40}
          height={40}
          alt="DeTA Logo"
          className="transform scale-150"
        />
        <a href="mailto:deta@gmail.com" className="flex items-center">
          <MdOutlineEmail className="text-2xl" />
          <span className="ml-2">deta@gmail.com</span>
        </a>
      </div>

      <div className="flex flex-col mb-4">
        <p className="font-bold text-lg mb-2">About DeTA</p>
        <ul className="flex flex-col space-y-1">
          <FooterButton address="" title="Home" />
          <FooterButton address="about" title="About" />
          <FooterButton address="about" title="Background" />
        </ul>
      </div>

      <div className="flex flex-col mb-4">
        <p className="font-bold text-lg mb-2">Our Programs</p>
        <nav className="flex flex-col space-y-1">
          <a href="#" className="hover:underline">
            Hackathon
          </a>
          <a href="#" className="hover:underline">
            Meetup
          </a>
          <a href="#" className="hover:underline">
            Study Group
          </a>
          <a href="#" className="hover:underline">
            Alumni Talk
          </a>
          <a href="#" className="hover:underline">
            Workshop
          </a>
        </nav>
      </div>

      <div className="flex flex-col mb-4">
        <p className="font-bold text-lg mb-2">Organization</p>
        <nav className="flex flex-col space-y-1">
          <a href="#" className="hover:underline">
            The Team
          </a>
          <a href="#" className="hover:underline">
            Register in DeTA
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
