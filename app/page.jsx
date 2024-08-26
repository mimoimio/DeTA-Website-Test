import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Card from "@/components/Card";
import Link from "next/link";

const lessthan = "<";
const biggerthan = ">";
export default function Home() {
  return (
    <main>
      {/*  bg-blue-50 flex flex-col w-full */}
      <Header />
      <div className="flex justify-center p-16">
        <div className="flex flex-col items-center">
          <Image src="/images/Deta.png" className="mix-blend-multiply "
            width={600}
            height={600}
          />
          <div className="flex flex-col items-center">
            <p className="text-9xl">DeTA</p>
            <p className="text-2xl">Developer Tanah Air</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white flex-col w-full p-16">
        <div className="pb-16">
          <p className="text-4xl">Our recent activities</p>
          <p className="text-slate-500 text-2xl">
            Catch up to our latest events
          </p>
        </div>
        <div className="flex justify-between gap-10 items-center">
          <button className="bg-slate-300 h-min p-4 hover:bg-slate-500 duration-150 rounded-full">
            {lessthan}
          </button>
          <Image
            src={"/images/Deta.png"}
            width={1000}
            height={500}
            className="w-full object-cover h-[500px] shadow-lg rounded-lg"
          />
          <button className="bg-slate-300 h-min p-4 hover:bg-slate-500 duration-150 rounded-full">
            {biggerthan}
          </button>
        </div>
      </div>

      <div className="flex items-center bg-none flex-col w-full p-16">
        <div className="pb-16 ">
          <p className="text-4xl text-center">
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

      <div className="flex justify-center bg-white flex-col w-full p-16">
        <div className="pb-16">
          <p className="text-4xl">Membership Perks</p>
          <p className="text-slate-500 text-2xl">
            “What will I get if I joined DeTA?”
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16 w-full p-10">
          <Card
            title={"Enhance Website Skill"}
            desc={"Introduce to you about the website skills!"}
          />
          <Card
            title={"Knowledge"}
            desc={"Many valuable knowledge can be gained!"}
          />
          <Card
            title={"Knowledge"}
            desc={"Many valuable knowledge can be gained!"}
          />
          <Card
            title={"Coding Mobility Enhancement"}
            desc={"You will get lots of chances to become a coding expertise!"}
          />
          <Card
            title={"Knowledge"}
            desc={"Many valuable knowledge can be gained!"}
          />
          <Card
            title={"Knowledge"}
            desc={"Many valuable knowledge can be gained!"}
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
            title={"Free Programming Skill"}
            desc={"Adding more new skills in programming!"}
          />
          <Card
            title={"Lifetime Project"}
            desc={
              "You can do many projects to show your developer's performance!"
            }
          />
          <Card
            title={"Developing Experiences"}
            desc={"Get to know many developers and website expertises!"}
          />
        </div>
      </div>
      <div>clearly not</div>
    </main>
  );
}
