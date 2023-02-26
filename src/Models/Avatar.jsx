import { useGLTF, Center } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default () => {
  const { scene } = useGLTF("./Models/avatar-optimize.glb");
  const avatarRef = useRef();

  useFrame((_, delta) => {
    avatarRef.current.rotation.y += delta * 0.4;
  });
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Center position={[w / 2, 0, 0]} scale={[w / 6, w / 6, w / 6]}>
      <primitive object={scene} ref={avatarRef} />
    </Center>
  );
};
