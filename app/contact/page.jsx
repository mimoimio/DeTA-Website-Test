import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Contact() {
  return (
    <main>
      <Header />
      <div>
        <h1 className="text-9xl text-center my-5">Contact Us</h1>
        <h4 className="text-5xl text-center">Through</h4>
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
            <Link href={"https://mail.google.com/"}>
              <button className="px-36 py-2 mb-10 bg-slate-800 hover:bg-slate-600 rounded-lg text-slate-50 duration-75 hover:-translate-y-1">
                Send a Message Now!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-9xl text-center my-5">Send a Message Now</h1>
        <h4 className="text-5xl text-center">Through</h4>
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
              className="bg-slate-300 border-2 border-gray-300 hover:border-blue-700 rounded-md text-lg w-full max-w-md p-1 my-2"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your email"
              className="bg-slate-300 border-2 border-gray-300 hover:border-blue-700 rounded-md text-lg w-full max-w-md p-1 my-2"
            />
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              placeholder="Your messages"
              className="bg-slate-300 border-2 border-gray-300 hover:border-blue-700 rounded-md text-base resize-y w-full max-w-lg min-h-[100px] p-3 my-2"
            />
          </div>
        </div>
        <div className="flex-col mt-2">
          <Link href={"https://mail.google.com/"}>
            <button className="px-36 py-2 mb-10 bg-slate-800 hover:bg-slate-600 rounded-lg text-slate-50 duration-75 hover:-translate-y-1">
              Send a Message Now!
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
