import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { ComputerModel } from "./Components/ComputerModel";
import FuzzyOverlay from "../Components/FuzzyOverlay";
import LoaderComp from "../Components/loader/LoaderComp";
import { motion } from "framer-motion";

const Envtiroment = () => {
  const cameraRef = useRef();

  const [watching, setWatching] = useState(false);
  const [loadedModel, setLoadedModel] = useState(false);
  const [fov, setFov] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 340) {
        setFov(90);
      } else if (window.innerWidth > 340 && window.innerWidth <= 500) {
        setFov(70);
      } else if (window.innerWidth > 500 && window.innerWidth <= 710) {
        setFov(60);
      } else {
        setFov(40);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Function to update the time every second
    const updateClock = () => {
      setTime(new Date());
    };

    // Update the time initially
    updateClock();

    // Set up an interval to update the time every second
    const interval = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // The empty array ensures the effect runs only once on component mount

  // Format the time in HH:mm:ss format
  const formattedTime = time.toLocaleTimeString();

  return (
    <>
      <div className="h-full w-full fixed">
        <LoaderComp loaded={loadedModel} />
      </div>
      <div
        className={`${
          loadedModel ? "opacity-1" : "opacity-0"
        } h-full w-full bg-[#1f1f22f4]`}
      >
        <FuzzyOverlay opacity={3} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loadedModel ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="fixed left-40 top-20  "
        >
          <h1 className="text-white bg-black px-4 py-2 w-[350px]">
            Hi! I'm Juan, Web Developer | {formattedTime}
          </h1>
          <h1 className="text-white bg-black px-4 py-2 mt-2 w-[300px] italic text-sm">
            Click On the keyboard to continue
          </h1>
        </motion.div>
        {fov && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedModel ? 1 : 0 }}
            transition={{ duration: 2 }} //
            className="h-full w-full"
          >
            <Canvas
              className={`canvas  `}
              camera={{ position: [30, 80, -110], fov: fov }}
            >
              <OrbitControls
                enabled={!watching}
                enablePan={false}
                enableZoom={false}
                ref={cameraRef}
              />

              <Environment preset="forest" />
              <ambientLight />
              <pointLight position={[30, 0, 20]} decay={1} intensity={30} />
              <pointLight position={[-30, 0, 20]} decay={1} intensity={30} />
              {/* //================================Scene Items============================================== */}
              <ComputerModel
                setLoaded={setLoadedModel}
                setWatching={setWatching}
                rotation={[0, Math.PI, 0]}
              />

              <ContactShadows
                position={[0, -4.5, 0]}
                scale={40}
                blur={2}
                far={16}
              />
            </Canvas>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Envtiroment;
