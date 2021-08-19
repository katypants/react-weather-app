import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer className="footer">
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

export default App;
