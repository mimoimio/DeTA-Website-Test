const ProjectCard = () => {
  return (
    <div className="flex-shrink-0 w-[350px] h-[450px]">
      <div className="flex w-full h-[280px]">
        <img
          src="/images/joker.gif"
          alt="joker"
          className="w-full object-cover rounded-2xl"
        />
      </div>
      <h1 className="text-2xl font-bold text-center my-4">
        Simplified IMaluum
      </h1>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default ProjectCard;
