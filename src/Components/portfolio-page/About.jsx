import React from "react";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoGit,
} from "react-icons/bi";
import { IoLogoNodejs, IoLogoSass, IoDocumentSharp } from "react-icons/io5";
import knigth from "../../assets/icons/characters/knigth.png";
import Tleft from "../../assets/icons/characters/borders/Top-left.png";
import Tright from "../../assets/icons/characters/borders/Top-right.png";
import Bright from "../../assets/icons/characters/borders/Bottom-right.png";
import Bleft from "../../assets/icons/characters/borders/Bottom-left.png";
import Tool from "./Tool";
import underline from "../../assets/icons/characters/borders/underline.png";
import background from "../../assets/icons/characters/borders/ContactBg.png";
import resumme from '../../assets/resumme/Juan_Buitrago.pdf'

const About = ({ setScene }) => {

  const goToResume = () => {
    window.open(resumme, '_blank');
  }


  return (
    <div
    style={{ background: `url(${background})`}}
    className="w-full h-full flex items-center justify-evenly timesNewRoman relative p-4">
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
        className="absolute bottom-1 left-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: 'none'
        }}
        src={Bright}
        className="absolute bottom-1 right-1 h-[150px]"
      />

      <div className="ml-5 w-[60%] h-[400px] text-white">
        <div
          style={{
            letterSpacing: "2px",
            userSelect: "none",
          }}
          className="flex text-xs absolute top-2  left-1/2 transform -translate-x-1/2 "
        >
          <h1 onClick={() => setScene(1) } className="mx-2 cursor-pointer hover:text-[#d8d8d886]">Home</h1>
          <h1 className="mx-2 flex flex-col justify-center items-center cursor-pointer hover:text-[#d8d8d886]">
            <span>About</span>
            <img
              src={underline}
              alt="underline"
              className="w-[50px] hover:text-[#d8d8d886]"
            />
          </h1>
          <h1 
          onClick={() => setScene(3)}
          
          className="mx-2 cursor-pointer hover:text-[#d8d8d886]">
            <span>Projects</span>

          </h1>
          <h1  onClick={() => setScene(4)} className="mx-2 cursor-pointer hover:text-[#d8d8d886]">
            Contact{" "}
          </h1>
        </div>

        <h1
          style={{
            letterSpacing: "2px",
          }}
          className="text-xl mt-5"
        >
          JUAN, KNIGHT OF ASTORA
        </h1>
        <h1
          className="mt-1"
          style={{
            letterSpacing: "2px",
          }}
        >
          Equipment
        </h1>
        <div
          style={{
            userSelect: "none",
          }}
          className="grid grid-cols-4 gap-4 my-6 place-items-center "
        >
          <Tool IconTool={BiLogoReact} name={"React"} />
          <Tool IconTool={BiLogoTypescript} name={"Typescript"} />
          <Tool IconTool={BiLogoJavascript} name={"JavaScript"} />
          <Tool IconTool={BiLogoTailwindCss} name={"Tailwind"} />
          <Tool IconTool={IoLogoNodejs} name={"NodeJS"} />
          <Tool IconTool={BiLogoMongodb} name={"Mongodb"} />
          <Tool IconTool={IoLogoSass} name={"Sass"} />
          <Tool IconTool={BiLogoGit} name={"Git"} />
        </div>
        <h1
          className="my-1"
          style={{
            letterSpacing: "2px",
          }}
        >
          About Juan
        </h1>
        <p
          style={{
            letterSpacing: "1px",
          }}
          className="mt-1 text-[#c5c5c5d0] text-xs"
        >
          This Astora web developer can be found most of the time in his
          sanctuary <span className="text-[#ffcc41c7] italic">(his room)</span>{" "}
          sharpening his weapons{" "}
          <span className="text-[#ffcc41c7] italic">
            (programming something he probably dreamed of last nigth)
          </span>
          .<br />
          Web developer specialized in Frontend and Backend wizardry... also
          pyromancy.
        </p>
      </div>
      <div
      onClick={() => goToResume()}
        style={{
          userSelect: "none",
        }}
        className="flex flex-col items-center justify-center w-[280px] mr-3 cursor-pointer"
      >
        <img
          style={{ opacity: ".8" }}
          src={knigth}
          alt="img"
          className="h-[380px] p-5"
        />
        <div className="mb-2 text-[#c8c8c8] flex justify-center items-end">
          <p className="mr-2 text-xs italic">My Resumme</p>
        </div>
      </div>
    </div>
  );
};

export default About;
