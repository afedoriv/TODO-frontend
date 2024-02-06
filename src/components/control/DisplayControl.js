import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import Button from '../../ui/Button';
import { images } from '../../data/images';
import './control.css';

function DisplayControl() {
	const { image, controlPanelIsExpanded, handleShowImage } =
		useContext(BackgroundContext);

	if (!controlPanelIsExpanded) return null;

	return (
		<div className='control-image fade-in-step-three'>
			{images.map((img) => (
				<Button
					className={
						img.id === image.id
							? 'btn-dot btn-dot-active'
							: 'btn-dot'
					}
					onClick={() => handleShowImage(img.id)}
					key={img.id}
				/>
			))}
		</div>
	);
}

export default DisplayControl;
