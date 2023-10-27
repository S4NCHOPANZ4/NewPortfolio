import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { ComputerModel } from "./Components/ComputerModel";
import FuzzyOverlay from "../Components/FuzzyOverlay";

const Envtiroment = () => {
  const cameraRef = useRef();

  const [watching, setWatching] = useState(false);
  const [loadedModel, setLoadedModel] = useState(false);
  const [fov, setFov] = useState(null); //40

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
  return (
    <>

        <div className={`${loadedModel? 'opacity-1' : 'opacity-0'} h-full w-full bg-[#1f1f22f4]`}>
        <FuzzyOverlay opacity={3}/>
          <div className="fixed left-40 bottom-20 bg-black px-4 py-2 ">
            <h1 className="text-white">fe</h1>
          </div>
          {fov && (
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
          )}
        </div>
    </>
  );
};

export default Envtiroment;
