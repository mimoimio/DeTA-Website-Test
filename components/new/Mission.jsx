import Image from "next/image";

const missionVision = ({ image, title, description, point1, point2, point3 }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20 py-10 px-4 sm:px-6 lg:px-8">
      <div>
        <Image
          src={image}
          alt="Mission and Vision"
          width={1200}
          height={600}
          className="w-full h-auto rounded-2xl mb-6 lg:mb-10"
          priority
        />
      </div>
      <div className="bg-white border hover:bg-gray-100 transition duration-150 rounded-2xl p-6 lg:p-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 text-base lg:text-xl mb-6">{description}</p>
        <div className="space-y-4">
          <p className="flex items-start">
            <span className="mr-3 text-green-500">✅</span>
            <span className="text-gray-700 text-base lg:text-lg">{point1}</span>
          </p>
          <p className="flex items-start">
            <span className="mr-3 text-green-500">✅</span>
            <span className="text-gray-700 text-base lg:text-lg">{point2}</span>
          </p>
          <p className="flex items-start">
            <span className="mr-3 text-green-500">✅</span>
            <span className="text-gray-700 text-base lg:text-lg">{point3}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default missionVision;
