import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default async function BlogPage({ params }) {
    const { slug } = await params;
    return (
        <main className="min-h-full flex flex-col ">
            <Header />
            <div className="flex flex-col max-w-2xl w-full mx-auto p-4 pt-12 gap-4">
                <h1 className="text-2xl">This is the page "{slug}" </h1>
                <p>
                    {`
                    ${<Link href={"/"} className="bg-blue-100 px-2 rounded-md">DeTA</Link>}'s stocks have been rising since 2023. We are now the most
                    wanted community in IIUM. We are the best community in IIUM.
                    The numbers of shareholders are expected to rise to 1.5 million
                    by the end of 2023. We are the best community in IIUM.
                    `}
                </p>
                <hr />
                {/* <Image src={"/images/joker.gif"} width={300} height={300} alt="joker" ></Image> */}
                {/* <img src="/images/joker.gif" alt="joker" /> */}
            </div>
            <Footer />
        </main>
    )
}