import React, { useState } from "react";

const ProjectBar = ({ icon, name, icons, id, activeScene }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        id === activeScene
          ? {
              border: "1px ridge #f7cb6c20",
              background: 'linear-gradient(180deg, rgba(0,0,0,.5) 22%, rgba(255,160,0,0.07) 100%)'
            }
          : {
              border: "1px ridge #f7cb6c20",
              background: 'linear-gradient(180deg, rgba(0,0,0,.5) 28%, rgba(12,9,60,0.07) 100%)'

            }
      }
      className={`text-white  h-[80px] my-[.07rem] w-full flex  items-center justify-left pl-3   p-6 rounded-sm cursor-pointer transition-all duration-300 ease-in-out`}
    >
      <img src={icon} alt="icon" className="h-[50px] mx-3 cursor-pointer" />
      <div>
        <h1 className="text-sm">{name}</h1>
        <div className="flex text-xs text-[#d7d7d7a4]  italic">
          {icons.map((icon, i) => {
            return (
              <h1 key={i}>
                {" "}
                {icon}
                {icons.length - 1 === i ? "" : "- "}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectBar;
