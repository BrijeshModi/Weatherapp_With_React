
import React, { Component } from 'react';
import axios from 'axios';
import ForecastData from './ForecastData';
import selectCity from './Selectcity';
import SearchTemp from './SearchTemp';


const headerValues ={
    'x-rapidapi-key': process.env.REACT_APP_x_rapidapi_key,
    'x-rapidapi-host': process.env.REACT_APP_x_rapidapi_host
  }

const dailyApiURl = process.env.REACT_APP_DAILY_API 

const forCastWeatherData = (longitude, latitude) => {
  return{
  method: 'GET',
  url: dailyApiURl,
  params: {lon: `${longitude}`, lat: `${latitude}`},
  headers: headerValues
}
};

class Forecast extends Component {

  constructor(props){
    super(props)
 this.state ={
      lon:0,
      lat:0,
      days:[],
      minTemp:[],
      maxTemp:[],
      city:[]
 }
 this.onChange = this.onChange.bind(this);
  }
onChange = (e)=> {
    e.preventDefault()
   let cityId = e.target.value;
   let cityObj= this.state.city.find((element)=> (element.id)== cityId);
   console.log(cityObj);
   this.setState({lon:cityObj.lon, lat:cityObj.lat})
   console.log(cityObj.lon,cityObj.lat)
   axios.request(forCastWeatherData(cityObj.lon,cityObj.lat))
  .then((response)=> {
 const arrayData = response.data.data.map(({min_temp,max_temp,datetime}) => 
  ({min_temp, max_temp,datetime}))

  this.setState({
      days:[...arrayData]
    })
});
}

searchMinTemp =(e)=>{
   e.preventDefault()
   const minTempAry = this.state.days.filter((ele) => ele.min_temp >= e.target.elements.minSearch.value)
 this.setState({minTemp:minTempAry, maxTemp: []})
}
searchMaxTemp =(e)=>{
   e.preventDefault()
    const maxTempAry = this.state.days.filter((ele) => ele.max_temp <= e.target.elements.maxSearch.value)
    this.setState({maxTemp:maxTempAry,minTemp:[]}) 
  }

 componentDidMount() {
this.setState({
     city:selectCity()
    })
  }
 render() {
  return (
   <div className="selectionClass">
   <label className="citySelection">Choose a City : &nbsp;&nbsp;</label>
  <select name="citySelection" className="citySelection" onChange={this.onChange}>
   {this.state.city.map((element,i) => <option key={i} value={element.id}>{element.name}</option>)}
  </select>
  <ForecastData forecastData={this.state.days} />
  <br></br>
  <form onSubmit={this.searchMinTemp}>
  <input type="number" name="minSearch" placeholder="Enter Temp"/>
  <button className="minbtn" name="minbtn">Search Min temp</button>
  </form>
 <br></br>
 <form onSubmit={this.searchMaxTemp}>
 <input type="number" name="maxSearch" placeholder="Enter Temp"/>
  <button className="minbtn" name="maxbtn">Search Max temp</button>
 </form> 
 <br></br>
 <SearchTemp minTemp={this.state.minTemp} maxTemp={this.state.maxTemp}/>
  </div>
 );
  }
 }

export default Forecast;