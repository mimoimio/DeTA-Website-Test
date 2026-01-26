import { HiArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

const ProjectCard = ({
  src = "/images/DeTA.png",
  title = "Project Title",
  desc = "Project Description",
  alt = "",
  tags = [],
}) => {
  return (
    <div className="group relative flex-shrink-0 w-[340px] md:w-[380px]">
      {/* Card Container */}
      <div className="relative h-full bg-[#111] rounded-2xl overflow-hidden border border-white/5 card-hover">
        {/* Image Section */}
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={src}
            alt={alt || title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="mono-badge px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-white/90 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B00] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-white/60 mb-4 line-clamp-3">
            {desc}
          </p>

          {/* Learn More Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6B00] group/link"
          >
            <span>Learn More</span>
            <HiArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FF6B00]/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
