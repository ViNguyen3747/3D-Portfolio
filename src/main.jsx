import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Overlay, Guide } from "./Html";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Overlay />
    <Guide />
  </React.StrictMode>
);
