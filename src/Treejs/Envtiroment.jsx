import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import { ComputerModel } from "./Components/ComputerModel";

const Envtiroment = () => {
  // 50, 100, -100
  return (
    <>
      <div className="fixed left-40 bottom-20 bg-black px-4 py-2">
          <h1 className="text-white">fe</h1>
      </div>
      <Canvas camera={{ position: [-5, 120, -40], fov: 40 }}>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />

        <Environment preset="city" />
        <ambientLight />
        <pointLight position={[8, 5, 10]} decay={1} intensity={10} />
        {/* //================================Scene Items============================================== */}
        <ComputerModel position={[0, 1, -5]} rotation={[0, Math.PI, 0]} />
        <ContactShadows position={[0, -4.5, 0]} scale={40} blur={2} far={16} />
      </Canvas>
    </>
  );
};

export default Envtiroment;
