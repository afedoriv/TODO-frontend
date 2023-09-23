import Box from '../../ui/Box';
import Heading from './Heading';
import WeatherIcon from './WeatherIcon';
import './greetings.css';

function Greetings() {
	return (
		<Box className='greetings'>
			<Heading />
			<WeatherIcon />
		</Box>
	);
}

export default Greetings;
