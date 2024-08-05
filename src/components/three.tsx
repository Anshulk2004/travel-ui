"use client"

import React,{useRef,useState} from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import '../app/globals.css'

function Box({speed = 0.01}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const coneRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed;
    }

    if (sphereRef.current) {
      const time = Date.now() * 0.001;
      sphereRef.current.position.x = Math.cos(time) * 3;
      sphereRef.current.position.z = Math.sin(time) * 3;
      
      const color = new THREE.Color(`hsl(${(time * 50) % 360}, 100%, 50%)`);
      (sphereRef.current.material as THREE.MeshStandardMaterial).color.set(color);
    }

    if (coneRef.current) {
      coneRef.current.rotation.y += 0.02; 
      coneRef.current.position.x = Math.sin(Date.now() * 0.001) * 2;
      coneRef.current.position.z = Math.cos(Date.now() * 0.001) * 2;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[-1.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh ref = {sphereRef} position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="lightgrey" />
      </mesh>
      <mesh ref = {coneRef} position={[0, 2, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    </>
  );
}

function  Three() {
  return (
    <div className="canvas-container">
      <Canvas style={{ background: 'black' }} camera={{ position: [2, 2, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box speed={0.02}/>
      </Canvas>
    </div>
  );
}

export default Three;
