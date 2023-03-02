import { Center, GradientTexture, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default () => {
  const { nodes } = useGLTF("./Models/text.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <>
      <Center position={[0, 0, 0]} scale={w / 9}>
        <mesh geometry={nodes.Text.geometry}>
          <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={["#efb98f", "white"]} />
          </meshBasicMaterial>
        </mesh>
      </Center>
    </>
  );
};
useGLTF.preload("./Models/text.glb");
