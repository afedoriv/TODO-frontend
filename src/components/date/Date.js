import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import { DateContext } from '../../contexts/DateContext';
import './date-time.css';

function Date() {
	const { mobileWidth } = useContext(BackgroundContext);
	const { fullDate, date } = useContext(DateContext);

	return <div className='date'>{mobileWidth ? date : fullDate}</div>;
}

export default Date;
