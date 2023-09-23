import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';
import './position.css';

function Location() {
	const { location } = useContext(PositionContext);

	return <div className='location'>{location}</div>;
}

export default Location;
