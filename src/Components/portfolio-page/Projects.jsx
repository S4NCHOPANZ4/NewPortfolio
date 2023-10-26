import React, { useEffect, useState } from "react";
import { MdOpenInNew } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import Tleft from "../../assets/icons/characters/borders/Top-left.png";
import Tright from "../../assets/icons/characters/borders/Top-right.png";
import Bright from "../../assets/icons/characters/borders/Bottom-right.png";
import Bleft from "../../assets/icons/characters/borders/Bottom-left.png";
import underline from "../../assets/icons/characters/borders/underline.png";
import ProjectBar from "./ProjectBar";
import projectsList from "./projectsList"
import background from "../../assets/icons/characters/borders/ContactBg.png"

const Projects = ({ setScene }) => {

  const [activeScene, setActiveScene] = useState(0)
  
  const goToLink = (url) => {
    window.open(
      url,
      "_blank"
    );
  };

  return (
    <div
    style={{ background: `url(${background})`}}
    className="w-full h-full flex items-center justify-between timesNewRoman relative p-4">
      <img
        style={{
          userSelect: "none",
          pointerEvents: 'none'
        }}
        src={Tleft}
        className="absolute top-1 left-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: 'none'
        }}
        src={Tright}
        className="absolute top-1 right-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: 'none'
        }}
        src={Bleft}
        className="absolute bottom-1 left-1 h-[150px] -z-0"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: 'none'
        }}
        src={Bright}
        className="absolute  bottom-1 right-1 h-[150px]"
      />
      <div
        style={{
          letterSpacing: "2px",
          userSelect: "none",
        }}
        className="flex text-xs absolute top-2  left-1/2 transform -translate-x-1/2 text-white"
      >
        <h1
          onClick={() => setScene(1)}
          className="mx-2 cursor-pointer hover:text-[#d8d8d886]"
        >
          Home
        </h1>
        <h1
          onClick={() => setScene(2)}
          className="mx-2 flex flex-col justify-center items-center cursor-pointer hover:text-[#d8d8d886]"
        >
          <span>About</span>
        </h1>
        <h1
          onClick={() => setScene(3)}
          className="mx-2 flex flex-col justify-center items-center cursor-pointer hover:text-[#d8d8d886]"
        >
          <span>Projects</span>
          <img
            src={underline}
            alt="underline"
            className="w-[60px] hover:text-[#d8d8d886]"
          />
        </h1>
        <h1  onClick={() => setScene(4)} className="mx-2 cursor-pointer hover:text-[#d8d8d886]">Contact </h1>
      </div>

      <div className="h-full w-full flex items-center justify-evenly">
        <div className="w-[75%]  p-3 flex flex-col  ">
          <div className="overflow-auto h-[350px] flex flex-col  scrollbar-small ">
            {projectsList.map((item, i) =>{
                return(
                  <div 
                  onClick={() => setActiveScene(item.id)}
                  key={i}>
                    <ProjectBar
                      activeScene={activeScene}
                      id={item.id}
                      icon={item.icon}
                      name={item.name}
                      icons={item.icons}

                    />
                  </div>
                )
            })}

          </div>
        </div>

        <div className="w-[40%] h-[75%] flex flex-col justify-evenly mr-3">
          <img
            style={{
              userSelect: "none",
            }}
            src={projectsList[activeScene].backgound}
            alt=""
          />
          <div className="flex items-center justify-between mt-5 ">
            <h1 className="text-white text-2xl">{projectsList[activeScene].name}</h1>
            <div className="flex items-center justify-center">
                <MdOpenInNew onClick={() => goToLink(projectsList[activeScene].demo)} color="white" className="mr-2 cursor-pointer"/>
                <BsGithub onClick={() => goToLink(projectsList[activeScene].url)} color="white" className="cursor-pointer"/>
            </div>
          </div>
          <p 
          style={{lineHeight: '1rem', fontSize: '.8rem'}}
          className="text-[#ffffff6c]  text-justify">
            {projectsList[activeScene].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
