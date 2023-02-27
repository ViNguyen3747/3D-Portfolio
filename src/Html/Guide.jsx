import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={`toggle-button  ${isOpen && "toggle-active"}`}
        onClick={(e) => handleToggle(e)}
      >
        <img src="/avatar.webp" alt="toggle guide button" />
      </div>
      <div
        className={`navigation-guide ${isOpen && "is-active"}`}
        onClick={(e) => handleToggle(e)}
      >
        Clickable Items Helper
        <div className="item-list">
          {items.map((item) => (
            <img key={item} src={`/Guide/${item}.webp`} alt={item} />
          ))}
        </div>
      </div>
    </>
  );
};
