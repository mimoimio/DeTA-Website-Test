import React from "react"
import Pill from "./Pill";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex gap-[4rem] items-start justify-center w-full p-4 bg-white pb-[8rem] border-slate-100 border-4 pt-16 ">
      {/* <div className="flex text-4xl">DeTA</div> */}
      <div className="">
        <Image
          src={"/images/Deta.png"}
          width={40}
          height={40}
          className="scale-[1.6] mix-blend-multiply mx-6"
        />
      </div>

      <ul className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">About DeTA</h1>
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
      <ul className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Our Programs</h1>
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
      <ul className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Our Organisation</h1>
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
  );
}

export default Footer;