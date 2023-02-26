import { useGLTF, Center, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const LinkMapper = {
  be: "https://www.behance.net/vinguyen100",
  email: "mailto:vinguyen1172000@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100010227366087",
  github: "https://github.com/ViNguyen3747",
  insta: "https://www.instagram.com/v_nguyen_711/",
  linkedin: "https://www.linkedin.com/in/thi-kieu-vi-nguyen-0894a919a/",
};
function SocialMediaLink({ obj, label, w, h }) {
  const handleLink = () => {
    window.open(LinkMapper[label]);
  };
  return (
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
        scale={[w / 4, w / 4, w / 4]}
        onClick={(event) => {
          handleLink();
          event.stopPropagation();
        }}
      />
    </group>
  );
}
export default () => {
  const { nodes } = useGLTF("./Models/socialmedia-optimize.glb");

  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Center position={[w * 4, -2, 0]}>
      <Float rotationIntensity={0.15}>
        <primitive object={nodes.scbase} scale={[w / 4, w / 4, w / 4]} />
        <SocialMediaLink obj={nodes.be} label={"be"} w={w} h={h} />
        <SocialMediaLink obj={nodes.email} label={"email"} w={w} h={h} />
        <SocialMediaLink obj={nodes.facebook} label={"facebook"} w={w} h={h} />
        <SocialMediaLink obj={nodes.github} label={"github"} w={w} h={h} />
        <SocialMediaLink obj={nodes.insta} label={"insta"} w={w} h={h} />
        <SocialMediaLink obj={nodes.linkdin} label={"linkedin"} w={w} h={h} />
      </Float>
    </Center>
  );
};
