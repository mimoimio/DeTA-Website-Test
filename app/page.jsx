import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/new/ProjectCard";

export default function Home() {
  return (
    <main className="mt-0">
      <Header />

      {/* Hero */}
      <div className="flex md:flex-row flex-col justify-start items-center p-8 h-dvh hero-section ">
        <div className="flex flex-col items-start text-white container m-auto">
          <h1 className="text-5xl lg:text-9xl font-bold">DeTA</h1>
          <h2 className="text-xl lg:text-4xl font-bold bg-[#FD7014] p-2">
            Developer Tanah Air
          </h2>
          <p className="lg:w-1/3">
            A community of developers, git pushers, and turbo-nerds. Made in
            IIUM.
          </p>
          <ul className="flex mt-4">
            <li className="flex">
              <Link
                href={"about"}
                className="bg-[#FD7014] h-min p-4 duration-1000 rounded-xl"
              >
                Join Us
              </Link>
            </li>
            <li className="flex">
              <Link
                href={"about"}
                className="bg-[#eee] h-min text-black ms-4 p-4 hover:bg-slate-500 duration-150 rounded-xl"
              >
                Why Join Us?
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* What Do We Do? */}
      <div className="min-h-screen xl:p-8">
        <div className="pt-4">
          <h1 className="text-center font-bold text-3xl md:text-4xl xl:text-6xl">
            What We <span className="text-[#FD7014] p-1">Do?</span>
          </h1>
          <p className="text-center text-sm pt-3 md:text-xl p-3">
            We strive to leave an impact on the world through technology.
          </p>
        </div>
        <div className="flex flex-col  md:flex-row md:p-11  ">
          <div className="relative">
            <Image
              src="/images/mainpage/focuscoding.png"
              alt="focus coding"
              width={1000}
              height={1000}
              className="p-2  rounded-2xl md:object-cover brightness-50"
            />
            <div className="absolute top-20 xl:top-72 p-5 text-center ">
              <h1 className="text-white font-bold text-lg xl:text-3xl ">
                Coding for Everyone
              </h1>
              <p className="text-white text-sm xl:text-xl xl:pt-2 pb-2">
                From weekend hobbyst to aspiring pros, we believe coding should
                be acccessible and enjoyable for all.
              </p>
              <button className="backdrop-blur-sm text-white p-2 rounded-xl font-light shadow-xl border border-white xl:text-xl xl:border-solid ">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/images/mainpage/lepakcoding.png"
                alt="focus coding"
                width={1000}
                height={1000}
                className="p-2 rounded-2xl md:object-cover "
              />
            </div>

            <div className="p-2">
              <p className="text-center font-bold text-2xl xl:text-3xl xl:p-10">
                Join a supportive{" "}
                <span className="text-[#FD7014] p-1">network</span> of
                fellow programmers who share your{" "}
                <span className="text-[#FD7014] p-1">passion.</span>
              </p>
              <div className=" text-center p-2 pb-10">
                <Link
                  href="about"
                  className="inline bg-[#FD7014] h-min p-4 duration-400 rounded-xl hover:md:text-xl hover:xl:text-2xl"
                >
                  Read more info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovations by Our Community */}
      <div className="container mx-auto bg-white lg:p-24 pb-0 ">
        <h1 className="text-3xl font-bold text-center xl:text-6xl">
          <span className="px-2 text-[#FD7014] ">Innovations</span> by
          Our Community
        </h1>

        <p className="text-center pt-3 md:text-xl ">
          Expand your ideas and innovation throughout the days with us!
        </p>

        <div className="font-montserrat flex gap-8 py-16  m-auto w-full h-full overflow-x-scroll justify-start">
          <ProjectCard
            src="/images/ProReg.webp"
            title="ProReg: Manage Your Studies"
            desc="Simplify the scheduling of your timetable for the next semester."
          />
          <ProjectCard
            src="/images/SimplifiedImaluum.png"
            title="Simplified Imaluum"
            desc="A simplified version of i-Ma'luum for students. An attempt to make i-Ma'luum more user-friendly."
          />
          <ProjectCard 
            src="/images/bucava.png"
            title="Bucava: Online Business Card Paltform"
            desc="A business card vault mobile app for networking and collaboration."
          />
          <ProjectCard 
            src="/images/forecaster.png"
            title="Forecaster: Intelligent Cashflow Management"
            desc="An accounting and cashflow forecasting tool for small businesses."
          />
          <ProjectCard 
            src="/images/mindfulScroll.png"
            title="Mindful Scroll: A Quran app for Doom Scrollers"
            desc="A mobile application for managing screen time and promoting mindful digital habits."
          />
          <ProjectCard 
            src="/images/pdfCompanion.png"
            title="PDF Companion"
            desc="A pdf tool that began as a simple automation tool for pdf forms. now improved through iterations with form filling, annotations, and collaboration features."
          />
          <ProjectCard 
            src="/images/proRegAurum.png"
            title="ProReg Aurum: Enhanced Version of ProReg"
            desc="With a refined design and smarter features, ProReg Aurum makes it easier than ever to manage your courses, stay organized and connect with everything that matters in university life."
          />
          <ProjectCard 
            src="/images/scopeguard.png"
            title="ScopeGuard"
            desc="A SaaS product for managing scope of work and payments for freelance clients."
          />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-[#121212] text-white lg:p-24 pb-0">
        {/* <div className="bg-[#FD7014] flex w-fit m-auto rounded-full p-2 mt-5 mb-4 md:text-2xl">
          Upcoming Event
        </div> */}
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-center">
          <span className="px-2 text-[#FD7014] ">Upcoming DeTA Events</span> - {"Don't Miss Out!"}
        </h1>
        <p className="text-center pt-3 md:text-xl">
          Attend to our exciting programs and build your development dream here!
        </p>

        <div className="font-montserrat flex flex-col gap-8 py-16 m-auto w-full">
          <ul className="flex flex-col gap-8 w-full">
            {[1, 2].map((item) => (
              <li
                key={item}
                className="flex flex-col lg:flex-row items-center justify-around gap-6"
              >
                {/* Date and Location */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-auto px-4">
                  <p className="bg-[#FD7014] flex w-fit rounded-full px-2 py-1 text-sm">
                    26 April 2025
                  </p>
                  <p className="mt-2">Male Student Lounge, KICT, IIUM</p>
                </div>

                {/* Image */}
                <img
                  src={item === 1 ? "images/DeTAMeetup7_2.png" : "images/Hackathon.png"}
                  alt="DeTA Meetup 8.0"
                  title="DeTA Meetup 8.0"
                  className="w-full max-w-87.5 h-60 rounded-xl object-cover"
                />

                {/* Details */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-100 px-4">
                  <h3 className="text-2xl lg:text-3xl font-bold">DeTA Meetup 8.0</h3>
                  <p className="my-2">
                    Gather and network with everybody with different background in IT industry
                  </p>
                  <div className="flex gap-6 my-2">
                    <div>
                      <p className="font-semibold">Start</p>
                      <p>09:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold">End</p>
                      <p>11:00 PM</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-[#FD7014] mt-2 px-4 py-2 rounded-xl text-white font-semibold"
                  >
                    RSVP
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl xl:text-5xl text-center font-montserrat font-semibold bg-white py-16 px-[20%]">
        “Building the future, one commit at a time.” - Aiman Rahim, DeTA BDFL
      </h2>

      <Footer />
    </main>
  );
}
