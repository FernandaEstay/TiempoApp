import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import './style.css';
import {
    SNOW,
} from './../../constans/weathers';

const data = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component
{
    handleUpdateClick = () =>{
        console.log("actualizado")
    }
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={"Santiago"} />
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }

};

export default WeatherLocation;