import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export default function ThreeDRotation(props) {
  const {
    baseToeLength,
    stemHeight,
    stemTop,
    stemBottom,
    baseTotalLength,
    baseThickness,
    shearLength,
    shearThickness,
    shearDistance,
  } = props;

  const shape = new THREE.Shape();

  // Define the points of the trapezoid
  shape.moveTo(-1 * stemBottom, -5); // Bottom-left corner
  shape.lineTo(stemBottom, -5); // Bottom-right corner
  shape.lineTo(stemTop, stemHeight - 5); // Top-right corner
  shape.lineTo(-1 * stemTop, stemHeight - 5); // Top-left corner

  // Close the shape
  shape.closePath();

  // Define extrusion settings
  const extrudeSettings = {
    steps: 1,
    depth: 3.3,
    bevelEnabled: false,
  };

  // Create the extruded geometry
  const geometry3 = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  const sKshape = new THREE.Shape();

  sKshape.moveTo(-0.5, -shearThickness + 0.5);
  sKshape.lineTo(shearLength - 0.5, -shearThickness + 0.5);
  sKshape.lineTo(shearLength - 0.5, 0.5);
  sKshape.lineTo(-0.5, 0.5);

  sKshape.closePath();
  const extrudeSettingsSk = {
    steps: 1,
    depth: 1,
    bevelEnabled: false,
  };
  const shearKeyGeometry = new THREE.ExtrudeGeometry(
    sKshape,
    extrudeSettingsSk
  );

  const ref = useRef();
  // useEffect(() => {
  //   console.log("stemBottom : ", stemBottom);
  // }, [stemBottom]);

  // useFrame((_, delta) => {
  //   ref.current.rotation.y += 0.5 * delta;
  // });
  return (
    <group
      ref={ref}
      rotation={[-0.1, 0.5, 0]}
      scale={[0.7, 0.7, 0.7]}
      position={[0, 0, 0]}
    >
      <mesh
        position={[
          1.233 * baseToeLength - 7.4,
          (baseThickness - 1) * 0.5,
          -0.5,
        ]}
        geometry={geometry3}
        scale={[0.3, 0.3, 0.3]}
      >
        {/* <boxGeometry args={[1, 3, 1]} ref={ref} /> */}
        <meshBasicMaterial color="#D9D9D9" />
      </mesh>
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[baseTotalLength, baseThickness, 1]} />
        <meshBasicMaterial color="#D9D9D9" />
      </mesh>
      <mesh
        position={[
          1.233 * shearDistance - 7.5,
          -0.5 * baseThickness - 2.5,
          -0.5,
        ]}
        geometry={shearKeyGeometry}
        // scale={[0.5, 0.5, 0.5]}
      >
        {/* <boxGeometry args={[shearLength, shearThickness, 1]} /> */}
        <meshBasicMaterial color="#D9D9D9" />
      </mesh>
    </group>
  );
}
