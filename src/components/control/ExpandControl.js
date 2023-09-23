import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import Button from '../../ui/Button';
import './control.css';

function ExpandControl() {
	const { isExpanded, handleExpandBackground } =
		useContext(BackgroundContext);

	const directionIconClass = isExpanded
		? 'fa-solid fa-chevron-up'
		: 'fa-solid fa-chevron-down';

	return (
		<Button className='btn-expand' onClick={handleExpandBackground}>
			<span>{isExpanded ? 'Less' : 'More'}</span>
			<i className={directionIconClass}></i>
		</Button>
	);
}

export default ExpandControl;
