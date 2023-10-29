import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Desktop from "../../Pages/Desktop";

export function ComputerModel({ setWatching, rotation, setLoaded }) {
  const { nodes, materials } = useGLTF("../../../public/Computer/ComputerModel.gltf");
  const group = useRef();
  const htmlRef = useRef();
  const htmlMesh = useRef();
  const meshRef = useRef();

  const [clicked, setClicked] = useState(false);
  const vec = new THREE.Vector3();

  useEffect(() =>{
    if (meshRef.current && meshRef.current.geometry) {
      setLoaded(true)
    }
  },[meshRef])

  useEffect(() => {  
    if (clicked) {
      setWatching(true);
    } else if (!clicked) {
      setWatching(false);
    }
  }, [clicked]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.3,
      0.1
    );
    if (clicked) {
      state.camera.lookAt(meshRef.current.position);
      state.camera.position.lerp(vec.set(0, 17, -5), 0.09);

      const targetRotationX = (190 * Math.PI) / 180;
      const targetPositionZ = -11;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetRotationX,
        0.03
      );
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        targetPositionZ,
        0.03
      );
      state.camera.updateProjectionMatrix();
    } else if (!clicked) {
      state.camera.position.lerp(vec.set(50, 50, -70), 0.001);
      state.camera.updateProjectionMatrix();

      const targetRotationX = -(45 * Math.PI) / 180;
      const targetPositionZ = 0;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetRotationX,
        0.03
      );
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        targetPositionZ,
        0.03
      );
    }
  });
  useFrame(({ camera }) => {
    if (clicked) {
      if (htmlRef.current) {
        htmlRef.current.style.opacity = 1;
      }
      return;
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
      rotation={rotation}
      dispose={null}
      ref={group}
      onClick={() => {
        if (clicked) return;
        setClicked(true);
      }}
    >
      <mesh
        ref={meshRef}
        scale={50}
        geometry={nodes.BM86_Portable.geometry}
        material={materials["BM86_Portable.001"]}
        position={[0, 0, 0]}
      />
      <mesh ref={htmlMesh} position={[0, 11, -0.65]} rotation-x={-Math.PI / 12}>
        <Html
          ref={htmlRef}
          scale={0.5}
          className="content transition-all duration-300 ease-in-out"
          transform
          occlude
        >
          <Desktop setClicked={setClicked} />
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/public/Computer/ComputerModel.gltf");
