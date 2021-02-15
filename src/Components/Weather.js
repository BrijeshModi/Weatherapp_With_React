
import React from "react"

const Weather = props => (
 <div className="weatherClass">
 <h2>LOCAL WEATHER</h2>
<br/>

 <p> <strong> DateTime : </strong>
 <span>{props.weatherData.datetime}</span></p>
 <p> <strong> City : </strong>
 <span>{props.weatherData.city_name},{props.weatherData.country_code}</span></p>
 <p> <strong> Temperature : </strong>
 <span>{props.weatherData.temp}</span></p>
 <p> <strong> Wind Speed : </strong>
 <span>{props.weatherData.wind_spd}</span></p>
 <p> <strong> Sunrise : </strong>
 <span>{props.weatherData.sunrise}</span></p>
 <p> <strong> Sunset : </strong>
 <span>{props.weatherData.sunset}</span></p>
 </div>

);

export default Weather;
