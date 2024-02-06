import { createContext, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { images } from '../data/images';
import { SCREEN_WIDTH_BREAKPOINT } from '../config/Config';
import { useLocation } from 'react-router-dom';

const fadeInOptions = {
	opacity: 0,
	duration: 0.3,
};

const BackgroundContext = createContext();

function BackgroundProvider({ children }) {
	const [image, setImage] = useLocalStorageState(
		images[0],
		'backgroundImage'
	);
	const [bgIsExpanded, setBgIsExpanded] = useLocalStorageState(
		false,
		'backgroundSize'
	);
	const [controlPanelIsExpanded, setControlPanelIsExpanded] =
		useLocalStorageState(false, 'controlPanel');

	const [mobileWidth] = useWindowWidth(SCREEN_WIDTH_BREAKPOINT);

	const { pathname } = useLocation();
	const welcomePage = pathname === '/';

	const controlAnimationRef = useRef(null);
	const controlContainerRef = useRef(null);

	function handleShowImage(imageId) {
		if (image.id === imageId) return;

		const img = images.find((image) => image.id === imageId);
		setImage(img);
	}
	function handleExpandBackground() {
		setBgIsExpanded((isExpanded) => !isExpanded);
	}
	function handleExpandControlPanel() {
		setControlPanelIsExpanded(
			(controlPanelIsExpanded) => !controlPanelIsExpanded
		);
	}

	useGSAP(
		() => {
			controlAnimationRef.current = gsap.timeline({
				paused: true,
			});

			if (!controlPanelIsExpanded || welcomePage) return;

			controlAnimationRef.current
				.from('.fade-in-step-one', fadeInOptions, '+=0.15')
				.from('.fade-in-step-two', fadeInOptions, '+=0.15')
				.from('.fade-in-step-three', fadeInOptions, '+=0.15');

			controlAnimationRef.current.play();
		},
		{
			dependencies: [controlPanelIsExpanded],
			scope: controlContainerRef,
		}
	);

	return (
		<BackgroundContext.Provider
			value={{
				image,
				bgIsExpanded,
				controlPanelIsExpanded,
				controlContainerRef,
				mobileWidth,
				welcomePage,
				handleShowImage,
				handleExpandBackground,
				handleExpandControlPanel,
			}}
		>
			{children}
		</BackgroundContext.Provider>
	);
}

export { BackgroundContext, BackgroundProvider };
