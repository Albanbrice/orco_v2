import React, { useRef } from "react";

function Lights() {
  const ambientLightRef = useRef();
  const PointLightRef = useRef();
  return (
    <group>
      <ambientLight ref={ambientLightRef} color="white" intensity={0.1} />
      <pointLight
        ref={PointLightRef}
        position={[20, 20, 20]}
        intensity={0.15}
      />
      <pointLight
        ref={PointLightRef}
        position={[-20, -20, -20]}
        intensity={0.05}
      />
      <pointLight
        ref={PointLightRef}
        position={[-20, 20, -20]}
        intensity={0.25}
      />
    </group>
  );
}

export { Lights };
