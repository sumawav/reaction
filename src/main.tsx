import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// @ts-expect-error
ReactDOM.unstable_createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
