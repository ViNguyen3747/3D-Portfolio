import useCard from "../Stores/useCard";
export default () => {
  const foundItems = useCard((state) => state.foundItems);

  return (
    <>
      <div id="item-list">
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("code") ? "code_dark" : "code"
            }.webp`}
            alt="code"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("book") ? "book_dark" : "book"
            }.webp`}
            alt="book"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("coffee") ? "coffee_dark" : "coffee"
            }.webp`}
            alt="coffee"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("computer") ? "computer_dark" : "computer"
            }.webp`}
            alt="computer"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("dog") ? "dog_dark" : "dog"
            }.webp`}
            alt="dog"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("headphone")
                ? "headphone_dark"
                : "headphone"
            }.webp`}
            alt="headphone"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("name") ? "name_dark" : "name"
            }.webp`}
            alt="code"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("resume") ? "resume_dark" : "resume"
            }.webp`}
            alt="resume"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("loaf") ? "loaf_dark" : "loaf"
            }.webp`}
            alt="loaf"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("omelette") ? "omelette_dark" : "omelette"
            }.webp`}
            alt="omelette"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("rolling") ? "rolling_dark" : "rolling"
            }.webp`}
            alt="rolling"
            width="70"
            height="70"
          />
        </div>
        <div className="item">
          <img
            src={`/Guide/${
              !foundItems?.includes("piping") ? "piping_dark" : "piping"
            }.webp`}
            alt="piping"
            width="70"
            height="70"
          />
        </div>
      </div>
    </>
  );
};
