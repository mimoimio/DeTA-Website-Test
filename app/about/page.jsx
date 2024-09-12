import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import Footer from "@/components/Footer";

import { HiChatBubbleLeftRight } from "react-icons/hi2";


export default function About() {
  const bgDesc = 'Our "Origin"';
  const whatWeDoDesc = "Lot's of Stuff";
  return (
    <main>
      {/* mention about DeTA is in UIAM */}
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-col items-center gap-4 p-[2rem] md:p-[2rem]">
          <h1 className="text-5xl md:text-7xl">Community for Developers</h1>
          <h2 className="text-xl md:text-2xl flex-wrap xl:mx-[10rem] text-center">
            DeTA is a community that is born in the International Islamic University Malaysia (IIUM). We consist of students that are enthusiastic in software, web and development in general
          </h2>
          <h2 className="text-xl md:text-2xl flex-wrap xl:mx-[10rem] text-center">
            Our objectives are _______________________ ___ __________ ___
            __________ ___ __________ ___ ____ ___ __________ ___ __________ ___
            __________ ___
          </h2>
        </div>
        <div className="flex flex-col bg-white p-4 gap-4 sm:p-16 sm:gap-4">
          <div className="pb-4">
            <p className="text-2xl md:text-4xl">Our Background</p>
            <p className="text-slate-500 md:text-2xl">{bgDesc}</p>
          </div>
          <div className="flex flex-col shadow-xl rounded-2xl p-4 md:p-16 md:mx-32 ">
            <p className="text-2xl md:text-4xl">Aspiring Developers Friend Group</p>
            <p className="text-slate-500 md:text-2xl">
              We started off with only a friend group that likes to develop and create. From there, we, the students that are aspiring to gain experience and things in the near future, formed a community by inviting more and more curious students into our group. In the current time, DeTA is the culmination of said story.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-white p-4 gap-4 sm:p-16 sm:gap-16">
          <Card
            title={"Vision"}
            desc={
              "To ___ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ ______"
            }
          ></Card>
          <Card
            title={"Mission"}
            desc={
              "To ___ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ ______"
            }
          ></Card>
        </div>

        <div className="flex flex-col bg-white p-4 gap-4 md:p-16 md:gap-16">
          <div className="pb-4">
            <p className="text-2xl md:text-4xl">What We Do in DeTA</p>
            <p className="text-slate-500 md:text-2xl">{whatWeDoDesc}</p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:flex md:justify-evenly border-4 rounded-xl py-10">
            <div className="flex flex-col items-center">
              <div className=" border-4 border-cyan-500 rounded-full p-2 w-min">
                <HiChatBubbleLeftRight className="text-4xl md:text-9xl text-cyan-500" />
              </div>
              <p className="text-2xl md:text-4xl">Workshop</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" border-4 border-cyan-500 rounded-full p-2 w-min">
                <HiChatBubbleLeftRight className="text-4xl md:text-9xl text-cyan-500" />
              </div>
              <p className="text-2xl md:text-4xl">Alumni Talk</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" border-4 border-cyan-500 rounded-full p-2 w-min">
                <HiChatBubbleLeftRight className="text-4xl md:text-9xl text-cyan-500" />
              </div>
              <p className="text-2xl md:text-4xl">Meetup</p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" border-4 border-cyan-500 rounded-full p-2 w-min">
                <HiChatBubbleLeftRight className="text-4xl md:text-9xl text-cyan-500" />
              </div>
              <p className="text-2xl md:text-4xl">Hackathon</p>
            </div>
          </div>
          {/* 
          <div className="flex flex-col shadow-xl rounded-2xl p-4 md:p-16 md:mx-64 ">
            <p className="text-xl md:text-2xl mb-4">
              Eventful and Active Continuous Programs
            </p>
            <p className="text-slate-500 md:text-2xl">
              As a community of growing young developers, we prioritize our
              learning and experience. We have _____ _____ _____ _____ _____ _____
              _____ from _____ _____ _____ _____ to _____ _____ _____ _____ _____,
              finally, _____ _____ _____ _____.
            </p>
          </div>

          <div className="flex flex-col shadow-xl rounded-2xl p-4 md:p-16 md:mx-64 ">
            <p className="text-2xl md:text-4xl mb-4">Study and Sharing</p>
            <p className="text-slate-500 md:text-2xl">
              As a community of growing young developers, we prioritize our
              learning and experience. We have _____ _____ _____ _____ _____ _____
              _____ from _____ _____ _____ _____ to _____ _____ _____ _____ _____,
              finally, _____ _____ _____ _____.
            </p>
          </div> */}
        </div>

        <div className="flex justify-center items-center">
          <p className="text-slate-500 text-center p-4">
            If you wish to know more about what we do, please continue in the
            <Link href={"activities"} className="bg-blue-400 h-min px-2 hover:bg-blue-500 text-white duration-150 rounded-xl mx-1">
              Activities
            </Link>section
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
