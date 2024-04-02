import React from 'react'
import './Weather.css'

export default function Weather() {
  return (
    <>
      <div  className="weather">
        <div  className="weather-container">
        <form action="" className='weather__search'>
          <input type="text" className="search-name"/>
        </form>
          <div  className="weather__info">
            <div>
              <h1>23 &deg;C,</h1> 
              Mostly Cloudy
            </div>
          </div>
        </div>
        <div  className="weather-icons">
          <div className='climate-group-one'>
            <div className='climate'>temperature</div>
            <div className='climate'>presipitation</div>
            <div className='climate'>hhh</div>
          </div>
          <div className='climate-group-two'>
            <div className='climate'>Humidity</div>
            <div className='climate'>visibility</div>
            <div className='climate'>hhshs</div>
          </div>
          <div className='weather-box'></div> 
        </div>
      </div>
      
    </>
  )
}
