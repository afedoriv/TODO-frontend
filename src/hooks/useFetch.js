import { useEffect, useState } from 'react';
import { API_URL, KEY } from '../config/Config';

export const useFetch = (coordinates, setIsLoading, setError) => {
	const [positionData, setPositionData] = useState(null);

	const getPositionData = async () => {
		try {
			const { latitude, longitude } = coordinates;
			setIsLoading(true);

			const response = await fetch(
				`${API_URL}data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`
			);
			const data = await response.json();

			if (!data)
				throw new Error(
					'Some Error Occurred while fetching city/weather data.????'
				);

			setPositionData(data);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (coordinates) getPositionData();
	}, [coordinates]);

	return { positionData };
};
