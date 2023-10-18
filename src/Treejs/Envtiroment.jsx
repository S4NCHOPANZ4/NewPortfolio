import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import { ComputerModel } from "./Components/ComputerModel";

const Envtiroment = () => {
  const cameraRef = useRef();

  const [watch, setWatch] = useState(false);
  // 50, 100, -100


  // [50, 100, -100]
  return (
    <>
      <div className="fixed left-40 bottom-20 bg-black px-4 py-2">
        <h1 className="text-white">fe</h1>
      </div>
      <Canvas camera={{ position: [50, 100, -100], fov: 40 }}>

      <OrbitControls
          // enablePan={false}
          enableZoom={false}
          // minPolarAngle={Math.PI / 3}
          // maxPolarAngle={Math.PI / 3}
          ref={cameraRef}
        />
        <Environment preset="forest" />
        <ambientLight />
        <pointLight position={[30, 0, 20]} decay={1} intensity={30} />
        <pointLight position={[-30, 0, 20]} decay={1} intensity={30} />
        {/* //================================Scene Items============================================== */}
        <ComputerModel
          onPointerOver={() => setWatch(true)}
          onPointerOut={() => setWatch(false)}
          // position={[0, 1, -5]}
          rotation={[0, Math.PI, 0]}
        />  
        <ContactShadows position={[0, -4.5, 0]} scale={40} blur={2} far={16} />
      </Canvas>
    </>
  );
};


export default Envtiroment;
