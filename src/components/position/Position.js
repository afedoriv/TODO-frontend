import Box from '../../ui/Box';
import Location from './Location';
import Temperature from './Temperature';
import './position.css';

function Position() {
	return (
		<Box className='position'>
			<Location />
			<Temperature />
		</Box>
	);
}

export default Position;
