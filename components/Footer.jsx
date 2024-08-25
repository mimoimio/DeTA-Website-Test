import React from "react"
import Pill from "./Pill";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between w-full p-11 bg-slate-200">
        <div>
        <Image
        src={"/images/Deta.png"}
        width={40}
        height={40}
        className="scale-[1.6] mix-blend-multiply mx-6"
      />
            <MdOutlineEmail />
        </div>

        <div>
                <p className="font-bold">About DeTA</p>
                <br />
                <h6>Home</h6>
                <h6>About</h6>
                <h6>Background</h6>
        </div>

        <div>
        <p className="font-bold">Our programs</p>
                <br />
                <h6>Hackathon</h6>
                <h6>Meetup</h6>
                <h6>Study Group</h6>
                <h6>Alumni Talk</h6>
                <h6>Workshop</h6>
        </div>

        <div>
        <p className="font-bold">Organisation</p>
                <br />
                <h6>The Team</h6>
                <h6>Register in DeTA</h6>
                <h6>Contact Us</h6>
        </div>
    </footer>
  );
}

export default Footer;