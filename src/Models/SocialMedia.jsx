import { useGLTF, Center, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const LinkMapper = {
  be: "https://www.behance.net/vinguyen100",
  email: "mailto:vinguyen1172000@gmail.com",
  github: "https://github.com/ViNguyen3747",
  insta: "https://www.instagram.com/v_nguyen_711/",
  linkedin: "https://www.linkedin.com/in/thi-kieu-vi-nguyen-0894a919a/",
  twitter: "https://twitter.com/ThiKieuViNguye1",
};
function SocialMediaLink({ obj, label, w, h }) {
  const handleLink = () => {
    window.open(LinkMapper[label]);
  };
  return (
    <Float rotationIntensity={0.7}>
      <group
        onPointerOver={(event) => {
          document.body.style.cursor = "pointer";
          event.stopPropagation();
        }}
        onPointerOut={(event) => {
          document.body.style.cursor = "default";
          event.stopPropagation();
        }}
      >
        <primitive
          object={obj}
          scale={[w / 5, w / 5, w / 5]}
          onClick={(event) => {
            handleLink();
            event.stopPropagation();
          }}
        />
      </group>
    </Float>
  );
}
export default () => {
  const { nodes } = useGLTF("./Models/socialmedia.glb");

  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Center position={[w * 4, 0, 0]}>
      <SocialMediaLink obj={nodes.be} label={"be"} w={w} h={h} />
      <SocialMediaLink obj={nodes.email} label={"email"} w={w} h={h} />
      <SocialMediaLink obj={nodes.github} label={"github"} w={w} h={h} />
      <SocialMediaLink obj={nodes.insta} label={"insta"} w={w} h={h} />
      <SocialMediaLink obj={nodes.linkdin} label={"linkedin"} w={w} h={h} />
      <SocialMediaLink obj={nodes.twitter} label={"twitter"} w={w} h={h} />
    </Center>
  );
};

useGLTF.preload("./Models/socialmedia.glb");
