import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App (aplicación del clima)
        <WeatherLocation />
        
      </div>
    );
  }
}

export default App;
