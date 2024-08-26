import React from "react";
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";


export default function  OrganisationDisplay ({position,description,title,linkedin})  {

    return (

    <div className=" bg-white p-4 m-5 rounded-lg "> 
    <div className="flex justify-center bg-white p-4 rounded-lg ">
         <Image
          src="/images/Photos.jpg" 
          alt={title}
          height={200}
          width={200}
          className="  mb-4 rounded "
        />
        </div>
        <div className="text-lg font-bold text-center">{position}</div>

        <div className="text-gray-600"> {description}</div>
       <div className="mt-4">
        <div className="text-blue-600"> <FaLinkedin /> {linkedin}</div>
       </div>
    </div>

    
    );
}

