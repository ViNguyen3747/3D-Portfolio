import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

export default (props) => {
  const { scene } = useGLTF("./Models/avatar.glb");
  const avatarRef = useRef();

  useFrame((_, delta) => {
    if (!avatarRef.current) return;
    avatarRef.current.rotation.y += delta * 0.4;
  });
  const { width: w } = useThree((state) => state.viewport);
  return (
    <Center position={[w / 2, 0, 0]} scale={[w / 6, w / 6, w / 6]}>
      <group {...props} dispose={null}>
        <primitive object={scene} ref={avatarRef} />
      </group>
    </Center>
  );
};

useGLTF.preload("./Models/avatar.glb");
