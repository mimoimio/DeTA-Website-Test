import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Card = ({ bool = false }) => {
  return <>{bool ? "true" : "false"}</>;
};

const Blogs = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem]">
        <h1 className="text-5xl lg:text-7xl">Blogs</h1>
        <h2 className="text-xl lg:text-2xl flex-wrap lg:mx-[26rem] text-center">
          For the memories within DeTA
        </h2>
      </div>
      <Footer />
    </main>
  );
};
export default Blogs;
