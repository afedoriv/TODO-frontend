import Box from '../../ui/Box';
import Date from './Date';
import Time from './Time';
import './date-time.css';

function DateAndTime({ layout = '' }) {
	const dateAndTimeClass = layout
		? `date-time fade-in ${layout}`
		: 'date-time fade-in';

	return (
		<Box className={dateAndTimeClass}>
			<Date />
			<Time />
		</Box>
	);
}

export default DateAndTime;
