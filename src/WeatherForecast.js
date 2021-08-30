import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Tue</div>
          <WeatherIcon code="01d" size={36} />
          <div className="Forecast-temps">
            <span className="Forecast-max-temp">80°</span>
            <span className="Forecast-min-temp">70°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
