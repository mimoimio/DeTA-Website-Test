import Image from 'next/image';

const GalleryDisplay = ({ title, desc, url = "/images/Deta.png" }) => {
  return (
    // hover:scale-105
    <div className='relative w-full hover:shadow-lg hover:-translate-y-1 duration-150 rounded-sm'>
      <div className="relative w-full h-[400px] bg-transparent" >
        <Image
          src= {url}// Replace with your image path
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-md"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,_#fff_10%,_#fff0_20%)] z-10">
          <div className="absolute bottom-0 p-4">
            <h1 className="text-lg font-bold">{title}</h1>
          </div>
        </div>
      </div>
      <div className='bg-white p-4 rounded-md border-transparent'>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default GalleryDisplay;
