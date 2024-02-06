import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import Box from '../../ui/Box';
import ControlPanel from './ControlPanel';
import DisplayControl from './DisplayControl';
import './control.css';

function Control() {
	const { controlContainerRef } = useContext(BackgroundContext);

	return (
		<Box boxRef={controlContainerRef} className='control-container'>
			<DisplayControl />
			<ControlPanel />
		</Box>
	);
}

export default Control;
