import React from "react";
import { render } from "react-dom";
import GlobalState from "./GlobalState";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
  </BrowserRouter>,
  document.getElementById("root")
);
