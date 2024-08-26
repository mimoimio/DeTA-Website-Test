import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Contact() {
  return (
    <main>
      <Header />
      <div className="bg-none w-full p-16">
        <div className="flex-col">
          <h1 className="text-9xl text-center">Contact Us</h1>
          <h4 className="text-2xl text-center">Through</h4>
        </div>

        <div className="bg-white flex items-center justify-center w-25 h- mx-40 mt-20 ">
          <div className="border border-black border-solid rounded-xl my-10">
            <div className="flex">
              <div className="m-10 p-10">
                <h5 className="text-xl">Send us an email at</h5>
              </div>
              <div className="m-10 p-10">
                <h5 className="text-xl text-end">deta@gmail.com</h5>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-40 py-2 mb-10 bg-black text-white rounded-lg">
                Send a Message Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <Footer />
    </main>
  );
}
