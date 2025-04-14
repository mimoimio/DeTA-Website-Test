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
      <div className="mx-auto h-screen flex items-center justify-center">
        <div className="pl-20 pr-20">
          <h1 className="text-6xl font-bold pb-12">
            Developing Excellence Together
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            eveniet eius cumque necessitatibus dignissimos, corporis odio enim
            voluptate nemo nihil. Quaerat nulla aperiam, commodi iste
            accusantium ea quos itaque eveniet.
          </p>
        </div>
        <div className="pr-20 flex justify-center">
          <Image
            src="/images/DetaMeetup7.png"
            alt="gambar"
            width={700}
            height={700}
            className="object-cover mix-blend-multiply bg-black"
          />
        </div>
      </div>

      <div className="mx-auto h-screen text-center pt-10">
        <div className="px-20">
          <h1 className="text-2xl font-semibold">
            At DeTA we are committed to revolutionizing the digital world with
            innovative, sustainable, and cost effective solutions. With a proven
            track record of delivering exceptional projects, we combine
            state-of-the-art technology, skill expertise, and customer-centric
            approaches to bring vision to life.
          </h1>
        </div>
        <div className="flex space-x-10 pt-10 justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">10+</h1>
            <p>Completed Projects</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">60+</h1>
            <p>Community Members</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">10+</h1>
            <p>Organized Events</p>
          </div>
        </div>
      </div>

      <div className="mx-auto h-screen  flex">
      <div className="pl-20 pr-20">
          <Image
            src="/images/DetaMeetup7.png"
            alt="gambar"
            width={700}
            height={700}
            className="object-cover mix-blend-multiply bg-black"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold pb-5">
              Our Mission
          </h1>
          <h2 className=" pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <h3 className="space-y-5">
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
          </h3>
        </div>
      </div>

      <div className="mx-auto h-screen  flex">
      <div className="pl-20">
          <h1 className="text-4xl font-bold pb-5">
              Our Mission
          </h1>
          <h2 className=" pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <h3 className="space-y-5">
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
          </h3>
        </div>
      <div className="pr-20">
          <Image
            src="/images/DetaMeetup7.png"
            alt="gambar"
            width={700}
            height={700}
            className="object-cover mix-blend-multiply bg-black"
          />
        </div>
     
      </div>

      <div className="mx-auto h-screen  flex">
      <div className="pl-20 pr-20">
          <Image
            src="/images/DetaMeetup7.png"
            alt="gambar"
            width={700}
            height={700}
            className="object-cover mix-blend-multiply bg-black"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold pb-5">
              Our Mission
          </h1>
          <h2 className=" pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <h3 className="space-y-5">
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
            <p> ✅ Bla3 We target to be the best in the world.</p>
          </h3>
        </div>
      </div>

      <div className="mx-auto bg-black text-white text-center pb-32">
  <h1 className="font-semibold text-6xl p-5">
    How <span className="bg-orange-600">We</span> Do Work
  </h1>
  <p className="text-2xl font-light p-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <Image
    src="/images/DetaMeetup7.png"
    alt="gambar"
    width={500} // reduced from 700
    height={500}
    className="mx-auto "
  />
</div>
<Footer />
    </>
  );
}
