import { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import './background.css';

function Background() {
	const { image, isExpanded, mobileWidth } = useContext(BackgroundContext);
	const [imageIsLoading, setImageIsLoading] = useState(true);

	const imageUrl = mobileWidth ? image.mobileSrc : image.src;
	const backgroundClass = isExpanded
		? 'background expanded'
		: 'background collapsed';

	useEffect(() => {
		setImageIsLoading(true);

		const bgImage = new Image();
		bgImage.src = imageUrl;

		bgImage.onload = () => {
			setImageIsLoading(false);
		};
	}, [image]);

	return (
		<figure
			className={backgroundClass}
			style={{
				backgroundImage: `url(${image.placeholder})`,
				backgroundPosition: image.position,
			}}
		>
			{!imageIsLoading && (
				<img
					src={imageUrl}
					alt={image.alt}
					style={{
						objectPosition: image.position,
					}}
					onLoad={() => setImageIsLoading(false)}
				/>
			)}
		</figure>
	);
}

export default Background;
