import { Suspense, useState } from "react";
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
const bg2 = `linear-gradient(
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
    )`;
const bg1 = `linear-gradient(
      180deg,
      hsl(216deg 27% 61%) 0%,
      hsl(208deg 33% 62%) 21%,
      hsl(201deg 38% 63%) 30%,
      hsl(195deg 41% 65%) 39%,
      hsl(189deg 41% 66%) 46%,
      hsl(182deg 39% 67%) 54%,
      hsl(174deg 41% 71%) 61%,
      hsl(163deg 44% 75%) 69%,
      hsl(149deg 47% 80%) 79%,
      hsl(128deg 49% 85%) 100%
    )`;

const bg5 = `linear-gradient(
  180deg,
  hsl(81deg 27% 55%) 0%,
  hsl(81deg 27% 60%) 11%,
  hsl(80deg 27% 65%) 22%,
  hsl(80deg 27% 70%) 33%,
  hsl(80deg 27% 74%) 44%,
  hsl(79deg 27% 79%) 56%,
  hsl(79deg 28% 85%) 67%,
  hsl(79deg 28% 90%) 78%,
  hsl(78deg 28% 95%) 89%,
  hsl(0deg 0% 100%) 100%
    
    )`;

const bg3 = `linear-gradient(
      180deg,
      #7289ac 0%,
      hsl(234deg 21% 62%) 9%,
      hsl(263deg 19% 65%) 22%,
      hsl(296deg 17% 67%) 40%,
      hsl(325deg 25% 71%) 58%,
      hsl(342deg 35% 76%) 72%,
      hsl(356deg 44% 81%) 82%,
      hsl(9deg 55% 83%) 90%,
      hsl(18deg 65% 85%) 96%,
      #f6dbc6 100%
    )`;

const bg4 = `linear-gradient(
   180deg,
      #62799d 0%,
      hsl(218deg 23% 56%) 24%,
      hsl(219deg 23% 61%) 38%,
      hsl(219deg 23% 67%) 49%,
      hsl(220deg 23% 72%) 59%,
      hsl(220deg 23% 77%) 68%,
      hsl(221deg 23% 83%) 76%,
      hsl(221deg 23% 89%) 85%,
      hsl(221deg 23% 94%) 92%,
      hsl(0deg 0% 100%) 100%
)`;

const containerStyles = {
  background: bg5,
};
function App() {
  const [bg, setBg] = useState(bg5);
  return (
    <>
      <Overlay />
      <Guide />
      <div class="background">
        <div class="main" id="bg1" onClick={() => setBg(bg1)} />
        <div class="main" id="bg2" onClick={() => setBg(bg2)} />
        <div class="main" id="bg3" onClick={() => setBg(bg3)} />
        <div class="main" id="bg4" onClick={() => setBg(bg4)} />
        <div class="main" id="bg5" onClick={() => setBg(bg5)} />
      </div>
      <Canvas
        camera={{ position: [1, 5, 30], fov: 20 }}
        style={{ background: bg }}
      >
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
