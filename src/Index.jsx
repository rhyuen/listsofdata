import React from "react";
import ReactDOM from "react-dom";
import RootErrorBoundary from "./RootErrorBoundary.jsx";
import App from "./App.jsx";

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
