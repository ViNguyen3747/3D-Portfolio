import useCard from "../../Stores/useCard";

export default ({ isPrimitive = false, label, object, geometry, material }) => {
  const setCard = useCard((state) => state.setCard);
  return isPrimitive ? (
    <primitive
      object={object}
      onClick={(event) => {
        setCard(label);
        event.stopPropagation();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        document.body.style.cursor = "default";
      }}
    />
  ) : (
    <mesh
      geometry={geometry}
      material={material}
      onClick={(event) => {
        setCard(label);
        event.stopPropagation();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        document.body.style.cursor = "default";
      }}
    />
  );
};
