import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        {getWeatherIcon(weatherState)}
        <WeatherTemperature temperature={20}/>
        <WeatherExtraInfo humidity={88} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;