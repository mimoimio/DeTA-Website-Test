import Header from "@/components/Header";
import Card from "@/components/Card";
import Image from "next/image";
export default function blogs() {
  return (
    <main>
      <Header />
      <div className="mt-20 container bg-white">
          <p>The Blog</p>
          <h1>Writings from our community</h1>
          <p>
            The latest industry news, interviews, technology, and resources.
          </p>{" "}
          <Image
            src={"/images/Deta.png"}
            width={40}
            height={40}
            alt="DeTA Logo"
            className=""
          />
          <div className="grid grid-cols-2 gap-2">
            <Card
              title="Workshop"
              desc=" Get practical experience and work directly on real-world projects!"
            />
            <Card
              title="Study Group"
              desc="Boost Your Learning and Stay Motivated!"
            />
            <Card
              title="Hackathon"
              desc="Unleash Your Creativity and Problem-Solving Skills!"
            />
            <Card
              title="Alumni Talk"
              desc="Gain Real-World Insights and Career Advice!"
            />
            <Card
              title="Meetup"
              desc="Expand Your Network and Exchange Ideas!"
            />
          </div>
        </div>
    </main>
  );
}
