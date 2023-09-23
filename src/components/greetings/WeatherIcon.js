import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';
import Image from '../../ui/Image';
import { OPEN_WEATHER_URL } from '../../config/Config';
import './greetings.css';

function WeatherIcon() {
	const { weatherIconCode } = useContext(PositionContext);

	if (!weatherIconCode) return;

	return (
		<figure className='open-weather-icon'>
			<Image
				src={`${OPEN_WEATHER_URL}img/wn/${weatherIconCode}n@2x.png`}
				alt='OpenWeather Icon'
			/>
		</figure>
	);
}

export default WeatherIcon;
