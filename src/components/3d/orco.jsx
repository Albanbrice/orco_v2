import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Orco10K = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/orco_10K.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.orco_10K_1.geometry}
        material={materials.orco_10K_u1_v1}
      />
      <mesh
        geometry={nodes.orco_10K_2.geometry}
        material={materials.orco_10K_u2_v1}
      />
      <mesh
        geometry={nodes.orco_10K_3.geometry}
        material={materials.orco_10K_u1_v2}
      />
    </group>
  );
};

useGLTF.preload("/models/orco_10K.gltf");

export { Orco10K };
