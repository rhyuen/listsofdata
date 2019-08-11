import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import { RootErrorBoundary } from "./RootErrorBoundary";
import { App } from "./App";

console.log("key status");
console.log(process.env.sentry_key !== undefined);

Sentry.init({ dsn: process.env.sentry_key });

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
