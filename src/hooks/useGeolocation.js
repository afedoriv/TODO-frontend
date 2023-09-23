import { useEffect, useState } from 'react';

export const useGeolocation = (setIsLoading, setError) => {
	const [coordinates, setCoordinates] = useState(null);

	const getPosition = function () {
		if (!navigator.geolocation) {
			setError('Geolocation is not supported by your browser.');
			return;
		}
		setIsLoading(true);

		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCoordinates({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
				});
				setIsLoading(false);
			},
			(error) => {
				setError(error.message);
				setIsLoading(false);
			}
		);
	};

	useEffect(() => {
		getPosition();
	}, []);

	return { coordinates };
};
