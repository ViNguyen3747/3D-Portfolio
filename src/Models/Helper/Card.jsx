import useCard from "../../Stores/useCard";

export default function Card() {
  const message = useCard((state) => state.cardMessage);
  const isCardOpened = useCard((state) => state.isCardOpened);
  const closeCard = useCard((state) => state.closeCard);

  const handleClick = (event) => {
    if (event) event.preventDefault();
    const cardEl = document.querySelector(`#card`);
    const containerEl = cardEl?.parentElement;
    const clonedMenuEl = cardEl?.cloneNode(true);
    if (!clonedMenuEl) return;
    clonedMenuEl.classList.add("fade-out");
    clonedMenuEl.addEventListener("animationend", () => {
      containerEl?.removeChild(clonedMenuEl);
    });
    containerEl?.appendChild(clonedMenuEl);
    closeCard();
  };

  return (
    isCardOpened && (
      <div id="card" className="fade-in">
        <button onClick={handleClick}>Close</button>
        <p>{message}</p>
      </div>
    )
  );
}
