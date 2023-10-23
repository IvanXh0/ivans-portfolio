"use client";

import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html as="div">
      <span className="canvas-load"></span>
      <p className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </p>
    </Html>
  );
}
