import { useState } from "react";
import { Leaf, Flower1, Flower2, Flower3, Flower4 } from "./Icons";

const MESSAGES = [
  "Before you get started, let me give you a quick go-through.",
  "Hidden objects are scattered in this portfolio. Find these items to discover interesting facts.",
  "You can either scroll down or use this carousel to go to each section of the web page.",
  `I love colors! I added this background-color switcher just simply because I couldn't decide which one to use ^^`,
  "That's it! Hope you enjoy the experience!!!",
  "That's it! Hope you enjoy the experience!!!",
];

export default () => {
  const [step, setStep] = useState(0);
  const handleNextStep = (next) => {
    let dimContainer = document.getElementById("dim-container");
    let welcomeContainer = document.getElementById("welcome");

    if (next) {
      setStep((prev) => prev + 1);
      switch (step) {
        case 0:
          dimContainer.style.height = "62px";
          dimContainer.style.width = "62px";
          break;
        case 1:
          dimContainer.style.top = "92vh";
          dimContainer.style.height = "100px";
          dimContainer.style.marginTop = "0";
          dimContainer.style.width = "100vw";
          break;
        case 2:
          dimContainer.style.top = 0;
          dimContainer.style.width = "130px";
          dimContainer.style.height = "60px";
          dimContainer.style.marginRight = "5.5px";
          dimContainer.style.left = "unset";
          dimContainer.style.right = 0;
          break;
        case 3:
          dimContainer.style.width = "0";
          break;
        case 4:
          let carousel = document.getElementById("carousel");
          let backgroundSwitcher = document.getElementById("background");
          carousel.style.pointerEvents = "visible";
          backgroundSwitcher.style.pointerEvents = "visible";
          welcomeContainer.style.opacity = 0;
          welcomeContainer.style.visibility = "hidden";
          welcomeContainer.style.top = 0;
          dimContainer.style.opacity = 0;
          dimContainer.style.visibility = "hidden";
          break;
        default:
      }
    } else {
      setStep((prev) => prev - 1);
      switch (step) {
        case 1:
          dimContainer.style.height = "0";
          dimContainer.style.width = "0";
          break;
        case 2:
          dimContainer.style.height = "62px";
          dimContainer.style.width = "62px";
          dimContainer.style.top = "2vh";
          dimContainer.style.left = "0";
          break;
        case 3:
          dimContainer.style.top = "92vh";
          dimContainer.style.height = "100px";
          dimContainer.style.marginTop = "0";
          dimContainer.style.width = "100vw";
          dimContainer.style.right = "0";
          break;
        case 4:
          dimContainer.style.top = 0;
          dimContainer.style.width = "130px";
          dimContainer.style.height = "60px";
          dimContainer.style.marginRight = "5.5px";
          dimContainer.style.right = 0;
          break;
        default:
      }
    }
  };
  const handleSkip = () => {
    let dimContainer = document.getElementById("dim-container");
    let welcomeContainer = document.getElementById("welcome");
    let carousel = document.getElementById("carousel");
    let backgroundSwitcher = document.getElementById("background");
    carousel.style.pointerEvents = "visible";
    backgroundSwitcher.style.pointerEvents = "visible";
    welcomeContainer.style.opacity = 0;
    welcomeContainer.style.visibility = "hidden";
    welcomeContainer.style.top = 0;
    dimContainer.style.opacity = 0;
    dimContainer.style.visibility = "hidden";
  };
  return (
    <>
      {step < 5 && <div id="dim-container" />}

      <div id="welcome">
        <Leaf />
        <Flower1 />
        <Flower2 />
        <Flower3 />
        <Flower4 />
        <div>
          <p> {MESSAGES[step]}</p>
          <div id="btn">
            <button
              onClick={() => handleNextStep(false)}
              style={{
                opacity: step > 0 ? 1 : 0,
                pointerEvents: step > 0 ? "initial" : "none",
              }}
            >
              <div>{"<"}</div>
              <div>{"<"}</div>
              <div>{"<"}</div>
            </button>
            <button onClick={() => handleNextStep(true)}>
              <div>{">"}</div>
              <div>{">"}</div>
              <div>{">"}</div>
            </button>
          </div>
          <button id="skip" onClick={() => handleSkip()}>
            Skip
          </button>
        </div>
      </div>
    </>
  );
};
