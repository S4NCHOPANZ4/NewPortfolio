import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoOpenSharp } from "react-icons/io5";
import resumme from "../../assets/resumme/Juan_Buitrago.pdf"

const ProjectOverlay = ({ icon, image, tools, demo, repo, name, desc }) => {

    
  const goToLink = (url) => {
    window.open(url, '_blank')
  }

  const goToResume = () => {
    window.open(resumme, '_blank');
  }


  return (
    <div className="h-full w-full  justify-center overflow-auto timesNewRoman text-[#3d3d3d] ">
      <div className="flex  justify-evenly w-[650px] mx-auto  mt-[0.09rem] ">
        <div className="flex  w-[200px] ">
          <div className="flex items-start justify-start flex-col w-full">
            <div className="mt-5 flex items-center justify-center space-x-3">
              <img src={icon} alt="" className="h-[40px]" />
              <h1 className=" agbalumo text-3xl">{name}</h1>
            </div>

            <div className="mt-3 w-full">
              <h1 className="agbalumo">Tools Used</h1>
              <ul className="space-y-3 mt-3">
                {tools.map((tool, i) => {
                  return (
                    <li key={i}>
                      {"> "} {tool}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[400px] mt-4">
          <div
            style={{
              borderBottom: "1px solid #3d3d3d58",
            }}
            className="w-full  mb-2 "
          >
            <h1 className="agbalumo text-4xl">Welcome</h1>
            <h1 className="agbalumo mb-2">Developed by Juan Buitrago</h1>
          </div>
          <img src={image} alt="" className="mb-2" />
          <div className="w-full flex items-center justify-center space-x-2 mb-5">
            <TbBrandGithubFilled onClick={() => goToLink(repo)} className="cursor-pointer" />
            <IoOpenSharp onClick={() => goToLink(demo)} className="cursor-pointer" />
          </div>
          <p>{desc}</p>
          <div>
            <div className="px-3 py-1 flex justify-between items-center border border-gray-900 rounded-sm mt-4">
              <div>
                <h1>Looking for my resumme?</h1>
                <a onClick={() => goToResume()} className="cursor-pointer text-sm text-blue-600 underline">Click here to open</a>
              </div>
              <div>
                <img onClick={() => goToResume()} src="https://win98icons.alexmeub.com/icons/png/file_eye.png" className="cursor-pointer" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[99%] flex items-center justify-between bg-gray-50 mt-5 mx-[0.1rem] p-4">
        <div>
        <h1 className="agbalumo text-xl">Juan Buitrago</h1>
        <h1 className="agbalumo text-md">My Socials</h1>
        <ul className="text-sm mt-2 flex space-x-3">
            <li className="cursor-pointer">
                <a onClick={() => goToLink('https://github.com/S4NCHOPANZ4')}>{'>'} GitHub </a>
            </li>
            <li className="cursor-pointer">
                <a onClick={() => goToLink('https://www.linkedin.com/in/juan-d-buitrago/')}>{'>'} Linkedin</a>
            </li>
            <li className="cursor-pointer">
                <a onClick={() => goToLink('https://www.instagram.com/h_buitrago_p/')}>{'>'} Instagram</a>
            </li>
            <li className="cursor-pointer">
                <a onClick={() => goToResume()}>{'>'} Resumme</a>
            </li>
            <li>
                <a >{'>'} buitr4go@gmail.com</a>
            </li>
        </ul>
        </div>
        <img src={icon} alt="icon" className="h-[80px]" />
      </div>
    </div>
  );
};

export default ProjectOverlay;
