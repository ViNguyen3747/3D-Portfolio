import { useState } from "react";

export default () => {
  const [step, setStep] = useState(0);
  const handleNextStep = (next) => {
    let dimContainer = document.getElementById("dim-container");
    let welcomeContainer = document.getElementById("welcome");

    if (next) {
      setStep((prev) => prev + 1);
      if (step === 0) {
        dimContainer.style.height = "62px";
        dimContainer.style.width = "62px";
      }
      if (step === 1) {
        dimContainer.style.top = "92vh";
        dimContainer.style.height = "70px";
        dimContainer.style.width = "100vw";
      } else if (step === 2) {
        dimContainer.style.right = "0";
        dimContainer.style.top = "0";
        dimContainer.style.width = "130px";
        dimContainer.style.height = "60px";
        dimContainer.style.marginRight = "5.5px";
      } else if (step === 3) {
        dimContainer.style.width = "0";
      } else if (step === 4) {
        let carousel = document.getElementById("carousel");
        let backgroundSwitcher = document.getElementById("background");
        carousel.style.pointerEvents = "visible";
        backgroundSwitcher.style.pointerEvents = "visible";
        welcomeContainer.style.opacity = "0";
        welcomeContainer.style.visibility = "hidden";
      }
    }
  };

  const message = [
    "Before you get started, let me give you a quick go-through",
    "The theme is based on Hidden object games. You can find some fun facts about me by clicking on these hidden items.",
    "You can either scroll right or use this carousel to go to each section of the web page",
    `I love colors! I added this background-color switcher just simply because I couldn't decide which one to use ^^`,
    "That's it! Hope you enjoy the experience!!!",
  ];
  return (
    <>
      {step < 5 && <div id="dim-container" />}
      <div id="welcome">
        <div>
          <p> {message[step]}</p>
          <div id="btn">
            <button onClick={() => handleNextStep(true)}>
              <div>{">"}</div>
              <div>{">"}</div>
              <div>{">"}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
