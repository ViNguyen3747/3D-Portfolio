import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Overlay, Guide, Subheaders } from "./Html";
import { ScrollControls, Scroll } from "@react-three/drei";
import {
  Avatar,
  Baking,
  SocialMedia,
  Header,
  Workspace,
  Gallery,
} from "./Models";
import Card from "./Models/Helper/Card";
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
      <Card />
    </>
  );
}

export default App;
