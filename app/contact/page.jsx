import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Contact() {
  return (
    <main>
      <Header />
      <div className="flex items-center bg-none flex-col w-full p-16">
        <h1 className="text-9xl">Contact Us</h1>
        <h4 className="text-2xl">Through</h4>
        <div className="bg-white">
          <div className="border-dashed border-black m-10 p-10">
            <h5 className="text-xl">Send us an email at</h5>
          </div>
        </div>
      </div>

      <div></div>
      <Footer />
    </main>
  );
}
