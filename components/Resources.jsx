import { IoMdSearch, IoIosMicrophone } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi2";
import Link from "next/link";


export default function Resources() {
    return (
        <div className="mx-auto max-w-4xl w-full min-h-screen flex flex-col justify-start pt-32">

            <div className="w-full flex items-center justify-between py-2 border-b-2">
                <h1 className="  text-2xl font-semibold">
                    Resources
                </h1>
                <div className="max-w-xs w-full border-2 border-gray-200 p-2 rounded-md flex items-center gap-2">
                    <IoMdSearch className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full outline-none bg-transparent"
                    />
                    <HiOutlineMicrophone className="text-gray-500" />
                </div>
            </div>


            <div className="flex">
                <ul className="max-w-[200px] w-full border-r-2 border-gray-200 p-4 space-y-2">
                    <li>
                        <Link href="/blogs" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            E-books
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            Github Repositories
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            Libraries
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            Softwares
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            Tools
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            Tweets
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources/telegram" className="flex items-center gap-2 p-2 hover:bg-gray-200 transition-colors">
                            YoutTube Links
                        </Link>
                    </li>
                </ul>

                <div className="px-8 py-4 w-full">
                    <h1 className="text-xl font-semibold">Blogs</h1>
                    <ul className="list-disc ps-8 space-y-2 mt-4">
                        <li>
                            <Link href={"/"} className="text-orange-400 ">Blog #1 </Link>
                            - example
                        </li>
                        <li>
                            <Link href={"/"} className="text-orange-400 ">Blog #1 </Link>
                            - example
                        </li>
                        <li>
                            <Link href={"/"} className="text-orange-400 ">Blog #1 </Link>
                            - example
                        </li>
                        <li>
                            <Link href={"/"} className="text-orange-400 ">Blog #1 </Link>
                            - example
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}