import {
  useGLTF,
  Center,
  useVideoTexture,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";

const VideoMaterial = ({ label, flipY = false }) => {
  const texture = useVideoTexture(`./Gallery/${label}.mp4`);
  //Texture is flipY by default
  texture.flipY = flipY;
  return <meshBasicMaterial map={texture} toneMapped={false} />;
};

const FallBackMaterial = ({ label, flipY = false }) => {
  const texture = useTexture(`./Gallery/${label}.webp`);
  //Texture is flipY by default
  texture.flipY = flipY;
  return <meshBasicMaterial map={texture} toneMapped={false} />;
};
export default () => {
  const { nodes } = useGLTF("./Models/gallery-optimize.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Center position={[w * 3, 0, 0]} scale={[w / 7, w / 7, w / 7]}>
      <>
        <primitive object={nodes.frames} />
        <mesh geometry={nodes.strawberry.geometry}>
          <Suspense fallback={<FallBackMaterial label="strawberry" />}>
            <VideoMaterial label="strawberry" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.bipolar.geometry}>
          <Suspense fallback={<FallBackMaterial label="bipolar" />}>
            <VideoMaterial label="bipolar" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.sunset.geometry}>
          <Suspense fallback={null}>
            <FallBackMaterial label="sunset" flipY />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.workaholic.geometry}>
          <Suspense fallback={<FallBackMaterial label="workaholic" flipY />}>
            <VideoMaterial label="workaholic" flipY />
          </Suspense>
        </mesh>
      </>
    </Center>
  );
};
