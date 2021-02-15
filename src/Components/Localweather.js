import React, { Component } from 'react';

import '../App.css';
import Weather from './Weather';
import axios from 'axios';




const currentApiURl = process.env.REACT_APP_CURRENT_API  
const headerValues ={
    'x-rapidapi-key': process.env.REACT_APP_x_rapidapi_key,
    'x-rapidapi-host': process.env.REACT_APP_x_rapidapi_host
  }
  const latitude = 51.5;
  const longitude = -0.1;

  const fetchWeatherData = {
  method: 'GET',
  url: currentApiURl,
  params: {lon: `${longitude}`, lat: `${latitude}`},
  headers: headerValues
};

class Localweather extends Component {

 state ={
      temp:undefined,
      city_name:undefined,
      country_code:undefined,
      wind_spd:undefined,
      sunrise:undefined,
      sunset:undefined,
      datetime:undefined
    } ;

componentDidMount() {
axios.request(fetchWeatherData)
.then((response)=> {
 const arrayData = response.data.data[0]
this.setState({
      temp:arrayData.temp,
      city_name:    arrayData.city_name,
      country_code: arrayData.country_code,
      wind_spd:     arrayData.wind_spd,
      sunrise:      arrayData.sunrise,
      sunset:       arrayData.sunset,
      datetime:     arrayData.ob_time
    })
  });
}
  render() {
    return (
      <div className="App">
     <Weather weatherData={this.state}/>
      </div>
    );
  }
}

export default Localweather;