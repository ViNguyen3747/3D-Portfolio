const items = [
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
      <div className="toggle-button" onClick={() => {}}>
        <img src="/avatar.svg" />
      </div>
      <div id="side-guide">
        <div className="item-list">
          {items.map((item) => (
            <img src={`/Guide/${item}.png`} alt={item} />
          ))}
        </div>
      </div>
    </>
  );
};
