

import React from 'react';

const ForecastData = (props) => {

 return (
  <div className="forcastDataCls">
  {props.forecastData.map((element,i)=>
  <React.Fragment key={i}>
  <p className="foreCastClass">{element.datetime}</p>
   <p className="foreCastClass">Min Temp: {element.min_temp}</p>
   <p className="foreCastClass">Max temp: {element.max_temp}</p>
   
   
</React.Fragment>

)}
 </div>
  )
}

export default ForecastData;

