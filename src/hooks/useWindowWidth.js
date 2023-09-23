import { useEffect, useState } from 'react';
import { getWindowWidth } from '../utils/helpers';

export const useWindowWidth = (breakPoint) => {
	const [windowWidth, setWindowWidth] = useState(
		getWindowWidth() < breakPoint
	);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(getWindowWidth() < breakPoint);
		};

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return [windowWidth];
};
