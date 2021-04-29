import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Orco10K } from "../components/3d/orco";
import {Archive3D} from "../components/3d/archive3d"
import { Lights } from "./lights";

const archives = ["Orco-01-0002", "Orco-04-0015", "Orco-01-0023"];

export default function Scene3D() {
  return (
    <Canvas
      id="scene-container"
      className="scene-container"
      camera={{
        position: [0, 25, 25],
        fov: [50]
      }}
    >
      <Lights />

      <Suspense name="suspense" fallback={null}>
        <Orco10K />
        {archives.map((item, index) => (
          <Archive3D key={index} name={item}/>
        ))}
        
      </Suspense>
      <OrbitControls 
          rotateSpeed={0.4}
          enableDamping={true}
          dampingFactor={0.4}
          enableZoom={true}
          enablePan={true}
          enableKeys={true}
          screenSpacePanning={true}
          maxDistance={200}
      />
    </Canvas>
  );
}
