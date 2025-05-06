import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";
import Image from "next/image";
import ProjectCard from "@/components/new/ProjectCard";

export default function Home() {
  return (
    <main className="mt-0">
      <Header />
{/* <div>
  <div className="relative">
    <Image
      src="/images/DetaMeetup7.png"
      alt="hero"
      width={1000}
      height={1000}
      className="w-full h-[100dvh] object-cover brightness-50"
    />
    <div className="absolute top-1/2  transform  -translate-y-1/2  text-white p-10 xl:p-24 flex flex-col items-start  container m-auto mt-10">
      <h1 className=" text-6xl lg:text-9xl font-bold">DeTA</h1>
      <h2 className="text-xl lg:text-4xl font-bold bg-[#FD7014] p-1 md:p-2">Developer Tanah Air</h2>
      <p className="md:text-xl"> A community of developers, git pushers and turbo-nerds. Made in
      IIUM.</p>
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

</div> */}

      {/* Hero */}
       <div className="flex md:flex-row flex-col justify-start items-center p-8 h-[100dvh] hero-section ">
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

      <div className="min-h-screen xl:p-8">
        <div className="pt-4">
          <h1 className="text-center font-bold text-3xl md:text-4xl xl:text-6xl">
            What Do We <span className="bg-[#FD7014] text-white p-1">Do?</span>
          </h1>
          <p className="text-center text-sm pt-3 md:text-xl p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <span className="bg-[#FD7014] text-white p-1">network</span> of
                fellow programmers who share your{" "}
                <span className="bg-[#FD7014] text-white p-1">passion.</span>
              </p> 
              <div className=" text-center p-2 pb-10">
                <Link
                  href="about"
                  className="inline hover:underline md:text-xl xl:text-2xl"
                >
                  Read more info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Do We Do?
        <div className="container bg-white pt-[2rem] lg:p-[6rem] pb-0 ">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center">
            What Do We <span className="bg-[#FD7014] px-2 text-white">Do?</span>
          </h1>

          <p className="text-center text-lg md:text-xl pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-2 py-16 px-[2rem] bg-white m-auto h-[512px] box-content">
            <div className="flex flex-col w-full h-full ">
              <img
                src="/images/mainpage/focuscoding.png"
                alt="joker"
                className="w-full h-full object-cover flex rounded-2xl"
              />
            </div>
            <div className="flex gap-1 flex-col w-full h-full">
              <div className="flex w-full h-[50%]">
                <img
                  src="/images/mainpage/lepakcoding.png"
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
        </div> */}

      {/* Innovations by Our Community */}
      <div className="container mx-auto bg-white lg:p-[6rem] pb-0 ">
        <h1 className="text-3xl font-bold text-center xl:text-6xl">
          <span className="bg-[#FD7014] px-2 text-white ">Innovations</span> by
          Our Community
        </h1>

        <p className="text-center pt-3 md:text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="font-montserrat flex gap-8 py-16  m-auto w-full h-full overflow-x-scroll justify-start">
          <ProjectCard
            src="/images/ProReg.webp"
            title="ProReg: Manage Your Studies"
            desc="Lorem Ipsum"
          />
          <ProjectCard
            src="/images/SimplifiedImaluum.png"
            title="Simplified Imaluum"
            desc="Lorem Ipsum"
          />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

  
      
<div className="bg-[#121212] text-white lg:p-[6rem] pb-0">
  <div className="bg-[#FD7014] flex w-fit m-auto rounded-full p-2 mt-5 mb-4 md:text-2xl">
    Upcoming Event
  </div>
  <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-center">
{"Upcoming DeTA Events - Don't Miss Out!"}
  </h1>
  <p className="text-center pt-3 md:text-xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            className="w-full max-w-[350px] h-[240px] rounded-xl object-cover"
          />

          {/* Details */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[400px] px-4">
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

      {/* <div className=" bg-[#121212] text-white lg:p-[6rem] pb-0">
        <div className="bg-[#FD7014] flex w-fit m-auto rounded-full p-2 mt-5 mb-4 md:text-2xl  ">
          Upcoming Event
        </div>
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-center">
          {"Upcoming DeTA Events - Don't Miss Out!"}
        </h1>

        <p className="text-center pt-3 md:text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="font-montserrat flex gap-8 py-16 m-auto w-full ">
          <ul className="flex flex-col gap-4 w-full">
            <li className="flex justify-around">
              <div className="flex flex-col justify-center h-[240px] px-4">
                <p className="bg-[#FD7014] flex w-fit rounded-full px-2">
                  26 April 2025
                </p>
                <p>Male Student Lounge, KICT, IIUM</p>
              </div>
              <img
                src="images/DeTAMeetup7_2.png"
                alt="DeTA Meetup 8.0"
                title="DeTA Meetup 8.0"
                className="h-[240px] w-[350px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center w-[400px] px-4">
                <h3 className="text-3xl font-bold">DeTA Meetup 8.0</h3>
                <p>
                  Gather and network with everybody with different background in
                  IT industry
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09.00 PM</td>
                      <td>11:00 PM</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="bg-[#FD7014] p-2 rounded-xl w-fit">
                  RSVP
                </a>
              </div>
            </li>
            <hr />
            <li className="flex justify-around">
              <div className="flex flex-col justify-center h-[240px] px-4">
                <p className="bg-[#FD7014] flex w-fit rounded-full px-2">
                  26 April 2025
                </p>
                <p>Male Student Lounge, KICT, IIUM</p>
              </div>
              <img
                src="images/Hackathon.png"
                alt="DeTA Meetup 8.0"
                title="DeTA Meetup 8.0"
                className="h-[240px] w-[350px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center w-[400px] px-4">
                <h3 className="text-3xl font-bold">DeTA Meetup 8.0</h3>
                <p>
                  Gather and network with everybody with different background in
                  IT industry
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09.00 PM</td>
                      <td>11:00 PM</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="bg-[#FD7014] p-2 rounded-xl w-fit">
                  RSVP
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      <h2 className="text-xl md:text-2xl xl:text-5xl text-center font-montserrat font-semibold bg-white py-[4rem] px-[20%]">
        “Building the future, one commit at a time.” - Aiman Rahim, DeTA BDFL
      </h2>

      <Footer />
    </main>
  );
}

{
  /* <div className="flex items-center justify-center bg-none flex-col w-full p-2 lg:p-16">
          <div className="pb-10 lg:pb-16 ">
            <p className="lg:text-4xl text-center">
              Interested in web or software development?
            </p>
          <p className="drop-shadow-md text-9xl text-center ">
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
        </div> */
}
