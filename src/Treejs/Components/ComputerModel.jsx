
import * as THREE from 'three'
import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/public/Computer/ComputerModel.gltf")
  const group = useRef()
  const htmlRef = useRef();
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.30, 0.1)

  })
  useFrame(({ camera }) => {
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
    <group {...props} dispose={null} ref={group}>
      <mesh ref={meshRef} scale={50}  geometry={nodes.BM86_Portable.geometry} material={materials['BM86_Portable.001']} position={[0, 0.004, 0]} />
      <mesh >
            <Html ref={htmlRef} scale={1} className="content transition-all duration-300 ease-in-out" position={[0, 11, -0.4]} rotation-x={-Math.PI / 12}  transform occlude>
              <div className="wrapper bg-green-300 ">
                <div className=''>
                  <h1>odsfj</h1>
                </div>
              </div>
            </Html>
          </mesh>
    </group>
  )
}

useGLTF.preload('/public/Computer/ComputerModel.gltf')
