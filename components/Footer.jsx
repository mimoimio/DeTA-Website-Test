import React from "react";
import Pill from "./Pill";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <footer className="w-full pt-[2rem] p-2 pb-[6rem] bg-slate-50 text-gray-800">
      <div className="container grid grid-cols-2 grid-rows-2 md:flex md:flex-wrap md:justify-evenly md:mx-auto">
        <div className="flex flex-col mb-4 space-y-4 items-center">
          <Image
            src="/images/Deta.png"
            width={40}
            height={40}
            alt="DeTA Logo"
            className="transform scale-150 mix-blend-multiply"
          />
          <a href="mailto:deta@gmail.com" className="flex items-center flex-wrap">
            <MdOutlineEmail className="lg:text-2xl" />
            <span className="ml-2">deta@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col mb-4 items-center">
          <p className="font-bold text-lg mb-2">About DeTA</p>
          <ul className="flex flex-col space-y-1">
            <FooterButton address="" title="Home" />
            <FooterButton address="about" title="About" />
            <FooterButton address="about" title="Background" />
          </ul>
        </div>

        <div className="flex flex-col mb-4 items-center">
          <p className="font-bold text-lg mb-2">Our Programs</p>
          <ul className="flex flex-col space-y-1">
            <FooterButton address="" title="Hackathon" />
            <FooterButton address="about" title="Meetup" />
            <FooterButton address="about" title="Study Group" />
            <FooterButton address="about" title="Alumni Talk" />
            <FooterButton address="about" title="Workshop" />
          </ul>
        </div>

        <div className="flex flex-col mb-4 items-center">
          <p className="font-bold text-lg mb-2">Organization</p>
          <ul className="flex flex-col space-y-1">
            <FooterButton address="" title="The Team" />
            <FooterButton address="about" title="Register in DeTA" />
            <FooterButton address="about" title="Contact Us" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;