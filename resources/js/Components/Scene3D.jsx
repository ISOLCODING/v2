import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(t / 1.5) / 6;
      sphereRef.current.rotation.z = t / 4;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5} ref={sphereRef}>
      <MeshDistortMaterial
        color="#38bdf8"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[500px] w-full relative z-0">
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
