import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/public/Computer/ComputerModel.gltf");
  const group = useRef();
  const htmlRef = useRef();
  const meshRef = useRef();

  const [clicked, setClicked] = useState(false);
  const [finished, setfinished] = useState(false);
  const vec = new THREE.Vector3();


  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.3,
      0.1
    );
    if (clicked) {
        state.camera.lookAt(meshRef.current.position);
        state.camera.position.lerp(vec.set(0 , 20,-5), .02);
   
        const targetRotationX = (160 * Math.PI) / 180;
        const targetPositionZ = -11;
        group.current.rotation.x = THREE.MathUtils.lerp(
          group.current.rotation.x,
          targetRotationX,
          0.05 
        );
        group.current.position.z = THREE.MathUtils.lerp(
          group.current.position.z,
          targetPositionZ,
          0.05
        );
        state.camera.updateProjectionMatrix();
    }else if(!clicked && !finished) {
      const previousCameraPosition = state.camera.position.clone();
      const initialCameraPosition = new THREE.Vector3(50, 100, -100); // Ajusta según tus necesidades
      state.camera.position.lerp(initialCameraPosition, 0.02);
      state.camera.updateProjectionMatrix();
      const defaultRotationX = 0.3;
      const defaultPositionZ = 0;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        defaultRotationX,
        0.05
      );
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        defaultPositionZ,
        0.05
      );
      const distanceThreshold = 0.01; // Ajusta según tus necesidades

      const hasTransitionEnded =
        state.camera.position.distanceTo(previousCameraPosition) < distanceThreshold;
    
      if (hasTransitionEnded ) {
        console.log('a');
      }
    }
  

  });
  useFrame(({ camera }) => {

    if(clicked){
      if (htmlRef.current) {
        htmlRef.current.style.opacity = 1;
      }
      return
    }

    const angleX = camera.rotation.x;
    const minAngle = -2;
    const maxAngle = -1.8;
    const normalizedAngle = (angleX - minAngle) / (maxAngle - minAngle);
    const opacity = 1 - normalizedAngle;
    if (htmlRef.current) {
      htmlRef.current.style.opacity = opacity;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={group}
      onClick={() =>  setClicked(!clicked)}
    >

      <mesh
        ref={meshRef}
       
        scale={50}
        geometry={nodes.BM86_Portable.geometry}
        material={materials["BM86_Portable.001"]}
        position={[0, 0.004, 0]}
      />
      <mesh
      
      >
        <Html
          ref={htmlRef}
          scale={.5}
          className="content transition-all duration-300 ease-in-out"
          position={[0, 11, -0.65]}
          rotation-x={-Math.PI / 12}
          transform
          occlude
        
        >
          <div
          onClick={() => setClicked(true)}
          className="wrapper bg-green-300 ">
            <div className="">
              <h1>odsfj</h1>
            </div>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/public/Computer/ComputerModel.gltf");
