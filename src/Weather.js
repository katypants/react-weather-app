import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Wednesday 3:30PM",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />{" "}
            </div>
          </div>
        </form>

        <h1>New York</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.windspeed} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2edf208e5aba6143c6cd01f713483495";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
