import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Orco10K } from "../components/3d/orco";
import { Lights } from "./lights";

const archives = ["Orco-01-0001", "Orco-01-0002", "Orco-04-0015"];

export default function Scene3D() {
  return (
    <Canvas
      id="scene-container"
      className="scene-container"
      camera={{
        position: [0, 25, 0],
        fov: [50]
      }}
    >
      <Lights />

      <Suspense name="suspense" fallback={null}>
        <Orco10K />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
