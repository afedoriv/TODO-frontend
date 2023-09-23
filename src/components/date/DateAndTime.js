import Box from '../../ui/Box';
import Date from './Date';
import Time from './Time';
import './date-time.css';

function DateAndTime() {
	return (
		<Box className='date-time'>
			<Date />
			<Time />
		</Box>
	);
}

export default DateAndTime;
