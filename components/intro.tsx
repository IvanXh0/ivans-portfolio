"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = () => {
  const model = useGLTF("./cloud_station/scene.gltf");
  return (
    <group>
      <ambientLight intensity={1} color="violet" />
      <directionalLight
        intensity={0.9}
        position={[10, 20, 50]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        intensity={1}
        distance={15}
        decay={2}
        color="orange"
        position={[2, 5, 0]}
      />
      <primitive
        object={model.scene}
        scale={0.35}
        position={[0.25, 0, 0]}
        receiveShadow
        castShadow
      />
    </group>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-5, 2, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default function Intro() {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <ModelCanvas />
      </div>
    </section>
  );
}
