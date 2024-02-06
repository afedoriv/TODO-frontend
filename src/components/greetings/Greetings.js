import { useContext } from 'react';
import { DateContext } from '../../contexts/DateContext';
import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import WeatherIcon from './WeatherIcon';
import './greetings.css';

function Greetings() {
	const { greetings } = useContext(DateContext);

	return (
		<Box className='greetings fade-in'>
			<Heading className='heading' heading={greetings} />
			<WeatherIcon />
		</Box>
	);
}

export default Greetings;
