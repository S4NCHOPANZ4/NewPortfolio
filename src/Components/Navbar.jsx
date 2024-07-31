import React, { useState } from "react";
import Tab from "./Tab.jsx";

import Email from "../assets/icons/emailllogo.png";
import GitHub from "../assets/icons/githublogo.png";
import Linkedin from "../assets/icons/linkedinlogo.png";
import Resumme from "../assets/icons/resummelogo.png";

import resummeEnglishFile from "../assets/resumme/EnglishResumme.pdf";
import resummeSpanishFile from "../assets/resumme/SpanishResumme.pdf"
import GeneralNotification from "./GeneralNotification.jsx";

const Navbar = ({ setClicked, tabs, setTabs }) => {
  const [openHome, setOpenHome] = useState(false);
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

  const openfromTab = (i) => {
    let newList = [...tabs];

    newList = newList.map((item) => {
      return {
        ...item,
        selected: false,
      };
    });

    newList[i] = {
      ...newList[i],
      minimized: false,
      selected: true,
    };
    setTabs(newList);
  };

  return (
    <>
      {openNotifications && (
        <GeneralNotification
          title={"Resumme Lenguage"}
          setOpen={setOpenNotificatios}
        >
          <div>
            <p className="text-sm text-center mb-2">
              On what lenguage do you prefer my resumme?
            </p>
            <div className="flex space-x-3 items-center justify-center">
              <button
                onClick={() => resummeEnglish()}
                className="bg-[#c3c3c3] hover:bg-[#b6b6b6] px-2 py-1 text-xs border-window"
              >
                English
              </button>
              <button
                onClick={() => resummeSpanish()}
                className="bg-[#c3c3c3] hover:bg-[#b6b6b6] px-2 py-1 text-xs border-window"
              >
                Spanish
              </button>
            </div>
          </div>
        </GeneralNotification>
      )}
      <div
        style={{ userSelect: "none" }}
        className="absolute w-[949px] h-[28px] bg-[#c3c3c3] bottom-0 navBar py-1 border-window-inset flex"
      >
        <div
          onClick={() => setOpenHome(!openHome)}
          style={
            openHome
              ? { backgroundColor: "#b0b0b0" }
              : { backgroundColor: "#c3c3c3" }
          }
          className={`flex items-center justify-center ml-1  w-[70px] h-[22px] cursor-pointer ${
            openHome ? "border-window-inset Sans-serif-bold " : "border-window "
          } `}
        >
          <img
            src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
            className="h-[22px]"
            alt="icon"
          />
          <h1 className="Sans-serif-bold ml-1 mb-1  text-xs text-center">
            Start
          </h1>
        </div>
        {openHome && (
          <div className="absolute z-50 h-[200px] w-[200px] bg-[#c3c3c3] bottom-full left-2 flex">
            <div className="bg-[#aeaeae] flex items-end justify-start w-10">
              <h1
                style={{ transform: "rotate(270deg)" }}
                className="mb-4 pb-10 flex items-center justify-center OsName font-bold text-lg text-[#e6e6e6]"
              >
                Kasuga <span className="text-2xl font-extrabold">OS</span>
              </h1>
            </div>
            <div className="h-full flex-col flex items-center justify-end">
              <div
                onClick={() => goToResume()} 
                style={{ borderTop: "2px groove #e6e6e6" }}
                className="w-[160px] h-[50px] px-2  flex justify-start items-center cursor-pointer hover:bg-[#010081] hover:text-[#e6e6e6]"
              >
                <img className="w-[30px]" src={Resumme} alt="" srcset="" />
                <h1 className="text-xs px-1">Resumme</h1>
              </div>
              <div
                onClick={() => goToLink('https://www.linkedin.com/in/juan-d-buitrago/')} 
                style={{ borderTop: "2px groove #e6e6e6" }}
                className="w-[160px] h-[50px] px-2  flex justify-start items-center cursor-pointer hover:bg-[#010081] hover:text-[#e6e6e6]"
              >
                <img className="w-[30px]" src={Linkedin} alt="" srcset="" />
                <h1 className="text-xs px-1">LinkedIn</h1>
              </div>
              <div
                onClick={() => goToLink('https://github.com/S4NCHOPANZ4')}
                style={{ borderTop: "2px groove #e6e6e6" }}
                className="w-[160px] h-[50px] px-2  flex justify-start items-center cursor-pointer hover:bg-[#010081] hover:text-[#e6e6e6]"
              >
                <img className="w-[30px]" src={GitHub} alt="" srcset="" />
                <h1 className="text-xs px-1">GitHub</h1>
              </div>
              <div
                onClick={() => sendEmail()}
                style={{ borderTop: "2px groove #e6e6e6" }}
                className="w-[160px] h-[50px] px-2  flex justify-start items-center cursor-pointer hover:bg-[#010081] hover:text-[#e6e6e6]"
              >
                <img className="w-[35px]" src={Email} alt="" srcset="" />
                <h1 className="text-xs px-1">Email</h1>
              </div>
              <div
                onClick={() => {
                  setClicked(false);
                  setOpenHome(false);
                }}
                style={{ borderTop: "2px groove #e6e6e6" }}
                className="w-[160px] h-[40px]  flex justify-start items-center cursor-pointer hover:bg-[#010081] hover:text-[#e6e6e6]"
              >
                <img
                  src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png"
                  alt="icon"
                  className="h-[45px]"
                />
                <h1 className="text-xs">Exit...</h1>
              </div>
            </div>
          </div>
        )}

        {tabs.map((tab, i) => {
          return (
            <Tab
              onClick={() => openfromTab(i)}
              key={i}
              title={tab.name}
              icon={tab.icon}
              selected={tab.selected}
              minimized={tab.minimized}
            />
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
