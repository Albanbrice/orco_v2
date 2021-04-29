import React, { useRef, useEffect, useState } from "react";
import { Vector3, Euler, MathUtils } from "three";
import { useTexture } from "@react-three/drei";
import { useStore } from "../../store";
import archiveData from "../../assets/json/archives.json";

const Archive3D = (props) => {
  const { name } = props;

  const archive = archiveData.find((arch) => arch.name === name);

  function CreateNothing() {
    return <group></group>;
  }

  function SetArchive(props) {
    const { archive } = props;
    const { X, Y, Z, rotX, rotY, rotZ, size, scale, width, height } = archive;

    let taille = size * scale;
    let ratio = height / width;

    const ref = useRef();
    const pos = new Vector3(X, Z, -Y);

    const rot2 = new Euler(
      -MathUtils.degToRad(rotX) + Math.PI / 2,
      MathUtils.degToRad(rotZ),
      MathUtils.degToRad(rotY),
      "XYZ"
    );

    // OK approx
    const rot1 = new Euler(
      Math.PI / 2 - MathUtils.degToRad(rotX),
      MathUtils.degToRad(rotZ),
      MathUtils.degToRad(-rotY),
      "XYZ"
    );

    // OK pour PLAN
    const rot0 = new Euler(
      //Math.PI / 2 - MathUtils.degToRad(rotX),
      //MathUtils.degToRad(rotZ),
      //MathUtils.degToRad(-rotY),
      -Math.PI / 2 + MathUtils.degToRad(rotY),
      MathUtils.degToRad(rotX),
      MathUtils.degToRad(-rotZ),
      "ZXY"
    );

    const rot = new Euler(
      MathUtils.degToRad(rotX) - Math.PI / 2,
      MathUtils.degToRad(rotZ),
      MathUtils.degToRad(rotY)
    );

    const orders = ["XYZ", "XZY", "YXZ", "YZX", "ZXY", "ZYX"];
    const order = orders[3];

    // const quat = new Quaternion(0.238468, -0.665682, -0.680944, 0.190564);
    const archImg = useTexture(`/img/${name}.jpg`);
    return (
      <mesh
        ref={ref}
        name={name}
        rotation={[rot.x, rot.y, rot.z, order]}
        position={[pos.x, pos.y, pos.z]}
      >
        <planeBufferGeometry
          attach="geometry"
          args={[taille, taille * ratio]}
        />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent={true}
          opacity={0.5}
          map={archImg}
        />
      </mesh>
    );
  }

  return <SetArchive archive={archive} />;
};

export { Archive3D };
