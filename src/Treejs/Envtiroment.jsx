import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { ComputerModel } from "./Components/ComputerModel";

const Envtiroment = () => {
  const cameraRef = useRef();

  const [watching, setWatching] = useState(false);

  return (
    <>
      <div className="fixed left-40 bottom-20 bg-black px-4 py-2">
        <h1 className="text-white">fe</h1>
      </div>
      <Canvas className="canvas" camera={{ position: [50, 80, -110], fov: 40 }}>

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
          setWatching={setWatching}
          rotation={[0, Math.PI, 0]}
        />  
        <ContactShadows position={[0, -4.5, 0]} scale={40} blur={2} far={16} />
      </Canvas>
    </>
  );
};


export default Envtiroment;
