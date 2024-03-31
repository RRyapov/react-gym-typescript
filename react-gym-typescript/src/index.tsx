import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Reset } from "styled-reset";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <Reset />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </React.StrictMode>
);
