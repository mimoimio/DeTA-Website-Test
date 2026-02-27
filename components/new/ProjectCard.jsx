import Image from "next/image";

const ProjectCard = ({
  src = "/images/DeTA.png",
  title = "Project Title",
  desc = "Project Description",
  alt = "",
  tech = []
}) => {
  return (
    <div className="flex-shrink-0 w-[350px] group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={280}
          className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {tech.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span key={i} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{desc}</p>
    </div>
  );
};

export default ProjectCard;
