import SearchBox from "./SearchBox";
import InfoBox from "./infoBox"; 
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App </h2>
      <SearchBox updateInfo={updateInfo} />
      <br></br>
      <InfoBox info={weatherInfo} /> {/* Passing weatherInfo as prop */}
    </div>
  );
}
