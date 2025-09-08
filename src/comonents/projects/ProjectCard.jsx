import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <div className="w-1/2 h-full group relative transition-all ease-in-out rounded-none hover:rounded-[40px] overflow-hidden">
        <img className="object-cover w-full h-full" src={image1} alt="" />
        <div className="opacity-0 absolute transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full hover:bg-black/20">
          <h2 className="text-white uppercase border border-[3px] rounded-[50px]  text-6xl px-5 pt-3 font-[font2]">
            View Project
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full group relative transition-all ease-in-out rounded-none hover:rounded-[40px] overflow-hidden">
        <img className="object-cover w-full h-full" src={image2} alt="" />
        <div className="opacity-0 absolute transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full hover:bg-black/20">
          <h2 className="text-white uppercase border border-[3px] rounded-[50px]  text-6xl px-5 pt-3 font-[font2]">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
