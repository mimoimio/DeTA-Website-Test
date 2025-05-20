import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
const Card = ({ bool = false }) => {
  return <>{bool ? "true" : "false"}</>;
};

const Blogs = () => {
  // const blogs = [];
  const blogs = "abdefghij".split("");

  return (
    <main >
      <Header />
      <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem]">
        <h1 className="text-5xl lg:text-7xl">Blogs</h1>
        <h2 className="text-xl lg:text-2xl flex-wrap lg:mx-[26rem] text-center">
          For the memories within DeTA
        </h2>
        <div className="grid grid-cols-3 max-w-4xl w-full gap-4 " >
          {
            blogs.map((item, index) => (
              <Link href={`/blogs/${item}`} key={index} className="flex flex-col items-center justify-center">
                <div key={index} className="flex w-full border p-2 rounded-md h-[300px] shadow-md ">
                  {item}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Blogs;
