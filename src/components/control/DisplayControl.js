import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import Button from '../../ui/Button';
import { images } from '../../data/images';
import './control.css';

function DisplayControl() {
	const { image, handleShowImage } = useContext(BackgroundContext);

	return (
		<>
			{images.map((img) => (
				<Button
					className={
						img.id === image.id
							? 'btn-dot btn-dot-active'
							: 'btn-dot'
					}
					onClick={() => handleShowImage(img.id)}
					key={img.id}
				></Button>
			))}
		</>
	);
}

export default DisplayControl;
