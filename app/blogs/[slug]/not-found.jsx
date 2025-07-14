import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default async function NotFound() {
    return (
        <main className="min-h-full flex flex-col">
            <Header />
            <div className="flex flex-col max-w-2xl w-full mx-auto p-4 pt-12 gap-8 text-center">
                <h1 className="text-4xl font-bold">{`📝 Blog Post Not Found`}</h1>
                <p className="text-lg text-gray-600">
                    {`Sorry, the blog post you're looking for doesn't exist.`}
                </p>
                <div className="flex flex-col gap-4">
                    <Link
                        href="/blogs"
                        className="bg-[#FD7014] text-white px-6 py-3 rounded-lg hover:bg-[#ED6004] transition-colors"
                    >
                        ← Back to All Posts
                    </Link>
                    <Link
                        href="/"
                        className="text-[#FD7014] hover:text-orange-800 transition-colors"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
