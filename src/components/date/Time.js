import { useContext } from 'react';
import { DateContext } from '../../contexts/DateContext';
import './date-time.css';

function Time() {
	const { time } = useContext(DateContext);

	return <div className='time'>{time}</div>;
}

export default Time;
