import { createContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { images } from '../data/images';
import { SCREEN_WIDTH_BREAKPOINT } from '../config/Config';

const BackgroundContext = createContext();

function BackgroundProvider({ children }) {
	const [image, setImage] = useLocalStorageState(
		images[0],
		'backgroundImage'
	);
	const [isExpanded, setIsExpanded] = useLocalStorageState(
		false,
		'backgroundSize'
	);

	const [mobileWidth] = useWindowWidth(SCREEN_WIDTH_BREAKPOINT);

	function handleShowImage(imageId) {
		if (image.id === imageId) return;

		const img = images.find((image) => image.id === imageId);
		setImage(img);
	}
	function handleExpandBackground() {
		setIsExpanded(!isExpanded);
	}

	return (
		<BackgroundContext.Provider
			value={{
				image,
				isExpanded,
				mobileWidth,
				handleShowImage,
				handleExpandBackground,
			}}
		>
			{children}
		</BackgroundContext.Provider>
	);
}

export { BackgroundContext, BackgroundProvider };
