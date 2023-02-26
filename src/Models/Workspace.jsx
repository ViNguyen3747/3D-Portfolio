import { useGLTF, Center, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Resume from "../assets/resume.pdf";
import ClickableItem from "./Helper/ClickableItem";

export default () => {
  const { nodes } = useGLTF("./Models/workspace-optimize.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  const handleResume = () => {
    window.open(Resume);
  };

  return (
    <Center position={[w, 0, 0]} scale={[w / 4, w / 4, w / 4]}>
      <Float rotationIntensity={0.15}>
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
        <ClickableItem
          label="coffee"
          geometry={nodes.coffee.geometry}
          material={nodes.coffee.material}
        />
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
      </Float>
    </Center>
  );
};
