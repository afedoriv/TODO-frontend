import { createPortal } from 'react-dom';
import './loader.css';

function Loader() {
	return createPortal(
		<div className='loader'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>,
		document.body
	);
}

export default Loader;
