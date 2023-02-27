import { Center, GradientTexture, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default () => {
  const { nodes } = useGLTF("./Models/text-optimize.glb");
  console.log(nodes);
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <>
      <Center position={[0, 0, 0]} scale={w / 9}>
        <mesh geometry={nodes.Text.geometry}>
          <meshBasicMaterial>
            <GradientTexture stops={[0, 1]} colors={["#D96846", "#ffffff"]} />
          </meshBasicMaterial>
        </mesh>
      </Center>
    </>
  );
};
