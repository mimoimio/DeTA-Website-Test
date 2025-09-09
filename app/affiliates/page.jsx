"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

export default function About() {
  return (
    <>
      <Header />

      <Swiper
        modules={[Autoplay, Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        className="mySwiper"
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

      // style={{ height: "100vh" }}
      >

        {/* Forthify Section */}
        <SwiperSlide>
          <div className="mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center py-10 px-4 sm:px-6 lg:px-8 ">

            <div className="lg:pl-10 lg:pr-10 mb-10 lg:mb-0 lg:w-1/2">

              <Image
                src="/images/affiliates/ForthifyLogo.png"
                alt="Forthify Logo"
                width={158}
                height={50}
                className="object-cover max-w-md "
              />

              <h1 className="pt-7 text-4xl sm:text-5xl lg:text-6xl font-bold pb-6 lg:pb-12">
                High-quality <span className="text-lime-500">software</span>. Built with <span className="text-lime-500">purpose</span>.
              </h1>


              <p className="text-base sm:text-lg">
                {"We don't just build "}<span className="text-lime-500">apps</span>{", we build future "}<span className="text-lime-500">{"innovators"}</span>.
              </p>


              <Link href="https://forthify.com" target="_blank" className="flex items-center rounded-full px-8 py-4 shadow-md bg-lime-500 font-medium mt-6 w-fit text-white transition-transform">
                Visit Us →
              </Link>

            </div>


            <div className="lg:pr-10 flex justify-center lg:w-1/2">

              <Image
                src="/images/affiliates/forthify-hero-image.png"
                alt="gambar"
                width={700}
                height={700}
                className="object-cover w-full max-w-md lg:max-w-full"
                priority
              />


            </div>
          </div >
        </SwiperSlide>
        {/* Motion-U section */}
        <SwiperSlide>
          <div className="mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-[#14144F] text-white">

            <div className="lg:pl-10 lg:pr-10 mb-10 lg:mb-0 lg:w-1/2">

              <p className="text-2xl ">
                What is MotionU?
              </p>


              <h1 className="pt-7 text-4xl sm:text-5xl lg:text-6xl font-thin pb-6 lg:pb-12">
                Start Your Journey to Superior <span className="text-yellow-400 italic font-semibold">Businessman </span>
              </h1>

              <div className="flex">

                <Image
                  src="/images/affiliates/MotionU.png"
                  alt="Forthify Logo"
                  width={100}
                  height={100}
                  className="object-cover max-w-md m-4"
                />


                <div className="flex flex-col px-4 border-s-2 border-white">

                  <p className="text-base sm:text-lg">
                    MotionU is an integrated Mobility Technology Industry at IIUM dedicated to fostering an entrepreneurial mindset in students.
                  </p>


                  <Link href="https://motionu.iium.edu.my/" target="_blank" className="flex items-center px-8 py-4 shadow-md bg-yellow-400 font-medium mt-6 w-fit text-black transition-transform">
                    Visit Now
                  </Link>
                </div>
              </div>

            </div>


            <div className="lg:pr-10 flex justify-center lg:w-1/2">

              <Image
                src="/images/affiliates/Earth.png"
                alt="gambar"
                width={700}
                height={700}
                className="object-cover w-full max-w-md lg:max-w-full"
                priority
              />


            </div>
          </div >
        </SwiperSlide>

        {/* Mulhaq section */}
        <SwiperSlide>
          <div className="mx-auto min-h-screen flex flex-col lg:flex-row items-start justify-start py-10 px-4 sm:px-6 lg:px-8 ">

            <div className="lg:pl-10 lg:pr-10 mb-10 lg:mb-0 lg:w-full">

              <h1 className="text-9xl mt-16">
                PLAN YOUR
              </h1>
              <h1 className="text-9xl italic mb-16">
                PROJECT
              </h1>

              <div className="flex flex-col bg-gradient-to-r from-pink-300 to-blue-400 w-full p-10 rounded-xl h-[420px] justify-between">

                <div className="flex flex-col w-1/2">

                  <p className="text-base sm:text-lg">
                    Enhancing and improving the skills, knowledge, abilities, and overall potential of individuals within a youth society or organization.
                  </p>

                  <Link href="https://mulhaq.org" target="_blank" className="flex items-center px-16 py-4 shadow-md bg-white font-medium mt-6 w-fit text-black rounded-full transition-transform">
                    Visit Us
                  </Link>


                </div>


                <Image
                  src="/images/affiliates/Mulhaq.png"
                  alt="Mulhaq Logo"
                  width={170}
                  height={70}
                  className="object-contain "
                />
              </div>

            </div>


            <div className="lg:pr-10 absolute right-0 justify-center lg:w-1/2">

              <Image
                src="/images/affiliates/Iphones.png"
                alt="gambar"
                width={700}
                height={700}
                className="object-cover w-full max-w-md lg:max-w-full"
                priority
              />


            </div>
          </div >
        </SwiperSlide>
        {/* ICE section */}
        <SwiperSlide>
          <div className="flex flex-col mx-auto min-h-screen items-start justify-between py-32 px-16 bg-[url(/images/affiliates/ICEbg.png)] bg-cover bg-center bg-no-repeat">


            <p className="text-base sm:text-lg text-white">
              *
              All-in-one skill to
              hack your way out
            </p>

            <div className="flex flex-col">

              <div className="flex w-full p-10 space-x-8 items-center ">
                <Image
                  src="/images/affiliates/ICE.png"
                  alt="Mulhaq Logo"
                  width={80}
                  height={80}
                  className="object-contain "
                />
                <Link href="https://ICE.iium.edu.my/" target="_blank" className="flex items-center px-16 py-4  font-medium w-fit text-white border-2 border-white rounded-full ">
                  Visit Us
                </Link>
              </div>


              <h1 className="text-6xl text-white w-1/2">
                HACK ETHICALLY
              </h1>


              <h1 className="text-6xl text-white ">
                DEFEND RELENTLESSLY
              </h1>




            </div>
          </div >
        </SwiperSlide>
      </Swiper>

      <Footer />
    </>
  );
}
