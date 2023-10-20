import React, { useState } from "react";
import Tab from "./Tab.jsx";

const Navbar = ({ setClicked, tabs, setTabs }) => {
  const [openHome, setOpenHome] = useState(false);


  const openfromTab = (i) =>{
    let newList =[...tabs]

    console.log(newList[i]);

    newList[i] = {
         ...newList[i],
         minimized: false,
         selected: true,
     }
     setTabs(newList)
  }

  return (
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
          <div className="h-full flex items-end">
            <div 
            onClick={() => {
              setClicked(false)
              setOpenHome(false)
            }}
            style={{borderTop: '2px groove #e6e6e6'}}
            className="w-[160px] h-[50px]  flex justify-start items-center cursor-pointer hover:bg-[#010081] hover:text-[#e6e6e6]">
              <img src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png" alt="icon" className="h-[45px]" />
              <h1 className="text-sm">Exit...</h1>
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
          />
        );
      })}
    </div>
  );
};

export default Navbar;
