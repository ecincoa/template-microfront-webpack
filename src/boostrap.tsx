import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import LoginLayout from "./layouts/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
      <h2>Hello world from Webpack 5</h2>
      <LoginLayout />
    </div>
  </React.StrictMode>
);
