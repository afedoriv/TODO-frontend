import { useContext } from 'react';
import { DateContext } from '../../contexts/DateContext';
import './greetings.css';

function Heading() {
	const { greetings } = useContext(DateContext);

	return <h1 className='heading'>{greetings}</h1>;
}

export default Heading;
