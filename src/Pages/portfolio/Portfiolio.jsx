import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import About from "../../Components/portfolio-page/About";
import darkCode from "../../assets/icons/iconParts/DarkCode.png";
import Projects from "../../Components/portfolio-page/Projects";


const Portfiolio = () => {
  const [scene, setScene] = useState(1);

  const switchScene = () => {
    switch (scene) {
      case 1:
        return <Home setScene={setScene} />;
      case 2:
        return <About setScene={setScene} />;

      default:
        break;
    }
  };

  useEffect(() => {}, [scene]);

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#191919]">
      {scene === 1 && (
        <div
          style={{ userSelect: "none" }}
          className="flex flex-col items-center justify-center "
        >
          <div className="relative h-[190px] w-[600px] flex flex-col items-center justify-center">
            <img src={darkCode} alt="title" className="w-full" />
            <h1
              style={{
                letterSpacing: "3px",
              }}
              className="text-white timesNewRoman"
            >
              PREPARE TO CODE EDITION
            </h1>
          </div>
          <div
            style={{
              letterSpacing: "2px",
            }}
            className="timesNewRoman flex flex-col text-center text-white items-center justify-center"
          >
            <h1
              onClick={() => setScene(2)}
              className="cursor-pointer hover:bg-[#ef8655a5] px-5"
            >
              About
            </h1>
            <h1
              onClick={() => setScene(3)}
              className="cursor-pointer hover:bg-[#ef8655a5] px-5 my-1"
            >
              Projects
            </h1>
            <h1
              onClick={() => setScene(4)}
              className="cursor-pointer hover:bg-[#ef8655a5] px-5"
            >
              Contact
            </h1>
          </div>
        </div>
      )}
      {scene === 2 && <About setScene={setScene} />}
      {scene === 3 && <Projects setScene={setScene}/>}
      {scene === 4 && <></>}
    </div>
  );
};


export default Portfiolio;
