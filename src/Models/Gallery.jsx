import { useGLTF, Center, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";

const LinkMapper = {
  window_view: "https://window-view.vercel.app/",
  window_1: "https://seasonal-windows.vercel.app/",
  window_2: "https://seasonal-windows.vercel.app/",
  window_3: "https://seasonal-windows.vercel.app/",
  window_4: "https://seasonal-windows.vercel.app/",
  book: "https://books-quotes.vercel.app/",
  workaholic: "https://www.instagram.com/reel/CneDepdISnj/",
  sweet_1: "https://sweet-city.vercel.app/",
  sweet_2: "https://sweet-city.vercel.app/",
  car: "https://jeep-zero-seven.netlify.app/",
  workspace: "https://isometric-workspace.netlify.app/",
  weather_1: "https://lowpoly-weather.vercel.app/",
  weather_2: "https://lowpoly-weather.vercel.app/",
  weather_3: "https://lowpoly-weather.vercel.app/",
  weather_4: "https://lowpoly-weather.vercel.app/",
  weather_5: "https://lowpoly-weather.vercel.app/",
  weather_6: "https://lowpoly-weather.vercel.app/",
  strawberry_milk: "https://www.instagram.com/reel/CoQ-cLku1Jq/",
  booklover: "https://books-love.netlify.app/",
  books_1: "https://books-quotes.vercel.app/",
  books_2: "https://books-quotes.vercel.app/",
  books_3: "https://books-quotes.vercel.app/",
  books_4: "https://books-quotes.vercel.app/",
  coffee_shop: "https://isometric-coffee-shop.netlify.app/",
  sunset: "https://www.instagram.com/reel/CnqvR5UIAvF/",
  mars: "https://www.instagram.com/reel/CqCq1T0M767/",
  transition: "https://www.instagram.com/reel/ColXm1ONK8e/",
  book_1: "https://www.instagram.com/reel/CnKee-HI0cZ/",
  book_2: "https://www.instagram.com/reel/CnKee-HI0cZ/",
  book_3: "https://www.instagram.com/reel/CnKee-HI0cZ/",
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
  const { width: w } = useThree((state) => state.viewport);

  return (
    <Center
      position={[w * 3, -0.3, -2]}
      scale={w / 8}
      rotation={[-Math.PI / 10, 0.002, 0.011]}
    >
      <>
        <primitive object={nodes.frame} />
        <ProjectLink geometry={nodes.car.geometry} label="car" />
        <ProjectLink geometry={nodes.mars.geometry} label="mars" />
        <ProjectLink geometry={nodes.workaholic.geometry} label="workaholic" />
        <ProjectLink geometry={nodes.transition.geometry} label="transition" />
        <ProjectLink geometry={nodes.sunset.geometry} label="sunset" />
        <ProjectLink
          geometry={nodes.coffee_shop.geometry}
          label="coffee_shop"
        />
        <ProjectLink geometry={nodes.sweet_1.geometry} label="sweet_1" />
        <ProjectLink geometry={nodes.sweet_2.geometry} label="sweet_2" />
        <ProjectLink
          geometry={nodes.window_view.geometry}
          label="window_view"
        />
        <ProjectLink geometry={nodes.workspace.geometry} label="workspace" />
        <ProjectLink geometry={nodes.booklover.geometry} label="booklover" />
        <ProjectLink
          geometry={nodes.strawberry_milk.geometry}
          label="strawberry_milk"
        />
        <ProjectLink geometry={nodes.books_1.geometry} label="books_1" />
        <ProjectLink geometry={nodes.books_2.geometry} label="books_2" />
        <ProjectLink geometry={nodes.books_3.geometry} label="books_3" />
        <ProjectLink geometry={nodes.books_4.geometry} label="books_4" />
        <ProjectLink geometry={nodes.book_1.geometry} label="book_1" />
        <ProjectLink geometry={nodes.book_2.geometry} label="book_2" />
        <ProjectLink geometry={nodes.book_3.geometry} label="book_3" />
        <ProjectLink geometry={nodes.window_1.geometry} label="window_1" />
        <ProjectLink geometry={nodes.window_2.geometry} label="window_2" />
        <ProjectLink geometry={nodes.window_3.geometry} label="window_3" />
        <ProjectLink geometry={nodes.window_4.geometry} label="window_4" />
        <ProjectLink geometry={nodes.weather_1.geometry} label="weather_1" />
        <ProjectLink geometry={nodes.weather_2.geometry} label="weather_2" />
        <ProjectLink geometry={nodes.weather_3.geometry} label="weather_3" />
        <ProjectLink geometry={nodes.weather_4.geometry} label="weather_4" />
        <ProjectLink geometry={nodes.weather_5.geometry} label="weather_5" />
        <ProjectLink geometry={nodes.weather_6.geometry} label="weather_6" />
      </>
    </Center>
  );
};

useGLTF.preload("./Models/gallery.glb");
