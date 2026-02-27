import Header from "@/components/Header";
import GalleryDisplay from "@/components/GalleryDisplay";
import Footer from "@/components/Footer";
import EventSwiper from "@/components/EventSwiper";

export const dynamic = 'force-dynamic';

export default function Gallery() {
  return (
    <main className="mt-0">
      <Header />
      <div className="flex flex-col min-h-screen gap-4 ">
        {/* Hero Section - Combined Background + Foreground */}
        <div className="relative  w-full">
          {/* Background Image - Lower z-index */}
          <div className="absolute inset-0 bg-[url('/images/gallery/herobg.png')] bg-cover bg-center bg-no-repeat z-0"></div>

          {/* Gradient Overlay - Middle z-index */}
          <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(255,255,255,0)_55%,rgba(255,255,255,1)_55%)] z-10  "></div>

          {/* Foreground Content - Highest z-index */}
          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-4 pt-32 pb-16 text-white px-4">
            <h1 className="text-5xl lg:text-7xl w-full lg:w-1/2 text-center">
              Past Events, Future Inspirations Ahead
            </h1>
            <h2 className="text-xl lg:text-2xl text-center max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              {/* For the memories within DeTA */}
            </h2>

            {/* Placeholder images here */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="w-48 h-64 bg-gray-200 border-4 rotate-[10deg] border-gray-50 transform-gpu will-change-transform antialiased bg-[url('/images/Hackathon.png')] bg-cover bg-center"></div>
              <div className="w-48 h-64 bg-gray-200 border-4 -rotate-[20deg] border-gray-50 transform-gpu will-change-transform antialiased bg-[url('/images/DeTAMeetup7.png')] bg-cover bg-center"></div>
              <div className="w-48 h-64 bg-gray-200 border-4 rotate-[10deg] border-gray-50 transform-gpu will-change-transform antialiased bg-[url('/images/mainpage/lepakcoding.png')] bg-cover bg-center"></div>
              <div className="w-48 h-64 bg-gray-200 border-4 -rotate-[20deg] border-gray-50 transform-gpu will-change-transform antialiased bg-[url('/images/DeTAMeetup7_2.png')] bg-cover bg-center"></div>
            </div>
          </div>




        </div>
      </div>

      {/* Newest events */}
      <div className="flex max-h-screen p-32">
        <div className="flex flex-col items-center justify-center w-1/3 p-8 ">
          <h2 className="text-5xl font-bold mb-4">{"What's Happening in Our Community"}</h2>
          <p className="text-gray-600 mb-6">Check out our latest events and activities.</p>
          <a href="/events" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            View Events
          </a>
        </div>

        <EventSwiper />
      </div>


      {/* Gallery Grid */}
      <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-3 md:gap-10 md:p-10 w-full bg-white rounded-xl">
        <GalleryDisplay title="The Mainboards" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczPAB1lzyBQP7r9aJmZaRNh-xeSPQ-SC6VKE4UulBqDcpo0f3BmYTRg3FdGYboXmOXU7GTcd3qmCLOEMOasrjE4GXAXkjcbUS5llji-q5T20JJO6JO1N5g1ey0A3ost3Dt1Z8Ol6iFSscbAVYXEUiCxLhg=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="Regular meetup" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczOrpDpVAfk8Nbn5oKq0bDXsgi6lMz1iGfVtVDneBdpVbGG-Bo6Ks_QGYWy4DDp869dpWafxFanzES4vsrWU_Cez3NHAjn9H1D5irf8Gp2Z8oICV6n-ZWgUt9dHX82ovyKOdkkscMOVVGG0TtHJZ-IFR=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="The Mainboards" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczPcvLFd90OsFrTBjbFEkHQl2Yru6V8p0Q5-ExicfANyt5UjNHte6XtBEQN2pxj9uZ7F40H5iCWHyqmeJ7eqGIwaOY78-hMJKIJS3c4bqzpS6hpsh5abri0ljk1xDpmV_CsZXhktTo2ldrC_eq90lBxj=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="Study session" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczOmo_yLsnPA6SiHhOcaILvrQ6KJWeC6_yPWZZ4L4FaystIFHOlqjSZoSmBnF2A8QY-eGBjz5BVWr3HObdeguNa9-dM_4mrrcnaLMY2_LfoswRNLdktsd_xTxxpk8x7QLrsRDnB8NU60MyTvh-mz--1M=w1260-h945-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="Alumni Talk" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczMAmlqWtAiYcQGT9DUKak-bgZ1hLtR--fWgdqe7w9yiwoHF_cs_KTHUduyj4WpcHfkRueIV8qpDVHvCFuj70JzI3k3tgLEY2HkzfgwvaJZ84Rua9vJrvT-Iv1MYZ6baptPNSlnMRl3s2J6RLW3D4kli=w1020-h768-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="Alumni Talk" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczM04VSLMTRrteuIZ-3G4gix7AqcTntI6ST9gYuaar6k3o-DDrFzFCPdoSQpJnJbLnxB9Lre1JCO3Hxrk8SDSClCAUBY71VqnWKmEzON9N3b1h8SzjJFVbX0pt1SH8bo-QGDTCbaaNmBWGvb59ShhXhN=w1020-h768-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="Regular meetup" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczMLwfS0_oWf_mJchIG_N0NNjMV3Exzz1ntCdxLmcztq82oauPp3hb8NUoTd8O3NyQ7CdPxFTW4MTNBe4WIdxuHQ6GFZ6mM1SrQZ-1-yVxD_XhBaGtSfZt9GieVtgurCKnxvAq4olD5jyY67XLuNJGFoUw=w1280-h576-s-no-gm?authuser=0"></GalleryDisplay>
        <GalleryDisplay title="Regular meetup" desc="Description" url="https://lh3.googleusercontent.com/pw/AP1GczONqQH5lcqJzqXz4Y_HeovZx56zSUYRquu0cLC5wFhfFIIQrsPq3DYWbsZL2NDSx2eH4k4F2dXSg_lLzJtqtkMVPVO0K5Y6S_0HSbbmkMrUjfZfNDjQ2vOfZ4ZWje0JfUFoSbBfwDila9WnTmXpcKsHjg=w1280-h576-s-no-gm?authuser=0"></GalleryDisplay>
        {/* <GalleryDisplay title="Alumni Talk" desc="Description" url=""></GalleryDisplay> */}
      </div>

      <Footer />
    </main>
  );
}
