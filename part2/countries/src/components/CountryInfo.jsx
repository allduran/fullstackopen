import { useState, useEffect } from "react";
import Languages from "./Languages";
import weatherService from "../services/weather";

const CountryInfo = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (!country.capital || country.capital.length === 0) return;

        weatherService
            .getWeatherByCity(country.capital[0])
            .then((weatherData) => setWeather(weatherData))
            .catch((error) => console.error("Error fetching weather data:", error));
    }, [country.capital]);

    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital.join(", ")}</p>
        <p>Area: {country.area}</p>
        <Languages country={country} />
        <img src={country.flags.png} className="flag" alt={`Flag of ${country.name.common}`} />

        <h2>Weather in {country.capital[0]}</h2>
        {weather ? (
          <div>
            <p>Temperature: {weather.main.temp}°C</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} className="weather" alt="Weather icon" />
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </div>
    );
};

export default CountryInfo;