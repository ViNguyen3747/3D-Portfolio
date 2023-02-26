import { Text3D, Text, Center, GradientTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default () => {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <>
      <Center position={[0, -w / 20, 0]} scale={w / 20}>
        <Text3D
          font="./fonts/Press Start 2P_Regular.json"
          size={1}
          letterSpacing={0.1}
          height={0.5}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          HI. I'm VI
          <meshBasicMaterial>
            <GradientTexture stops={[0, 0.8]} colors={["#D96846", "#ffffff"]} />
          </meshBasicMaterial>
        </Text3D>
      </Center>
      <Center position={[0, -w / 9, 0]} scale={w / 200}>
        <Text
          color="#fffffe"
          font="./fonts/PressStart2P-Regular.ttf"
          fontSize={2}
        >
          Welcome to my portfolio !!!
        </Text>
      </Center>
      <Center position={[0, -w / 8, 0]} scale={w / 200}>
        <Text
          color="#fffffe"
          font="./fonts/PressStart2P-Regular.ttf"
          fontSize={1.2}
        >
          {`P/s: Some items are clickable. Find them to discover some interesting facts about myself >.-`}
        </Text>
      </Center>
    </>
  );
};
