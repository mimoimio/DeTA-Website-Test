'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function EventSwiper() {
  const eventImages = [
    {
      src: '/images/Hackathon.png',
      alt: 'Hackathon Event',
      title: 'Hackathon 2024',
      description: 'Innovation and creativity in action'
    },
    {
      src: '/images/DeTAMeetup7.png',
      alt: 'DeTA Meetup',
      title: 'DeTA Meetup #7',
      description: 'Community gathering and networking'
    },
    {
      src: '/images/mainpage/lepakcoding.png',
      alt: 'Lepak Coding',
      title: 'Lepak Coding Session',
      description: 'Casual coding and learning together'
    },
    {
      src: '/images/DeTAMeetup7_2.png',
      alt: 'DeTA Meetup Photo 2',
      title: 'DeTA Community',
      description: 'Building connections in tech'
    }
  ];

  return (
    <div className=" w-full md:w-2/3 relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="h-full rounded-xl shadow-lg"
      >
        {eventImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {image.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}