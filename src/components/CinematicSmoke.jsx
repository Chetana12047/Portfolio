import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


function SmokePlane({ position, rotation, speed, opacity }) {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.z += speed;

    mesh.current.position.x =
      position[0] +
      Math.sin(state.clock.elapsedTime * 0.15) * 0.3;

    mesh.current.position.y =
      position[1] +
      Math.cos(state.clock.elapsedTime * 0.12) * 0.3;
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation}
    >
      <planeGeometry args={[9, 9]} />

      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={opacity}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function MovingLight() {
  const light = useRef();

  useFrame((state) => {
    light.current.position.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 5;

    light.current.position.y =
      Math.cos(state.clock.elapsedTime * 0.3) * 3;
  });

  return (
    <pointLight
      ref={light}
      intensity={8}
      color="#ffffff"
      distance={25}
    />
  );
}

export default function CinematicSmoke() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 8] }}>

        <color attach="background" args={["#020202"]} />

        <ambientLight intensity={0.03} />



        <SmokePlane
          position={[-3, 2, -5]}
          rotation={[0, 0, 0.3]}
          speed={0.0008}
          opacity={0.05}
        />

        <SmokePlane
          position={[3, -2, -6]}
          rotation={[0, 0, -0.4]}
          speed={-0.001}
          opacity={0.04}
        />

        <SmokePlane
          position={[0, 0, -7]}
          rotation={[0, 0, 0.2]}
          speed={0.0005}
          opacity={0.035}
        />

        <SmokePlane
          position={[-5, -3, -8]}
          rotation={[0, 0, -0.2]}
          speed={0.0007}
          opacity={0.03}
        />

        <SmokePlane
          position={[5, 3, -9]}
          rotation={[0, 0, 0.5]}
          speed={-0.0006}
          opacity={0.025}
        />

      </Canvas>

      <div className="cinematic-overlay"></div>
    </div>
  );
}