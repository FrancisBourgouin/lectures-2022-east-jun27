import logo from "./logo.svg";
import "./App.css";
import CityForm from "./components/CityForm";
import { useState } from "react";
import CityList from "./components/CityList";
import CurrentWeather from "./components/CurrentWeather";
import axios from "axios";
import { useEffect } from "react";

// 09fd719b4b698ec0260e424f83378e3d
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function App() {
  const [currentCity, setCurrentCity] = useState("");
  const [cityHistory, setCityHistory] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

      return axios.get(url).then((res) => {
        const weatherObj = {
          temperature: Math.round(res.data.main.temp - 273.15),
          conditions: res.data.weather[0].description,
        };
        setWeatherData(weatherObj);
        setCurrentCity(res.data.name);
      });
    });
  }, []);

  const fetchWeatherAPI = (cityName) => {
    const APIKEY = "09fd719b4b698ec0260e424f83378e3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

    // return axios.get(url).then((res) => res.data);
    return axios.get(url).then((res) => {
      const weatherObj = {
        temperature: Math.round(res.data.main.temp - 273.15),
        conditions: res.data.weather[0].description,
      };
      return weatherObj;
    });
  };

  const weatherSubmit = (formData) => {
    const { city } = formData;

    console.log("submitted!");

    fetchWeatherAPI(city)
      .then((data) => {
        setCurrentCity(city);
        if (!cityHistory.includes(city)) {
          setCityHistory([...cityHistory, city]);
        }
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
        setCurrentCity("");
        setWeatherData(null);
      });
  };

  const fetchWeather = (city) => {
    fetchWeatherAPI(city)
      .then((data) => {
        setCurrentCity(city);
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(err);
        setCurrentCity("");
        setWeatherData(null);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Super weather YEAH! ⛅🌪️🌩️</h1>
      </header>
      <CityForm onSubmit={weatherSubmit} />
      <CityList cities={cityHistory} fetchWeather={fetchWeather} />
      {currentCity && <CurrentWeather city={currentCity} {...weatherData} />}
    </div>
  );
}

export default App;
