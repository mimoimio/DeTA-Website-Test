const ProjectCard = ({
  src = "/images/DeTA.png",
  title = "Project Title",
  desc = "Project Description",
  alt = "",
}) => {
  return (
    <div className="flex-shrink-0 w-[350px] h-[450px]">
      <div className="flex w-full h-[280px]">
        <img
          src={src}
          alt={alt}
          className="w-full bg-gray-100 object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-2xl font-bold text-center my-4">{title}</h1>
      <p className="text-justify">{desc}</p>
    </div>
  );
};

export default ProjectCard;
