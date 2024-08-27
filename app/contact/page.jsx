import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Contact() {
  return (
    <main>
      <Header />
      <div>
        <h1 className="text-7xl text-center">Contact Us</h1>
        <h4 className="text-2xl text-center">Through</h4>
      </div>

      <div className="w-1/2 mx-auto bg-white p-10 rounded-lg mt-10 mb-12">
        <div className="border border-black rounded-lg">
          <div className="flex justify-center">
            <div className="m-5 p-5">
              <h5 className="text-xl">Send us an Email at : </h5>
            </div>
            <div className="m-5 p-5">
              <h5 className="text-xl text-end">DeTA@gmail.com</h5>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="#sendmessage">
              <div className="px-36 py-2 mb-10 bg-slate-800 hover:bg-slate-600 rounded-lg text-slate-50 duration-75 hover:-translate-y-1">
                Send a Message Now!
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div id="sendmessage">
        <h1 className="text-7xl text-center">Send a Message Now</h1>
      </div>

      <div className="w-1/2 h-screen mx-auto bg-white p-10 rounded-lg mt-10 mb-12">
        <div className="border border-black rounded-lg h-[97%] p-7">
          <div>
            <h2 className="text-center text-3xl">Email</h2>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="bg-slate-300 border border-blue-500 rounded-lg text-sm"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your email"
              className="bg-slate-300 border border-blue-500 rounded-lg text-sm"
            />
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              placeholder="Your messages"
              className="bg-slate-300 border border-blue-500 rounded-lg text-sm h-10"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
