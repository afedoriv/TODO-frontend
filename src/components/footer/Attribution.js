import Image from '../../ui/Image';
import openWeatherLogo from '../../assets/images/icons/logo-open-weather.jpg';
import { OPEN_WEATHER_URL } from '../../config/Config';
import './footer.css';

function Attribution() {
	return (
		<div className='attribution'>
			<p>
				Weather data provided by
				<a href={OPEN_WEATHER_URL} target='_blank' rel='noreferrer'>
					OpenWeather
				</a>
			</p>

			<figure className='open-weather-logo'>
				<a href={OPEN_WEATHER_URL} target='_blank' rel='noreferrer'>
					<Image src={openWeatherLogo} alt='OpenWeather Logo' />
				</a>
			</figure>
		</div>
	);
}

export default Attribution;
