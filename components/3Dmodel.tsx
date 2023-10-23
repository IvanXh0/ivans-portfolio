"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import { Object3D } from "three";
import CanvasLoader from "./loader";

const Model = () => {
  const model = useGLTF("./cloud_station/scene.gltf");

  let mixer: any;

  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  model.scene.traverse((child: Object3D) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <mesh>
      <ambientLight intensity={0.5} color="violet" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={model.scene} scale={0.3} position={[0, 0, 0]} />
    </mesh>
  );
};

export const ModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 12, 0], fov: 19 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={2}
        />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
