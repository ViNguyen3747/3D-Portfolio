import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ProjectBoard, Guide, Subheaders, Carousel, Welcome } from "./Html";
import { ScrollControls, Scroll, Loader } from "@react-three/drei";
import {
  Avatar,
  Baking,
  SocialMedia,
  Header,
  Workspace,
  CarouselDestinations,
} from "./Models";
import Card from "./Models/Helper/Card";
import { bg1, bg2, bg3, bg4, bg5 } from "./-lib/backgrounds";
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
  fontFamily: '"Chakra Petch", sans-serif',
};

const containerStyles = {
  background: bg3,
};

function App() {
  const [bg, setBg] = useState(bg3);

  return (
    <>
      <Welcome />
      <Carousel />
      <Guide />
      <div id="background">
        <div className="main" id="bg1" onClick={() => setBg(bg1)} />
        <div className="main" id="bg2" onClick={() => setBg(bg2)} />
        <div className="main" id="bg3" onClick={() => setBg(bg3)} />
        <div className="main" id="bg4" onClick={() => setBg(bg4)} />
        <div className="main" id="bg5" onClick={() => setBg(bg5)} />
      </div>
      <Canvas
        camera={{ position: [1, 5, 30], fov: 20 }}
        style={{ background: bg }}
      >
        <CarouselDestinations />
        <ambientLight intensity={0.8} />
        <spotLight
          angle={0.5}
          color="#ffffff"
          penumbra={1}
          position={[10, 10, 20]}
        />
        <ScrollControls horizontal damping={0.5} pages={5}>
          <Scroll html>
            <Subheaders />
            <ProjectBoard />
          </Scroll>
          <Scroll>
            <Suspense fallback={null}>
              <Header />
            </Suspense>
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
