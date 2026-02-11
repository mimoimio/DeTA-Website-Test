'use client';
import { Marquee } from '@/components/ui/marquee';

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
    <div className="w-full lg:w-2/3 relative overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {eventImages.map((image, index) => (
          <div
            key={index}
            className="relative w-[280px] sm:w-[320px] md:w-[380px] h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                {image.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}