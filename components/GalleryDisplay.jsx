import Image from 'next/image';

const GalleryDisplay = ({ title, desc, url = "/images/Deta.png" }) => {
  return (
    // hover:scale-105
    <div className='relative w-full p-2 border rounded-md duration-150 '>
      <div className="relative w-full h-[200px] lg:h-[400px] bg-transparent" >
        <Image
          src={url}// Replace with your image path
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-md"
        />
        <div className="absolute text-primary inset-0 bg-[linear-gradient(to_top,_#fff_20%,_#fff0_30%)] z-10">
          <div className='absolute bottom-0 p-1'>
            <h1 className="text-2xl">{title}</h1>
            <p className="text-lg">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDisplay;
