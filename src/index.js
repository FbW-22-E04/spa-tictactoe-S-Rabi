import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Game from "./components/game/Game";
import ContextProvider from "./utils/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Game />
  </ContextProvider>
);
