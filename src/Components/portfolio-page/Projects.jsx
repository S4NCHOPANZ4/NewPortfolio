import React from "react";
import { MdOpenInNew } from "react-icons/md"
import { BsGithub } from "react-icons/bs"
import Tleft from "../../assets/icons/characters/borders/Top-left.png";
import Tright from "../../assets/icons/characters/borders/Top-right.png";
import Bright from "../../assets/icons/characters/borders/Bottom-right.png";
import Bleft from "../../assets/icons/characters/borders/Bottom-left.png";
import underline from "../../assets/icons/characters/borders/underline.png";
import ProjectBar from "./ProjectBar";
import CaseJolt from "../../assets/icons/CaseJolt-Icon.png";
import FitHub from "../../assets/icons/FItHub-Icon.png";
import FilmFolia from "../../assets/icons/filmfolia-Icon.png";
import StereoH from "../../assets/icons/Stereoh-Icon.png";
import Casejolt from "../../assets/icons/projectImgs/CaseJolt.png";

const Projects = ({ setScene }) => {
  return (
    <div className="w-full h-full flex items-center justify-between timesNewRoman relative p-4">
      <img
        style={{
          userSelect: "none",
        }}
        src={Tleft}
        className="absolute top-1 left-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
        }}
        src={Tright}
        className="absolute top-1 right-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
        }}
        src={Bleft}
        className="absolute bottom-1 left-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
        }}
        src={Bright}
        className="absolute bottom-1 right-1 h-[150px]"
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
        <h1 className="mx-2 cursor-pointer hover:text-[#d8d8d886]">Contact </h1>
      </div>

      <div className="h-full w-full flex items-center justify-evenly">
        <div className="w-[380px] max-h-[95%] p-3 flex flex-col  ">
          <h1 className="text-white ml-2 text-lg">Projects</h1>
          <div className="overflow-auto flex flex-col  scrollbar-small">
            <ProjectBar
              icon={CaseJolt}
              name={"CaseJolt"}
              icons={["React", "Typescript", "NodeJs", "MongoDB", "Tailwind"]}
            />
            <ProjectBar
              icon={FitHub}
              name={"FitHub"}
              icons={["React", "Typescript", "Tailwind", "Api"]}
            />
            <ProjectBar
              icon={FilmFolia}
              name={"FilmFolia"}
              icons={["React", "Typescript", "NodeJs", "MongoDB", "Tailwind"]}
            />
            <ProjectBar
              icon={StereoH}
              name={"Stereo"}
              icons={["React", "Javascript", "Api", "Tailwind"]}
            />
            <ProjectBar
              icon={StereoH}
              name={"Stereo"}
              icons={["React", "Javascript", "Api", "Tailwind"]}
            />
          </div>
        </div>
        <div className="w-[40%] h-[75%] e mr-3">
          <img
            style={{
              userSelect: "none",
            }}
            src={Casejolt}
            alt=""
          />
          <div className="flex items-center justify-between mt-5 ">
            <h1 className="text-white text-2xl">Case Jolt</h1>
            <div className="flex items-center justify-center">
                <MdOpenInNew color="white" className="mr-2 cursor-pointer"/>
                <BsGithub color="white" className="cursor-pointer"/>
            </div>
          </div>
          <p 
          style={{lineHeight: '1rem', fontSize: '.8rem'}}
          className="text-[#ffffff6c]  text-justify">
            Page based on Counter Strike lootboxes, it has a login using the
            official Valve accounts returning official user data and real Steam
            market.
            <br />
            React application in TypeScript, powered by a Node.js server. It
            employs Tailwind CSS and CSS for styling, ensuring a sleek and
            responsive design. The project optimizes performance through
            asynchronous loading logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
