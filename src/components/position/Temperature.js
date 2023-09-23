import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';
import './position.css';

function Temperature() {
	const { temperature } = useContext(PositionContext);

	return <div className='temperature'>{temperature}</div>;
}

export default Temperature;
