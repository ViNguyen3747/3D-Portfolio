import { Center, GradientTexture, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default () => {
  const { nodes } = useGLTF("./Models/text.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <>
      <Center position={[0, 0, 0]} scale={w / 7}>
        <primitive object={nodes.text} />
      </Center>
    </>
  );
};
useGLTF.preload("./Models/text.glb");
