import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Overlay, Guide, Subheaders } from "./Html";
import { ScrollControls, Scroll, Loader } from "@react-three/drei";
import {
  Avatar,
  Baking,
  SocialMedia,
  Header,
  Workspace,
  Gallery,
} from "./Models";
import Card from "./Models/Helper/Card";
const containerStyles = {
  background: `linear-gradient(
        180deg,
        hsl(86deg 41% 71%) 0%,
        hsl(75deg 40% 71%) 21%,
        hsl(66deg 38% 71%) 30%,
        hsl(57deg 39% 73%) 39%,
        hsl(49deg 44% 75%) 46%,
        hsl(43deg 48% 77%) 54%,
        hsl(38deg 52% 79%) 61%,
        hsl(34deg 54% 80%) 69%,
        hsl(30deg 54% 82%) 79%,
        hsl(26deg 52% 84%) 100%
      )`,
};
const barStyles = {
  height: "10px",
  borderRadius: "7px",
  background: " rgb(255, 255, 255)",
  transition: "0.5s",
};

const innerStyles = {
  background: "rgba(236, 236, 238, 0.253)",
  borderRadius: "7px",
  height: "10px",
  width: "200px",
};

const dataStyles = {
  fontSize: "1rem",
  fontFamily: '"Indie Flower", cursive',
};

function App() {
  return (
    <>
      <Overlay />
      <Guide />
      <Canvas camera={{ position: [1, 5, 30], fov: 20 }}>
        <ambientLight intensity={0.8} />
        <spotLight
          angle={0.5}
          color="#ffffff"
          penumbra={1}
          position={[10, 10, 20]}
        />
        <ScrollControls horizontal damping={0.5} pages={5}>
          <Scroll>
            <Suspense fallback={null}>
              <Header />
            </Suspense>
          </Scroll>
          <Scroll html>
            <Subheaders />
          </Scroll>
          <Scroll>
            <Suspense fallback={null}>
              <Avatar />
            </Suspense>
          </Scroll>
          <Scroll>
            <Suspense fallback={null}>
              <Workspace />
            </Suspense>
          </Scroll>
          <Scroll>
            <Suspense fallback={null}>
              <Baking />
            </Suspense>
          </Scroll>
          <Scroll>
            <Suspense fallback={null}>
              <Gallery />
            </Suspense>
          </Scroll>
          <Scroll>
            <Suspense fallback={null}>
              <SocialMedia />
            </Suspense>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Loader
        containerStyles={containerStyles}
        innerStyles={innerStyles}
        barStyles={barStyles}
        dataStyles={dataStyles}
      />
      <Card />
    </>
  );
}

export default App;
