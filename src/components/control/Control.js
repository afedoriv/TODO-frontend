import Box from '../../ui/Box';
import ExpandControl from './ExpandControl';
import DisplayControl from './DisplayControl';
import './control.css';

function Control() {
	return (
		<Box className='control'>
			<DisplayControl />
			<ExpandControl />
		</Box>
	);
}

export default Control;
