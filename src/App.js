import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './Components/About';
import Error from './Components/Error';
import Navigation from './Components/Navigation';
import Forecast from './Components/Forecast';
import Localweather from './Components/Localweather';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Localweather} exact/>
             <Route path="/about" component={About}/>
              <Route path="/localweather" component={Localweather}/>
             <Route path="/forecast" component={Forecast}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;