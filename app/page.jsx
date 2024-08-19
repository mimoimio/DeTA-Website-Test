import Header from "@/components/Header";
import DisplayProgram from "@/components/DisplayProgram";
import NavBar from "@/components/NavBar"
import Image from "next/image";
const lessthan = "<"
const biggerthan = ">"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      {/*  bg-blue-50 flex flex-col w-full */}
      <Header />
      <NavBar />

      <div className="flex justify-center p-16">
        <div className="flex items-center">
          <Image src="/images/Deta.png" className=""
            width={500}
            height={500}
          />
          <div className="flex flex-col items-center">
            <p className="ml-20 text-9xl">DeTA</p>
            <p className="ml-20 text-lg">Developer Tanah Air</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-white flex-col w-full p-16">
        <div className="pb-16">
          <p>Our recent activities</p>
          <p className="text-slate-400">Catch up to our latest events</p>
        </div>
        <div className="flex justify-between gap-10 items-center">
          <button className="bg-slate-300 h-min p-4 hover:bg-slate-500 duration-150 rounded-full">{lessthan}</button>
          <Image
            src={"/images/Deta.png"}
            width={1000}
            height={500}
            className="w-full object-cover h-[500px]"
          />
          <button className="bg-slate-300 h-min p-4 hover:bg-slate-500 duration-150 rounded-full">{biggerthan}</button>
          </div>

      </div>
    </main>
  );
}