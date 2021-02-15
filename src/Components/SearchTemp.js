
import React from 'react'

 function SearchTemp(props) {

 return (
  <div className="forcastDataCls">
  { props.minTemp.length > 0 &&
    props.minTemp.map((element,i)=>
  <React.Fragment key={i}>
   <p className="searchTempClass">{element.datetime}</p>
   <p className="searchTempClass">Min Temp: {element.min_temp}</p>
   
</React.Fragment>  
)}
{ props.maxTemp.length > 0 &&
    props.maxTemp.map((element,i)=>
  <React.Fragment key={i}>
   <p className="searchTempClass">{element.datetime}</p>
   <p className="searchTempClass">Max temp: {element.max_temp}</p>
</React.Fragment>
)}
 </div>
 )
}
export default SearchTemp;


