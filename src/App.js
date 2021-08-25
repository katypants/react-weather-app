import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <a
            href="https://github.com/katypants/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          coded by Kate Dowd
        </footer>
      </div>
    </div>
  );
}
