import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState(" ");
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const key = "1bcd55fbf749399391c6cf82fe11d4d3";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${URL}?q=${city}&appid=${key}&units=metric`);

      if (!response.ok) {
        alert("City not found! Please enter a valid city."); // Alert for invalid city
        return null; // Return null to avoid accessing invalid response data
      }

      let jsonResponse = await response.json();

      // Now that we know the response is valid, we can safely access the data
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like, // Matches WeatherApp state
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      alert("An error occurred while fetching weather information."); // Catch network errors
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity(" ");
    let newInfo = await getWeatherInfo();

    if (newInfo) {
      updateInfo(newInfo); // Update the weather info only if valid data is retrieved
    }
  };

  return (
    <>
      <h3>Search for Weather City</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          required
          onChange={handleChange}
        />
        <br></br> <br></br>
        <Button variant="contained" size="large" type="submit">
          Search
        </Button>
      </form>
    </>
  );
}

export default SearchBox;
