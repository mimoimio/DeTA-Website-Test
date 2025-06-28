import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import getPostMetadata from "@/utils/getPostMetadata";

const Card = ({ bool = false }) => {
  return <>{bool ? "true" : "false"}</>;
};

const Blogs = () => {
  const postMetadata = getPostMetadata('posts')
  return (
    <main >
      <Header />
      <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem]">
        <h1 className="text-5xl lg:text-7xl max-w-2xl w-full text-start">Blogs</h1>
        <h2 className="text-xl lg:text-2xl flex-wrap lg:mx-[26rem] max-w-2xl w-full text-start">
          Latest stories
        </h2>
        <div className="grid grid-cols-2 max-w-4xl w-full gap-4 " >
          {
            postMetadata.map((item, index) => (
              <Link key={index} href={`/blogs/${item.slug}`} className="flex flex-col items-center justify-center hover:scale-105 duration-75">
                <div key={index} className="flex flex-col w-full border p-2 rounded-md h-[300px] shadow-md ">
                  <img src={`images/${item.image}`} alt="joker" className="h-1/2 object-cover rounded-sm" />
                  <div className="p-4">
                    <h1 className="text-xl font-semibold mb-4">{item.title}</h1>
                    <p className="line-clamp-3"> {item.description}</p>
                  </div>
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
