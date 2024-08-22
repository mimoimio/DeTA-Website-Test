import Header from "@/components/Header";
import Card from "@/components/Card";
import Link from "next/link";
export default function About() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center gap-4 p-[2rem] sm:p-[6rem]">
        <h1 className="text-9xl">Community for Developers</h1>
        <h2 className="text-4xl flex-wrap sm:mx-[26rem] text-center">DeTA is a community _______________________ ___ __________ ___ __________ ___ __________ ___ ____ ___ __________ ___ __________ ___ __________ ___</h2>
        <h2 className="text-4xl flex-wrap sm:mx-[26rem] text-center">Our objectives are _______________________ ___ __________ ___ __________ ___ __________ ___ ____ ___ __________ ___ __________ ___ __________ ___</h2>
      </div>

      <div className="grid grid-cols-2 bg-white p-4 gap-4 sm:p-16 sm:gap-16">
        <Card title={"Vision"} desc={"To ___ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ ______"}></Card>
        <Card title={"Mission"} desc={"To ___ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ _________ ___ _____ ____ ____ ___ ___ ______"}></Card>
      </div>

      <div className="flex flex-col bg-white p-4 gap-4 sm:p-16 sm:gap-16">
        <div className="pb-4">
          <p className="text-4xl">What We Do in DeTA</p>
          <p className="text-slate-500 text-2xl">Lot's of Stuff</p>
        </div>

        <div className='flex flex-col shadow-xl rounded-2xl p-4 sm:p-16 sm:mx-64 '>
          <p className="text-4xl mb-4">Eventful and Active Continuous Programs</p>
          <p className="text-slate-500 text-2xl">As a community of growing young developers, we prioritize our learning and experience. We have _____ _____ _____ _____ _____ _____ _____ from  _____ _____ _____ _____ to  _____ _____ _____ _____ _____, finally,  _____ _____ _____ _____.</p>
        </div>

        <div className='flex flex-col shadow-xl rounded-2xl p-4 sm:p-16 sm:mx-64 '>
          <p className="text-4xl mb-4">Study and Sharing</p>
          <p className="text-slate-500 text-2xl">As a community of growing young developers, we prioritize our learning and experience. We have _____ _____ _____ _____ _____ _____ _____ from  _____ _____ _____ _____ to  _____ _____ _____ _____ _____, finally,  _____ _____ _____ _____.</p>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-slate-500 text-2xl text-center">If you wish to know more about what we do, continue in the
          <Link href={"activities"} className="bg-slate-300 h-min p-4 hover:bg-slate-400 duration-150 rounded-xl mx-2" >Activities</Link>
            section</p>
          
        </div>
      </div>
    </main>
  );
}