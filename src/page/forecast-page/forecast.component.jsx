import React, { Component } from 'react';
import CitySearch from './../../components/city-search/city-search.component';
import CurrentWeather from './../../components/weather-details/current-weather.component';
import DailyForecast from './../../components/daily-forecast/daily-forecast.component';

import './forecast.styles.css';

export default class Forecast extends Component {
	render() {
		return (
			<div className='forecast'>
				<CitySearch />
				<CurrentWeather />
				<DailyForecast />
			</div>
		);
	}
}
