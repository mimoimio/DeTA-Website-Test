import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
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
      <Footer />
    </main>
  );
}
