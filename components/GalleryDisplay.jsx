import Image from 'next/image';

const GalleryDisplay = ({ title, desc }) => {
  return (
    // hover:scale-105
    <div className='relative w-full hover:shadow-lg hover:-translate-y-1 duration-150 rounded-sm'>
      <div className="relative w-full h-[400px] bg-transparent" >
        <Image
          src="/images/Deta.png" // Replace with your image path
          alt={title}
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10">
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
