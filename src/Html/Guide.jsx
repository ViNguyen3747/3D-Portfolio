const items = [
  "code",
  "books",
  "coffee",
  "computer",
  "dog",
  "headphones",
  "name",
  "resume",
  "loaf",
  "omlette",
  "rollingpin",
  "piping",
];

export default () => {
  return (
    <>
      <div id="item-list">
        {items.map((item) => (
          <img
            key={item}
            src={`/Guide/${item}.webp`}
            alt={item}
            width="70"
            height="70"
          />
        ))}
      </div>
    </>
  );
};
