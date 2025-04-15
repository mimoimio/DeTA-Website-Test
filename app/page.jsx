import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";
import Image from "next/image";
import ProjectCard from "@/components/new/ProjectCard";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <div className="flex md:flex-row flex-col justify-start items-center p-8 h-[100dvh] hero-section ">
        <div className="flex flex-col items-start text-white container m-auto">
          <h1 className="text-5xl lg:text-9xl font-bold">DeTA</h1>
          <h2 className="text-xl lg:text-4xl font-bold bg-[#FD7014] p-2">
            Developer Tanah Air
          </h2>
          <p className="lg:w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="flex mt-4">
            <li className="flex">
              <Link
                href={"about"}
                className="bg-[#FD7014] h-min p-4 duration-[1000ms] rounded-xl hover:bg-joker bg-center bg-cover"
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

      <div className="mx-auto container ">
        {/* What Do We Do? */}
        <div className="container bg-white lg:p-[6rem] pb-0 ">
          <h1 className="text-[40px] font-bold text-center">
            What Do We <span className="bg-[#FD7014] px-2 text-white">Do?</span>
          </h1>

          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-2 py-16 px-[2rem] bg-white m-auto h-[512px] box-content">
            <div className="flex flex-col w-full h-full ">
              <img
                src="/images/joker.gif"
                alt="joker"
                className="w-full h-full flex rounded-2xl"
              />
            </div>
            <div className="flex gap-1 flex-col w-full h-full">
              <div className="flex w-full h-[50%]">
                <img
                  src="/images/joker.gif"
                  alt="joker"
                  className="w-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex w-full flex-col h-[50%] p-4">
                <p className=" text-[2em] font-bold font-montserrat">
                  Join a supportive{" "}
                  <span className="bg-[#FD7014] px-2 text-white">network</span>{" "}
                  of fellow programmers who share your{" "}
                  <span className="bg-[#FD7014] px-2 text-white">passion</span>.
                </p>
                <Link
                  href={"about"}
                  className="inline w-fit mt-4 hover:underline"
                >
                  Read more info
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Innovations by Our Community */}
        <div className="container bg-white lg:p-[6rem] pb-0 ">
          <h1 className="text-[40px] font-bold text-center">
            <span className="bg-[#FD7014] px-2 text-white">Innovations</span> by
            Our Community
          </h1>

          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="font-montserrat flex gap-8 py-16  m-auto w-full h-full overflow-x-scroll justify-start">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="container bg-black text-white lg:p-[6rem] pb-0 ">
          <h1 className="text-[40px] font-bold text-center">
            <span className="bg-[#FD7014] px-2 text-white">Innovations</span> by
            Our Community
          </h1>

          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="font-montserrat flex gap-8 py-16  m-auto w-full h-full overflow-x-scroll justify-start">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        <h2 className="text-5xl text-center font-montserrat font-semibold bg-white py-[4rem] px-[20%]">
          “Build the future, one project at a time.” - Aiman, DeTA Founder
        </h2>

        {/* <div className="flex items-center justify-center bg-none flex-col w-full p-2 lg:p-16">
          <div className="pb-10 lg:pb-16 ">
            <p className="lg:text-4xl text-center">
              Interested in web or software development?
            </p>
            <p className="text-4xl lg:text-9xl drop-shadow-md text-center ">
              DeTA is the community for you!
            </p>
          </div>

          <div className="flex justify-between gap-10 items-center">
            <Link
              href={"about"}
              className="bg-slate-50 h-min p-4 hover:bg-slate-500 duration-150 rounded-xl"
            >
              Know More
            </Link>
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSf-4JnJQNX2Yf2n9I8BzQySDcG_CPpyDVAT8b8_AAAQT5n1EA/viewform"
              }
              target="_blank"
              className="bg-slate-700 text-slate-50 h-min p-4 hover:bg-slate-500 duration-150 rounded-xl"
            >
              Register Now
            </Link>
          </div>
        </div>

        <div className="flex justify-center bg-white flex-col w-full p-4 lg:p-16">
          <div className="pb-5">
            <p className="text-2xl lg:text-4xl">Membership Perks</p>
            <p className="text-slate-500 lg:text-2xl">
              “What will I get if I join DeTA?”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full px-[10%]">
            <Card
              title={"Enhance Website Skill"}
              desc={"Introduce to you about the website skills!"}
            />
            <Card
              title={"Knowledge"}
              desc={"Many valuable knowledge can be gained!"}
            />
            <Card
              title={"Coding Mobility Enhancement"}
              desc={
                "You will get lots of chances to become a coding expertise!"
              }
            />
            <Card
              title={"Free Programming Skill"}
              desc={"Adding more new skills in programming!"}
            />
            <Card
              title={"Coding Language Improvement"}
              desc={"Improve your understanding in every coding languages!"}
            />
            <Card
              title={"Software Development Skill"}
              desc={
                "You can learn many things about software development with us!"
              }
            />
            <Card
              title={"Lifetime Project"}
              desc={
                "You can do many projects to show your developer's performance"
              }
            />
            <Card
              title={"Developing Experiences"}
              desc={"Get to know many developers and website expertises!"}
            />
          </div>
        </div> */}
      </div>

      <Footer />
    </main>
  );
}
