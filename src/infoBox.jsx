import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';

export default function InfoBox({ info }) { 
  // URLs for different weather conditions
  const HOT_URL = "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2VydHxlbnwwfHwwfHx8Mg%3D%3D";
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL = "https://images.unsplash.com/photo-1705077031869-51b60754302a?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Function to determine which image to show based on temperature and weather
  const getWeatherImage = () => {
    if (info.weather.includes('rain')) {
      return RAINY_URL;
    } else if (info.temp > 30) { // Hot weather condition
      return HOT_URL;
    } else if (info.temp < 15) { // Cold weather condition
      return COLD_URL;
    } else {
      // Default image if conditions don't match specific ones
      return "https://images.unsplash.com/photo-1643822018847-0c04896e35e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
  };

  return (
    <div className="InfoBox">
      <div id='card'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getWeatherImage()} // Dynamic image based on weather
            title="Weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {/* Display city */}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> feels like {info.feels_like}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
