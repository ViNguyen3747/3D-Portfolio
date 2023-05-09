import { useGLTF, Center, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";

const LinkMapper = {
  strawberry: "https://www.instagram.com/p/CoQ-DSOLgea/",
  window: "https://seasonal-windows.vercel.app/",
  sunset: "https://www.instagram.com/reel/CnqvR5UIAvF/",
  workaholic: "https://www.instagram.com/p/Cnbey5Jussg/",
  sweet: "https://sweet-city.vercel.app/",
  jeep: "https://jeep-zero-seven.netlify.app/",
  workspace: "https://isometric-workspace.netlify.app/",
  weather: "https://lowpoly-weather.vercel.app/",
};

const ProjectLink = ({ label, geometry, flipY = false }) => {
  const handleLink = () => {
    window.open(LinkMapper[label]);
  };
  return (
    <mesh
      geometry={geometry}
      onPointerOver={(event) => {
        document.body.style.cursor = "pointer";
        event.stopPropagation();
      }}
      onPointerOut={(event) => {
        document.body.style.cursor = "default";
        event.stopPropagation();
      }}
      onClick={(event) => {
        handleLink();
        event.stopPropagation();
      }}
    >
      <Suspense fallback={null}>
        <ImageTexture label={label} flipY={flipY} />
      </Suspense>
    </mesh>
  );
};

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
        <ProjectLink geometry={nodes.strawberry.geometry} label="strawberry" />
        <ProjectLink geometry={nodes.bipolar.geometry} label="window" />
        <ProjectLink geometry={nodes.sunset.geometry} label="sunset" flipY />
        <ProjectLink
          geometry={nodes.workaholic.geometry}
          label="workaholic"
          flipY
        />
        <ProjectLink geometry={nodes.sweet.geometry} label="sweet" />
        <ProjectLink geometry={nodes.stairs.geometry} label="jeep" />
        <ProjectLink geometry={nodes.workspace.geometry} label="workspace" />
        <ProjectLink geometry={nodes.booklovers.geometry} label="weather" />
      </>
    </Center>
  );
};

useGLTF.preload("./Models/gallery.glb");
