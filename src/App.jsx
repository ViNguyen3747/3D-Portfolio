import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Overlay, Guide, Subheaders } from "./Html";
import { ScrollControls, Scroll, Loader, Html } from "@react-three/drei";
import {
  Avatar,
  Baking,
  SocialMedia,
  Header,
  Workspace,
  Gallery,
} from "./Models";
import Card from "./Models/Helper/Card";
import { Home, Office, Project, Kitchen, Social } from "./Models/Helper/Icons";
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

const Carousel = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);
  const homeRef = useRef();
  const workSpaceRef = useRef();
  const projectRef = useRef();
  const bakingRef = useRef();
  const socialMediaRef = useRef();

  useFrame(() => {
    homeRef.current.position.x = 0;
    workSpaceRef.current.position.x = w;
    projectRef.current.position.x = w * 1.91;
    bakingRef.current.position.x = w * 2.9;
    socialMediaRef.current.position.x = w * 4;
  });
  return (
    <>
      <mesh ref={homeRef}>
        <Html className="home" />
      </mesh>
      <mesh ref={workSpaceRef}>
        <Html className="workspace" />
      </mesh>
      <mesh ref={projectRef}>
        <Html className="project" />
      </mesh>
      <mesh ref={bakingRef}>
        <Html className="kitchen" />
      </mesh>
      <mesh ref={socialMediaRef}>
        <Html className="social" />
      </mesh>
    </>
  );
};
function App() {
  const [bg, setBg] = useState(bg3);

  const handleClick = (destination) => {
    const className = document.getElementsByClassName(destination);
    if (className) {
      className[0].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };
  return (
    <>
      <div id="carousel">
        <div onClick={() => handleClick("home")}>
          <Home />
        </div>
        <div onClick={() => handleClick("workspace")}>
          <Office />
        </div>
        <div onClick={() => handleClick("project")}>
          <Project />
        </div>
        <div onClick={() => handleClick("kitchen")}>
          <Kitchen />
        </div>
        <div onClick={() => handleClick("social")}>
          <Social />
        </div>
      </div>
      <Overlay />
      <Guide />
      <div className="background">
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
        <Carousel />
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
