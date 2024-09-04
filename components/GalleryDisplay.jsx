import Image from 'next/image';

const GalleryDisplay = ({ title, desc, url = "/images/Deta.png" }) => {
  return (
    // hover:scale-105
    <div className='relative w-full hover:shadow-lg hover:-translate-y-1 duration-150 rounded-sm'>
      <div className="relative w-full h-[200px] lg:h-[400px] bg-transparent" >
        <Image
          src={url}// Replace with your image path
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-md"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,_#fff_20%,_#fff0_30%)] z-10">
          <div className='absolute bottom-0 p-1'>
            <h1 className="text-lg">{title}</h1>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDisplay;
