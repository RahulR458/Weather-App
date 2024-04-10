import { useState } from 'react'
import Weather from './components/Weather'
import { useEffect } from 'react';
import axios from 'axios';


function App() {

  const [weatherSearch, setWeatherSearch] = useState("India");
  const [weather, setWeather] = useState({});
  const [weatherLocation, setWeatherLocation] = useState({});
  const [weatherCurrentDate, setWeatherCurrentDate] = useState("");
  const [weatherCurrentTime, setWeatherCurrentTime] = useState([]);

  const search = (event) => {
    setWeatherSearch(event.target.value);
  };

  const searchSubmit = async (event) => {
    event.preventDefault();
    const response = await axios(
        `http://api.weatherapi.com/v1/current.json?key=542e3558a43d4510b3e173051240104&q=${weatherSearch}&aqi=yes`
    );
    setWeather(response.data.current);
    setWeatherLocation(response.data.location);
  };

  const getweather = async () => {
    const response = await axios(
        `http://api.weatherapi.com/v1/current.json?key=542e3558a43d4510b3e173051240104&q=INDIA&aqi=yes`
    );

    let dateTimeString = response.data.current.last_updated;

    // Split the date and time
    let parts = dateTimeString.split(" ");
    let datePart = parts[0];
    let timePart = parts[1];
    let parts2 = timePart.split(":");
    let datePart2 = parts2[0];

    const responses = await axios(
        `http://api.weatherapi.com/v1/history.json?key=542e3558a43d4510b3e173051240104&q=INDIA&dt=${datePart}&aqi=yes`
    );

    let result = responses.data.forecast.forecastday[0].hour;
    let filterResult = result.filter((data, index) => index >= datePart2);
    let filterResultOg = filterResult.filter((data, index) => index < 5);
    console.log(filterResultOg);
    setWeatherCurrentTime(filterResultOg);

    setWeatherCurrentDate(response.data.current.last_updated);

    setWeather(response.data.current);
    setWeatherLocation(response.data.location);
  };

  useEffect(()=>{
    getweather()
  },[])

  return (
    <Weather
      weatherSearch={weatherSearch}
      weather={weather}
      weatherLocation={weatherLocation}
      weatherCurrentDate={weatherCurrentDate}
      weatherCurrentTime={weatherCurrentTime}
      search={search}
      searchSubmit={searchSubmit}
    />
  );
}

export default App
