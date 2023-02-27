import { useGLTF, Center, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";

const ImageTexture = ({ label, flipY = false }) => {
  const texture = useTexture(`./Gallery/${label}.webp`);
  //Texture is flipY by default
  texture.flipY = flipY;
  return <meshBasicMaterial map={texture} toneMapped={false} />;
};
export default () => {
  const { nodes } = useGLTF("./Models/gallery.glb");
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Center position={[w * 3, 0, 0]} scale={[w / 7, w / 7, w / 7]}>
      <>
        <primitive object={nodes.frames} />
        <mesh geometry={nodes.strawberry.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="strawberry" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.bipolar.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="bipolar" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.sunset.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="sunset" flipY />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.workaholic.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="workaholic" flipY />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.energy.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="energy" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.stairs.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="stairs" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.workspace.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="workspace" />
          </Suspense>
        </mesh>
        <mesh geometry={nodes.booklovers.geometry}>
          <Suspense fallback={null}>
            <ImageTexture label="booklovers" />
          </Suspense>
        </mesh>
      </>
    </Center>
  );
};

useGLTF.preload("./Models/gallery.glb");
