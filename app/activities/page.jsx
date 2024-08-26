import Header from "@/components/Header";
import Card from "@/components/Card";
import Image from "next/image";
import Footer from "@/components/Footer";
const ActivityCard = ({title, desc, src ="/images/DeTA.png" }) => {
  return (
    <div className='flex flex-row bg-slate-100 bg-opacity-25 shadow-xl hover:-translate-y-1 duration-150 rounded-2xl p-8 m-2'>
      <div className="flex flex-shrink-0 w-40 h-40 bg-slate-500 rounded-xl object-cover ">
        <Image src={src} alt="gambar" width={200} height={200} className="h-40 w-40 object-cover mix-blend-multiply bg-black" />
      </div>
      <div className="flex flex-col ml-10">
        <p className="text-wrap text-4xl">{title}</p>
        <p className="text-wrap text-slate-500 text-2xl">{desc}</p>
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
      <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem]">
        <h1 className="text-7xl">Activities</h1>
        <h2 className="text-3xl flex-wrap lg:mx-[26rem] text-center">
          DeTA is a community _______________________ ___ __________ ___
          __________ ___ __________ ___ ____ ___ __________ ___ __________ ___
          __________ ___
        </h2>
      </div>

      <div className="flex justify-center bg-white flex-col w-full p-16">
        <div className="pb-16">
          <p className="text-4xl">Our recent activities</p>
          <p className="text-slate-500 text-2xl">
            Catch up to our latest events
          </p>
        </div>
        <div className="flex justify-between gap-10 items-center px-[10%]">
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

      <div className="flex flex-col gap-10 p-16 bg-white">
        {/* Title of section */}
        <div className="pb-16">
          <p className="text-4xl">Types of Activities</p>
          <p className="text-slate-500 text-2xl">
            The list of activities that we do in DeTA
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 px-[10%]">
          <ActivityCard title="Workshop" desc="Description desc descdesc descdesc descdesc descdesc descdesc descdesc desc" />
          <ActivityCard title="Hackathon" desc="Description desc descdesc descdesc descdesc descdesc descdesc descdesc desc" />
          <ActivityCard title="Alumni Talk" desc="Description desc descdesc descdesc descdesc descdesc descdesc descdesc desc" />
          <ActivityCard title="Meetup" desc="Description desc descdesc descdesc descdesc descdesc descdesc descdesc desc" />
        </div>

      </div>

      <Footer />
    </main>
  );
}
