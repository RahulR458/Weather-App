import React from 'react'
import './Weather.css'

export default function Weather() {
  return (
    <>
      <div  className="weather">
        <input type="text" id="search-name"/>
        <div  className="weather-container">
        Weather
        <div id="temperature">temperature</div>
        <div id='presipitation'>presipitation</div>
        <div id='humidity'>Humidity</div>
        <div id='visibility'>visibility</div>
        </div>
        <div className=''></div>
      </div>
    </>
  )
}
