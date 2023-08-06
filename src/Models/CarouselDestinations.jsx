import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default () => {
  const { width: w } = useThree((state) => state.viewport);
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
