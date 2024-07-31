import React, { useState } from "react";
import Tleft from "../../assets/icons/characters/borders/Top-left.png";
import Tright from "../../assets/icons/characters/borders/Top-right.png";
import Bright from "../../assets/icons/characters/borders/Bottom-right.png";
import Bleft from "../../assets/icons/characters/borders/Bottom-left.png";
import underline from "../../assets/icons/characters/borders/underline.png";
import background from "../../assets/icons/characters/borders/ContactBg.png";
import resummeEnglishFile from "../../assets/resumme/EnglishResumme.pdf";
import resummeSpanishFile from "../../assets/resumme/SpanishResumme.pdf"
import backgroundOption from "../../assets/icons/characters/borders/ContactBg.png";

import emailIcon from "../../assets/icons/emailllogo.png";
import githubLogo from "../../assets/icons/githublogo.png";
import linkedinLogo from "../../assets/icons/linkedinlogo.png";
import resummeLogo from "../../assets/icons/resummelogo.png";

import { MdMarkunreadMailbox } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { TbBrandGithubFilled } from "react-icons/tb";
import GeneralNotification from "../GeneralNotification";

const Contact = ({ setScene }) => {
  const [openNotifications, setOpenNotificatios] = useState(false)

  const goToLink = (url) => {
    window.open(url, "_blank");
  };

  const goToResume = () => {
    setOpenNotificatios(true)
  };

  const resummeSpanish = () => {
    window.open(resummeSpanishFile, "_blank");
    setOpenNotificatios(false)
  }

  const resummeEnglish = () => {
    window.open(resummeEnglishFile, "_blank");
    setOpenNotificatios(false)

  }


  const sendEmail = () => {
    const recipientEmail = "buitr4go@gmail.com"; // Reemplaza con la dirección de correo deseada
    const subject = "Hey Juan";
    const body = "body";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abrir la ventana de correo electrónico
    window.location.href = mailtoLink;
  };


  return (
    <>
    {openNotifications && 
        <GeneralNotification title={'Resumme Lenguage'} setOpen={setOpenNotificatios}>
        <div>
          <p className="text-sm text-center mb-2">On what lenguage do you prefer my resumme?</p>
          <div className="flex space-x-3 items-center justify-center">
            <button onClick={() => resummeEnglish()} className="bg-[#c3c3c3] hover:bg-[#b6b6b6] px-2 py-1 text-xs border-window">English</button>
            <button onClick={() => resummeSpanish()}  className="bg-[#c3c3c3] hover:bg-[#b6b6b6] px-2 py-1 text-xs border-window">Spanish</button>
          </div>
        </div>
      </GeneralNotification>
    }

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
          className="flex space-y-2 flex-col justify-between items-center"
        >
          <div className="flex space-x-2">
            <div onClick={() => sendEmail()}  className="transition-all hover:text-white cursor-pointer relative border-[1px] rounded-sm border-[#8054164f] hover:border-[#805416cc] w-[200px] h-[150px]">
             <div className="flex  flex-col  h-full items-center justify-center">
                <img className="h-[60px] w-[60px]" src={emailIcon} />
                <p className="text-sm mt-2 font-semibold">Email Spell</p>
                <p className="text-xs text-stone-400 ">Send me an email!</p>

              </div>
              <img
                src={backgroundOption}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div  onClick={() => goToLink('https://github.com/S4NCHOPANZ4')} className="transition-all hover:text-white  cursor-pointer relative border-[1px] rounded-sm border-[#8054164f] hover:border-[#805416cc] w-[200px] h-[150px]">
              <div className=" flex  flex-col  h-full items-center justify-center">
                <img className="h-[55px] w-[55px]" src={githubLogo} />
                <p className="text-sm mt-2  font-semibold">Github Portal</p>
                <p className="text-xs text-stone-400 ">It's just GitHub</p>


              </div>
              <img
                src={backgroundOption}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <div onClick={() => goToResume()}  className=" transition-all hover:text-white  cursor-pointer relative border-[1px] rounded-sm border-[#8054164f] hover:border-[#805416cc] w-[200px] h-[150px]">
              <div className="flex  flex-col  h-full items-center justify-center">  
                <img className="h-[60px] w-[60px]" src={resummeLogo} />
                <p className="text-sm mt-2  font-semibold">Character Sheet</p>
                <p className="text-xs text-stone-400 ">Also known as resumme</p>
              </div>
              <img
                src={backgroundOption}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div onClick={() => goToLink('https://www.linkedin.com/in/juan-d-buitrago/')} className="transition-all hover:text-white  cursor-pointer relative border-[1px] rounded-sm border-[#8054164f] hover:border-[#805416cc] w-[200px] h-[150px]">
              <div className="flex  flex-col  h-full items-center justify-center">
                <img className="h-[50px] w-[50px]" src={linkedinLogo} />
                <p className="text-sm mt-2  font-semibold">LinkedIn Tavern</p>
                <p className="text-xs text-stone-400 ">Contact me on LinkedIn</p>

              </div>

              <img
                src={backgroundOption}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
          {/* <div className="flex space-x-1 text-[#e3e3e339]">
            <TbBrandGithubFilled  size={20} className="hover:text-[#b6b6b6b3] cursor-pointer"/>
          </div> */}
        </div>
      </div>
    </div>
    </>

  );
};

export default Contact;
