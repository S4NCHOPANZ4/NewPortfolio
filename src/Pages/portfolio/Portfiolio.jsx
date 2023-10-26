import React, { useEffect, useState } from "react";
import darkCode from "../../assets/icons/iconParts/DarkCode.png";
import About from "../../Components/portfolio-page/About";
import Projects from "../../Components/portfolio-page/Projects";
import Contact from "../../Components/portfolio-page/Contact";
import { motion } from "framer-motion";
import audioSelect from "../../assets/effetcs/scene-change.mp3"

const Portfiolio = () => {
  const [scene, setScene] = useState(1);
  const [audio] = useState(new Audio(audioSelect));

  useEffect(() => {
    toggleSound(audio, false);
  },[scene])


  const toggleSound = (audio, loop) => {
    if(loop){
      audio.loop = loop
    }
    audio.currentTime = 0;
    if (audio.paused) {
      audio.volume = .3; // Configura el volumen antes de reproducir
      audio.play();
    } 
  };


  const fadeAnimation = {
    opacity: 0,
    transition: { duration: 0.7 },
  };

  const fadeInAnimation = {
    opacity: 1,
    transition: { duration: 0.7 },
  };

  return (
    <div 
    className="h-full w-full flex items-center justify-center bg-[#191919]">
      <motion.div
        initial={fadeInAnimation}
        className="flex flex-col items-center justify-center "
        style={
          (scene !== 1 && { display: "none" }) || {
            userSelect: "none",
            display: "block",
          }
        }
        animate={scene !== 1 ? fadeAnimation : fadeInAnimation}
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
      </motion.div>

      <motion.div
        className="h-full w-full"
        style={
          (scene !== 2 && { display: "none" }) || {
            userSelect: "none",
            display: "block",
          }
        }
        animate={scene !== 2 ? fadeAnimation : fadeInAnimation}
      >
        <About setScene={setScene} />
      </motion.div>
      <motion.div
        className="h-full w-full"
        style={
          (scene !== 3 && { display: "none" }) || {
            userSelect: "none",
            display: "block",
          }
        }
        animate={scene !== 3 ? fadeAnimation : fadeInAnimation}
      >
        <Projects setScene={setScene} />
      </motion.div>
      <motion.div
        className="h-full w-full"
        style={
          (scene !== 4 && { display: "none" }) || {
            userSelect: "none",
            display: "block",
          }
        }
        animate={scene !== 4 ? fadeAnimation : fadeInAnimation}
      >
        <Contact setScene={setScene} />
      </motion.div>
    </div>
  );
};

export default Portfiolio;
