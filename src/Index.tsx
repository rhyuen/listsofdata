import * as React from "react";
import * as ReactDOM from "react-dom";
import { RootErrorBoundary } from "./RootErrorBoundary";
import { App } from "./App";

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>,
  document.getElementById("app")
);
