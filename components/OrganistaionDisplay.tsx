import React from "react";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function OrganisationDisplay({ position, name, title, linkedin = "", imageSrc = "/images/DeTA.png"}) {

  return (
    <div className="flex flex-col gap-2 bg-white p-2 rounded-lg ">
      <div className="flex justify-center bg-white rounded-lg ">
        <Image
          src={imageSrc}
          alt={title}
          height={200}
          width={200}
          className="rounded border-2" />
      </div>
      <div className="text-lg font-bold text-center">{name}</div>
      <div className="text-lg text-gray-600 text-center">{position}</div>
      <Link href={linkedin} target="_blank" className="flex justify-center items-center text-blue-600"> 
        <FaLinkedin className="h-10 w-10" />
        {/* <h1 className="text-blue-300 hover:underline">{linkedin}</h1> */}
      </Link>
    </div>


  );
}

