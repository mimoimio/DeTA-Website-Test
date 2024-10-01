import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
import Footer from "@/components/Footer";

import { HiChatBubbleLeftRight } from "react-icons/hi2";

export default function About() {
  return (
    <main>
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-col items-center gap-4 p-[2rem] md:p-[2rem]">
          <h1 className="text-5xl md:text-7xl">Community for Developers</h1>
          <h2 className="text-xl md:text-2xl flex-wrap xl:mx-[10rem] text-center">
            DeTA is a community that is born in the International Islamic University Malaysia (IIUM). We consist of students that are enthusiastic in software development
          </h2>
          <h2 className="text-xl md:text-2xl flex-wrap xl:mx-[10rem] text-center">
            Our objectives are to foster a collaborative environment where members can network, share experiences, and support each of our professional growth
          </h2>
        </div>
        <div className="flex flex-col bg-white p-4 gap-4 sm:p-16 sm:gap-4">
          <div className="pb-4">
            <p className="text-2xl md:text-4xl">Our Background</p>
            <p className="text-slate-500 md:text-2xl">Our Origin</p>
          </div>
          <div className="flex flex-col shadow-xl rounded-2xl p-4 md:p-16 md:mx-32">
            <p className="text-2xl md:text-4xl mb-4">A study group</p>
            <p className="text-slate-500 md:text-2xl text-justify">
              DeTA started as a study group called Lambda. Lambda focuses on current 
              technologies being used in the Industry such as Docker, and niche topics 
              like Reactive Extensions. Lambda also has a small focus in Functional
              Programming hence the name which originates from Lambda expressions which 
              is an important concept in functional programming.
              <br/><br/>
              Owing to the effectiveness of the study group, the members of Lambda 
              decided to expand the concept as a movement that advocates for learning 
              and teaching advanced development concepts. That movement became Gerakan 
              Developer Tanahair, now shortened to Developer Tanah Air (DeTA).
              {/* What began as a small group of friends passionate about developing and creating has blossomed into something much greater.
<br/><br/>United by our shared curiosity and ambition, we - a group of aspiring students eager to gain experience and shape our future - formed a community that welcomed others like us. Over time, we grew, inviting more and more students who were excited to explore new possibilities.
<br/><br/>Today, that journey has culminated in DeTA - a vibrant and thriving community born from our collective passion, creativity, and desire to learn together. */}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-white p-4 gap-4 sm:p-16 sm:gap-16">
          <Card
            title={"Vision"}
            desc={
              "To create a thriving developer culture in IIUM.  We believe that IIUM alumni and students are excellent agents of change and we want to help them become the best they can be."
            }
          ></Card>
          <Card
            title={"Mission"}
            desc={
              "To build a dynamic and innovative developer community at IIUM, where alumni and students continuously push the boundaries of technology and create meaningful impacts"
            }
          ></Card>
        </div>

        <div className="flex flex-col bg-white p-4 gap-4 md:p-16 md:gap-16">
          <div className="pb-4">
            <p className="text-2xl md:text-4xl">Ongoing efforts to achieve that vision</p>
            <p className="text-slate-500 md:text-2xl">What we do in DeTA</p>
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
          <p className="text-slate-500 text-center p-4">
            If you wish to know more about what we do, please continue in the
            <Link href={"activities"} className="bg-blue-400 h-min px-2 hover:bg-blue-500 text-white duration-150 rounded-xl mx-1">
              Activities
            </Link>section
          </p>
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
      </div>
      <Footer />
    </main>
  );
}
