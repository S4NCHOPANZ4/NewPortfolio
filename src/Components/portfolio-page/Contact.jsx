import React from "react";
import Tleft from "../../assets/icons/characters/borders/Top-left.png";
import Tright from "../../assets/icons/characters/borders/Top-right.png";
import Bright from "../../assets/icons/characters/borders/Bottom-right.png";
import Bleft from "../../assets/icons/characters/borders/Bottom-left.png";
import underline from "../../assets/icons/characters/borders/underline.png";
import background from "../../assets/icons/characters/borders/ContactBg.png";
import resumme from "../../assets/resumme/Juan_Buitrago.pdf"

import {MdMarkunreadMailbox} from "react-icons/md"
import {FaLinkedinIn} from "react-icons/fa"
import {GoFileDirectoryFill} from "react-icons/go"
import {TbBrandGithubFilled} from "react-icons/tb"

const Contact = ({ setScene }) => {

  const goToLink = (url) => {
    window.open(url, '_blank')
  }

  const goToResume = () => {
    window.open(resumme, '_blank');
  }

  const sendEmail = () => {
    const recipientEmail = 'buitr4go@gmail.com' // Reemplaza con la dirección de correo deseada
    const subject = 'Hey Juan';
    const body = 'body';

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir la ventana de correo electrónico
    window.location.href = mailtoLink;
  };

  return (
    <div
      style={{ background: `url(${background})` }}
      className="w-full h-full flex flex-col items-center justify-center timesNewRoman relative p-4"
    >
      <img
        style={{
          userSelect: "none",
          pointerEvents: "none",
        }}
        src={Tleft}
        className="absolute top-1 left-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: "none",
        }}
        src={Tright}
        className="absolute top-1 right-1 h-[150px]"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: "none",
        }}
        src={Bleft}
        className="absolute bottom-1 left-1 h-[150px] -z-0"
      />
      <img
        style={{
          userSelect: "none",
          pointerEvents: "none",
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
        </h1>
        <h1
          onClick={() => setScene(4)}
          className="mx-2 flex flex-col justify-center items-center cursor-pointer hover:text-[#d8d8d886]"
        >
          <span>Contact</span>
          <img
            src={underline}
            alt="underline"
            className="w-[60px] hover:text-[#d8d8d886]"
          />
        </h1>
      </div>
      <div className="text-[#e3e3e3b3] text-2xl text-left w-[480px] mb-2">
        <div
          style={{
            letterSpacing: "1px",
            userSelect: "text",
          }}
          className="flex justify-between items-center"
        >
          <h1 className="italic">Summon me!</h1>
          <div className="flex space-x-1 text-[#e3e3e339]">
            <MdMarkunreadMailbox onClick={() => sendEmail()} size={20} className="hover:text-[#b6b6b6b3] cursor-pointer"/>
            <FaLinkedinIn  onClick={() => goToLink('https://www.linkedin.com/in/juan-d-buitrago/')} size={20} className="hover:text-[#b6b6b6b3] cursor-pointer"/>
            <GoFileDirectoryFill onClick={() => goToResume()} size={20} className="hover:text-[#b6b6b6b3] cursor-pointer"/>
            <TbBrandGithubFilled onClick={() => goToLink('https://github.com/S4NCHOPANZ4')} size={20} className="hover:text-[#b6b6b6b3] cursor-pointer"/>
          </div>
        </div>
        <img
          src={underline}
          alt="underline"
          className="h-[3px] w-full opacity-80"
        />
      </div>
      <div className="h-[280px] w-[480px] ">
        <div className="flex">
          <div className="flex mr-2">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="rounded-sm bg-[#0f0f0f3c] text-[#e3e3e3f8] ml-1  focus:outline-none"
              />
              <img
                src={underline}
                alt="underline"
                className="h-[3px] w-full opacity-80"
              />
            </div>
          </div>
          <div className="flex ">
            <div>
              <input
                placeholder="Email"
                type="text"
                className="rounded-sm bg-[#0f0f0f3c] text-[#e3e3e3f8] ml-1  focus:outline-none"
              />
              <img
                src={underline}
                alt="underline"
                className="h-[3px] w-full opacity-80"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <h1 className="text-[#a6a6a6f8]">Message</h1>
          <textarea
            style={{
              resize: "none",
            }}
            name=""
            id=""
            cols="25"
            rows="10"
            className="scrollbar-small h-[170px] focus:outline-none bg-[#31313157] p-2 text-[#e3e3e3f8]"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mt-3 text-[#e3e3e3f8]">
          <button className="hover:bg-[#ef8655a5] bg-[#d1784e1a] px-4 py-1 border-poligon transition-all duration-900 ease-in-out">
            Summon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
