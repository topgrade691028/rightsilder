import React, { useRef } from "react";
import ThreeDTest from "./index";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
function ThreeDWrapper(props) {
  function Lights() {
    const ambientRef = useRef();
    const directionalRef = useRef();
    const pointRef = useRef();
    const spotRef = useRef();

    useControls("Ambient Light", {
      visible: {
        value: false,
        onChange: (v) => {
          ambientRef.current.visible = v;
        },
      },
      color: {
        value: "white",
        onChange: (v) => {
          ambientRef.current.color = new THREE.Color(v);
        },
      },
    });

    useControls("Directional Light", {
      visible: {
        value: true,
        onChange: (v) => {
          directionalRef.current.visible = v;
        },
      },
      position: {
        x: 1,
        y: 1,
        z: 1,
        onChange: (v) => {
          directionalRef.current.position.copy(v);
        },
      },
      color: {
        value: "white",
        onChange: (v) => {
          directionalRef.current.color = new THREE.Color(v);
        },
      },
    });

    useControls("Point Light", {
      visible: {
        value: false,
        onChange: (v) => {
          pointRef.current.visible = v;
        },
      },
      position: {
        x: 2,
        y: 0,
        z: 0,
        onChange: (v) => {
          pointRef.current.position.copy(v);
        },
      },
      color: {
        value: "white",
        onChange: (v) => {
          pointRef.current.color = new THREE.Color(v);
        },
      },
    });

    useControls("Spot Light", {
      visible: {
        value: false,
        onChange: (v) => {
          spotRef.current.visible = v;
        },
      },
      position: {
        x: 3,
        y: 2.5,
        z: 1,
        onChange: (v) => {
          spotRef.current.position.copy(v);
        },
      },
      color: {
        value: "white",
        onChange: (v) => {
          spotRef.current.color = new THREE.Color(v);
        },
      },
    });

    return (
      <>
        <ambientLight ref={ambientRef} />
        <directionalLight ref={directionalRef} />
        <pointLight ref={pointRef} />
        <spotLight ref={spotRef} />
      </>
    );
  }

  return (
    <Canvas>
      {/* <Lights/> */}
      <ambientLight position={[1, 1.5, 0]} color={"red"} />
      <OrbitControls target0={[0, 0.35, 0]} maxPolarAngle={6} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      {/* <color args={[0, 0, 0]} attach="background" /> */}
      <ThreeDTest {...props} />
    </Canvas>
  );
}

export default ThreeDWrapper;
