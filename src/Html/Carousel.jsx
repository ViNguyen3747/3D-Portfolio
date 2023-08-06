import { Home, Office, Project, Kitchen, Social } from "./Icons";

export default () => {
  const handleClick = (destination) => {
    const className = document.getElementsByClassName(destination);
    if (className) {
      className[0].scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };
  return (
    <div id="carousel">
      <div onClick={() => handleClick("home")}>
        <Home />
      </div>
      <div onClick={() => handleClick("workspace")}>
        <Office />
      </div>
      <div onClick={() => handleClick("project")}>
        <Project />
      </div>
      <div onClick={() => handleClick("kitchen")}>
        <Kitchen />
      </div>
      <div onClick={() => handleClick("social")}>
        <Social />
      </div>
    </div>
  );
};
