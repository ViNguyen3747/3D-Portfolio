import React from "react";
import { useGLTF, Center, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import ClickableItem from "./Helper/ClickableItem";

export default (props) => {
  const { nodes } = useGLTF("./Models/baking.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Center position={[w * 2, -1, 0]} scale={[w / 4, w / 4, w / 4]}>
      <Float rotationIntensity={0.15}>
        <group {...props} dispose={null}>
          <primitive object={nodes.base} />
          <ClickableItem isPrimitive label="omlette" object={nodes.omlette} />
          <ClickableItem isPrimitive label="rolling" object={nodes.rolling} />
          <ClickableItem isPrimitive label="loaf" object={nodes.loaf} />
          <ClickableItem isPrimitive label="piping" object={nodes.piping} />
        </group>
      </Float>
    </Center>
  );
};

useGLTF.preload("./Models/baking.glb");
