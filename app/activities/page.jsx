import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import RecentActivities from "@/components/RecentActivities";
const ActivityCard = ({ title, desc, src = "/images/DeTA.png" }) => {
  return (
    <div className='flex flex-col lg:flex-row bg-slate-100 bg-opacity-25 shadow-xl hover:-translate-y-1 duration-150 rounded-2xl p-4 lg:p-8'>
      <div className="flex flex-shrink-0  rounded-xl object-cover "> {/*bg-slate-500*/}
        <Image src={src} alt="gambar" width={200} height={200} className="w-full h-32 lg:h-40 lg:w-40 object-cover mix-blend-multiply bg-black" />
      </div>
      <div className="flex flex-col m-4">
        <p className="text-wrap text-2xl lg:text-4xl">{title}</p>
        <p className="text-wrap text-slate-500 lg:text-2xl">{desc}</p>
      </div>
    </div>
  );
};
export default function Activities() {
  const lessthan = "<";
  const biggerthan = ">";
  return (
    <main>
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem]">
          <h1 className="text-5xl lg:text-7xl">Activities</h1>
          {/* <h2 className="text-xl lg:text-2xl flex-wrap lg:mx-[26rem] text-center">For the memories within DeTA</h2> */}
        </div>

        <RecentActivities />
        
        <div className="flex flex-col gap-10 p-4 lg:p-16 bg-white">
          {/* Title of section */}
            <div className="pb-2 lg:pb-16">
                <p className="text-2xl lg:text-4xl">Types of Activities</p>
                <p className="text-slate-500 lg:text-2xl">The list of activities that we do in DeTA</p>
            </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-2">
            <ActivityCard title="Workshop" desc=" Get practical experience and work directly on real-world projects!" />
            <ActivityCard title="Study Group" desc="Boost Your Learning and Stay Motivated!" />
            <ActivityCard title="Hackathon" desc="Unleash Your Creativity and Problem-Solving Skills!" />
            <ActivityCard title="Alumni Talk" desc="Gain Real-World Insights and Career Advice!" />
            <ActivityCard title="Meetup" desc="Expand Your Network and Exchange Ideas!" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
