import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

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
