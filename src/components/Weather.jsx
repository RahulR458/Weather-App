import React from 'react'
import './Weather.css'

export default function Weather() {
  return (
    <>
      <div  className="weather">
        <div  className="weather-container">
          <div>
            <form action="" className='weather__search'>
            <span className="fa-solid fa-location-dot"></span>
              <input type="text" className="search-name" />
            </form>
          </div>
          <div className="weather__info">
            <div className='text-weather-info'>
              <h1>23 &deg;C,</h1> 
              Mostly Cloudy
            </div>
          </div>
        </div>
        <div  className="weather-icons">
          <div className='climate-box-one'>
            <div className='text-climate '><i className="fa-solid fa-clock"></i><h2>HOURLY FORECAST</h2></div>
            <div className='climate-group-one'>
              <div className='climate'><h5>Now</h5><h3>28 &deg;</h3><i class="fa-solid fa-cloud"></i></div>
              <div className='climate'></div>
            </div>
          </div>
          <div className='climate-box-two'>
            <div className='text-climate'><i class="fa-solid fa-calendar-week"></i><h2>7 DAYS FORECAST</h2></div>
            <div className='climate-group-two'>
              <div className='climate'><h5>Now</h5><h6>09/05</h6><h3>28 &deg;</h3><i class="fa-solid fa-cloud"></i></div>
              <div className='climate'></div>
            </div>
          </div>
          <div className='weather-box-container'>
            <div className='text-highlights'><i class="fa-solid fa-calendar-day"></i><h1>Today's Highlights</h1></div>
            <div className='weather-group'>
              <div className='weather-box'><i class="fa-solid fa-temperature-three-quarters"></i>FEELS LIKE</div>
              <div className='weather-box'><i class="fa-solid fa-snowflake"></i>PRECIPITATION</div>
              <div className='weather-box'><i class="fa-solid fa-eye-slash"></i>VISIBILIYU</div>  
            </div>
            <div className='weather-group'>
              <div className='weather-box'><i class="fa-solid fa-droplet"></i>HUMIDITY</div>
              <div className='weather-box'><i class="fa-solid fa-temperature-arrow-down"></i>UV INDEX</div>
              <div className='weather-box'><i class="fa-solid fa-wind"></i>WIND</div>
            </div>
          </div> 
        </div>
      </div>
      
    </>
  )
}
