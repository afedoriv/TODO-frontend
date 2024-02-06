import { useContext, useEffect, useState } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import './background.css';

function Background() {
	const [imageIsLoading, setImageIsLoading] = useState(true);

	const { image, bgIsExpanded, mobileWidth, welcomePage } =
		useContext(BackgroundContext);

	const imageUrl = mobileWidth ? image.mobileSrc : image.src;

	const backgroundClass = welcomePage
		? 'background expanded'
		: bgIsExpanded
		? 'background expanded'
		: 'background collapsed';

	useEffect(() => {
		setImageIsLoading(true);

		const bgImage = new Image();
		bgImage.src = imageUrl;

		bgImage.onload = () => {
			setImageIsLoading(false);
		};
	}, [image, imageUrl]);

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
