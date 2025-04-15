import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

export default function About() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="lg:pl-10 lg:pr-10 mb-10 lg:mb-0 lg:w-1/2">
          <h1 className="pt-7 text-4xl sm:text-5xl lg:text-6xl font-bold pb-6 lg:pb-12">
            Developing Excellence Together
          </h1>
          <p className="text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            eveniet eius cumque necessitatibus dignissimos, corporis odio enim
            voluptate nemo nihil. Quaerat nulla aperiam, commodi iste
            accusantium ea quos itaque eveniet.
          </p>
        </div>
        <div className="lg:pr-10 flex justify-center lg:w-1/2">
          <Image
            src="/images/DetaMeetup7.png"
            alt="gambar"
            width={700}
            height={700}
            className="object-cover mix-blend-multiply bg-black w-full max-w-md lg:max-w-full"
            priority
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto min-h-screen text-center py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="px-4 lg:px-20 mb-10 lg:mb-20">
          <h1 className="text-xl sm:text-2xl font-semibold">
            At DeTA we are committed to revolutionizing the digital world with
            innovative, sustainable, and cost effective solutions. With a proven
            track record of delivering exceptional projects, we combine
            state-of-the-art technology, skill expertise, and customer-centric
            approaches to bring vision to life.
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-10 pt-10 justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold">10+</h1>
            <p>Completed Projects</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold">60+</h1>
            <p>Community Members</p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold">10+</h1>
            <p>Organized Events</p>
          </div>
        </div>
      </div>

      {/* Mission Sections - Repeating pattern */}
      {[1, 2, 3].map((item, index) => (
        <div 
          key={index} 
          className={`mx-auto min-h-screen flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} py-10 px-4 sm:px-6 lg:px-8 items-center`}
        >
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:px-10">
            <Image
              src="/images/DetaMeetup7.png"
              alt="gambar"
              width={700}
              height={700}
              className="object-cover mix-blend-multiply bg-black w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:px-10">
            <h1 className="text-3xl sm:text-4xl font-bold pb-5">
              Our Mission
            </h1>
            <h2 className="pb-5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2">✅</span> 
                <span>Bla3 We target to be the best in the world.</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✅</span> 
                <span>Bla3 We target to be the best in the world.</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✅</span> 
                <span>Bla3 We target to be the best in the world.</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">✅</span> 
                <span>Bla3 We target to be the best in the world.</span>
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Work Section */}
      <div className="mx-auto bg-black text-white text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl p-3 lg:p-5">
          How <span className="bg-orange-600">We</span> Do Work
        </h1>
        <p className="text-xl sm:text-2xl font-light p-3 lg:p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10">
          <Image
            src="/images/DetaMeetup7.png"
            alt="gambar"
            width={500}
            height={500}
            className="mx-auto w-full max-w-xs sm:max-w-md"
          />
        </div>
      </div>
      
      <Footer />
    </>
  );
}