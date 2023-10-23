import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Icon from "../Components/Icon";
import MyPortfolioIcon from "../assets/icons/iconPortfolio.png";
import CaseJoltIcon from "../assets/icons/CaseJolt-Icon.png";
import filmfoliaIcon from "../assets/icons/filmfolia-Icon.png";
import FitHubIcon from "../assets/icons/FItHub-Icon.png";
import StereohIcon from "../assets/icons/Stereoh-Icon.png";
import WindowUI from "./WindowUI.jsx";

const Desktop = ({ setClicked }) => {
  const [tabs, setTabs] = useState([
    {
      name: "My Portfolio",
      icon: "https://win98icons.alexmeub.com/icons/png/html-1.png",
      minimized: false,
      selected: true,
    },
  ]);


  const openWindow = (name, icon) =>{
      let newList = [...tabs]


      const isOpenWindow = newList.some((element, i) =>{


        newList = newList.map((item)=>{
          return {
            ...item,
            selected: false
          }
        })

        if(element.name === name){
          newList[i] = {
            ...newList[i],
            selected: true,
            minimized: false
          }
        }
        setTabs(newList)
        
        return element.name === name
      });

      if(!isOpenWindow){
        newList = newList.map((element ) => {
          return {
            ...element,
            selected: false,
          }
        });
        newList.push(
          {
            name: name,
            icon: icon,
            minimized: false,
            selected: true
          }
        )
        setTabs(newList)
      }
      return


  }


  return (
    <div className="Sans-serif h-[610px] w-[950px] bg-[#008080] relative">
      {tabs.map((tab, i) => {
        return (
          <WindowUI tabs={tabs} setTabs={setTabs} tab={tab} i={i} key={i} title={tab.name} icon={tab.icon} minimized={tab.minimized}>
            <h1>dpofskewf</h1>
          </WindowUI>
        );
      })}

      {/* EXIT ICON  */}
      <div
        onClick={() => setClicked(false)}
        className="absolute right-4 bottom-10"
      >
        <Icon
          name={"Exit"}
          icon={
            "https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png"
          }
        />
      </div>
      {/* MY PORTFOLIO ICON */}
      <div
      onClick={() => openWindow("My Portfolio", MyPortfolioIcon)}
      className="absolute left-4 top-2">
        <Icon name={"My Portfolio"} icon={MyPortfolioIcon} />
      </div>
      {/* CASE JOLTS */}
      <div 
      onClick={() => openWindow("Case Jolt", CaseJoltIcon)}
      className="absolute left-4 top-20">
        <Icon name={"Case Jolt"} icon={CaseJoltIcon} />
      </div>
      {/* FILM FOLIA */}
      <div
      onClick={() => openWindow("Film Folia", filmfoliaIcon)}
      className="absolute left-4 top-40">
        <Icon name={"Film Folia"} icon={filmfoliaIcon} />
      </div>
      {/* FITHUB */}
      <div 
      onClick={() => openWindow("FitHub", FitHubIcon)}
      className="absolute left-4 top-60">
        <Icon name={"FitHub"} icon={FitHubIcon} />
      </div>
      {/* STEREO */}
      <div 
      onClick={() => openWindow("Stereo", StereohIcon)}
      className="absolute left-4 top-80">
        <Icon name={"Stereo"} icon={StereohIcon} />
      </div>
      <Navbar setTabs={setTabs} setClicked={setClicked} tabs={tabs} />
    </div>
  );
};

export default Desktop;
