import Image from 'next/image';

const DisplayProgram = ({ title, desc }) => {
  return (
    <div className="relative w-full h-96 hover bg-slate-600 hover:scale-105 duration-150" >
      {/* Bottom layer: Image */}
      <Image
        src="/images/Deta.png" // Replace with your image path
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Middle layer: Gradient div */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10">
        {/* Top layer: Texts inside the div */}
        <div className="absolute bottom-0 p-4">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayProgram;
