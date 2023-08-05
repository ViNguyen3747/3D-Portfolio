import React from "react";
import { useGLTF, Center, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import ClickableItem from "./Helper/ClickableItem";

export default (props) => {
  const { nodes } = useGLTF("./Models/workspace.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  const handleResume = () => {
    window.open("/resume.pdf");
  };

  return (
    <Float rotationIntensity={0.15}>
      <Center position={[w, 0, 0]} scale={[w / 4, w / 4, w / 4]}>
        <group {...props} dispose={null}>
          <primitive object={nodes.base} />
          <mesh
            geometry={nodes.resume.geometry}
            material={nodes.resume.material}
            onClick={() => handleResume()}
            onPointerOver={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "default";
            }}
          />
          <ClickableItem isPrimitive label="computer" object={nodes.computer} />
          <ClickableItem isPrimitive label="books" object={nodes.books} />
          <ClickableItem label="coffee" isPrimitive object={nodes.coffee} />
          <ClickableItem
            isPrimitive
            label="headphones"
            object={nodes.headphones}
          />
          <ClickableItem
            label="dog"
            geometry={nodes.dog.geometry}
            material={nodes.dog.material}
          />
          <ClickableItem
            label="name"
            geometry={nodes.name.geometry}
            material={nodes.name.material}
          />
          <ClickableItem
            label="code"
            geometry={nodes.code.geometry}
            material={nodes.code.material}
          />
        </group>
      </Center>
    </Float>
  );
};

useGLTF.preload("./Models/workspace.glb");
