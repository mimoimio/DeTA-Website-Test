import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import getPostMetadata from "@/utils/getPostMetadata";
import Image from "next/image";

const Card = ({ bool = false }) => {
  return <>{bool ? "true" : "false"}</>;
};

const Blogs = () => {
  const postMetadata = getPostMetadata()
  const firstPost = postMetadata[0]
  console.log("😭😭😭" + firstPost.tags)
  return (
    <main >
      <Header />


      <h4 className="text-xl text-center mt-32">The blog</h4>
      <h1 className="text-5xl lg:text-5xl text-center font-semibold my-4">
        <span className="bg-[#FD7014] text-white p-1">Writings</span> from our community
      </h1>
      <p className="text-center">The latest industry news, interviews, technologies, and resources.</p>


      <div className="flex flex-col items-center gap-4 p-[2rem] lg:p-[2rem] max-w-4xl w-full m-auto ">
        {/* <h2 className="text-xl lg:text-2xl flex-wrap lg:mx-[26rem] max-w-2xl w-full text-start">
          Latest stories
        </h2> */}
        <div className="relative bg-center bg-cover w-full flex flex-col justify-end min-h-[512px] h-full shadow-md bg-gray-50 rounded-md overflow-hidden ">
          <Image
            src={`${firstPost.image}`}
            alt={firstPost.title}
            fill
            className="object-cover relative"
          />

          <div className="my-4 relative z-10 text-white p-4 bg-gray-900/50">
            <h1 className="text-xl ">{firstPost.title}</h1>
            <p className="mb-4"     >{firstPost.description}</p>
            {firstPost.tags.map((tag, index) => (
              <span key={index} className="border-2 border-white text-white px-2 py-1 rounded-md text-sm mr-2">
                {tag}
              </span>
            ))}
          </div>


        </div>
        <div className="grid grid-cols-2 max-w-4xl w-full gap-4 " >
          {

            postMetadata.map((item, index) => (
              <Link key={index} href={`/blogs/${item.slug}`} className="flex flex-col items-center justify-center hover:scale-105 duration-75">
                <div key={index} className="flex flex-col w-full border p-2 rounded-md h-[300px] shadow-md ">
                  <img src={`${item.image}`} alt="joker" className="h-1/2 object-cover rounded-sm" />
                  <div className="p-4">
                    <h1 className="text-xl font-semibold mb-4">{item.title}</h1>
                    <p className="line-clamp-3"> {item.description}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default Blogs;
