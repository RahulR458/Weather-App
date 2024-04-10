import React from 'react'
import './Weather.css'

export default function Weather({weatherSearch, weather, weatherLocation, weatherCurrentDate, weatherCurrentTime, search, searchSubmit}) {

  return (
    <>
      <div  className="weather">
        <div  className="weather-container">
          <div>
            <form action="" onSubmit={searchSubmit} className='weather__search'>
            <span className="fa-solid fa-location-dot"></span>
              <input type="text" className="search-name" onChange={search} value={weatherSearch}/>
            </form>
          </div>
          <div className="weather__info">
            <div className='weather-icon-png'><img src="/public/weather-icon-png.webp" alt="" /></div>
            <div className='text-weather-info'>
              <h1>{weather.temp_c} &deg;C,</h1> 
              Mostly Cloudy
              <h1>{weather.condition?.text}</h1>
              <img src={weather.condition?.icon} alt="" />
            </div>
          </div>
        </div>
        <div  className="weather-icons">
          <div className='climate-box-one'>
            <div className='text-climate '><i className="fa-solid fa-clock"></i><h2>HOURLY FORECAST</h2></div>
            <div className='climate-group-one'>
              <div className='climate'><h5>Now</h5><h3>{weather.temp_c} &deg;</h3><i className="fa-solid fa-cloud"></i></div>
              {weatherCurrentTime.map((data, index)=>(
                <div className='climate' key={index}><h5>date</h5><h3>{data.temp_c} &deg;</h3><i className="fa-solid fa-cloud"></i></div>
              ))}
            </div>
          </div>
          <div className='climate-box-two'>
            <div className='text-climate'><i className="fa-solid fa-calendar-week"></i><h2>7 DAYS FORECAST</h2></div>
            <div className='climate-group-two'>
              <div className='climate'><h5>Now</h5><h6>09/05</h6><h3>28 &deg;</h3><i className="fa-solid fa-cloud"></i></div>
              <div className='climate'></div>
            </div>
          </div>
          <div className='weather-box-container'>
            <div className='text-highlights'><i className="fa-solid fa-calendar-day"></i><h1>Today's Highlights</h1></div>
            <div className='weather-group'>
              <div className='weather-box'><i className="fa-solid fa-temperature-three-quarters"></i>FEELS LIKE <br />{weather.feelslike_c}&deg;</div>
              <div className='weather-box'><i className="fa-solid fa-snowflake"></i>PRECIPITATION <br />{weather.precip_in}''</div>
              <div className='weather-box'><i className="fa-solid fa-eye-slash"></i>VISIBILIYU <br />{weather.vis_miles}mi</div>  
            </div>
            <div className='weather-group'>
              <div className='weather-box'><i className="fa-solid fa-droplet"></i>HUMIDITY <br />{weather.humidity}%</div>
              <div className='weather-box'><i className="fa-solid fa-temperature-arrow-down"></i>UV INDEX <br />{weather.uv}&deg;</div>
              <div className='weather-box'><i className="fa-solid fa-wind"></i>WIND <br />{weather.wind_mph}MPH</div>
            </div>
          </div> 
        </div>
      </div>
      
    </>
  )
}
