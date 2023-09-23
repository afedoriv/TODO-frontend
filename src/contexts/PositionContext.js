import { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useGeolocation } from '../hooks/useGeolocation';
import { formatLocation, formatTemperature } from '../utils/helpers';

const initialPositionState = {
	location: '',
	temperature: '',
	weatherIconCode: '',
};

const PositionContext = createContext();

function PositionProvider({ children }) {
	const [position, setPosition] = useState(initialPositionState);
	const [positionIsLoading, setPositionIsLoading] = useState(false);
	const [positionError, setPositionError] = useState(null);

	const { coordinates } = useGeolocation(
		setPositionIsLoading,
		setPositionError
	);
	const { positionData } = useFetch(
		coordinates,
		setPositionIsLoading,
		setPositionError
	);

	const { location, temperature, weatherIconCode } = position;

	useEffect(() => {
		if (!positionData) return;

		setPosition({
			location: formatLocation(
				positionData?.name,
				positionData?.sys?.country
			),
			temperature: formatTemperature(positionData?.main?.temp),
			weatherIconCode: positionData?.weather[0]?.icon.slice(0, -1) || '',
		});
	}, [positionData]);

	return (
		<PositionContext.Provider
			value={{
				location,
				temperature,
				weatherIconCode,
				positionIsLoading,
				setPositionIsLoading,
				positionError,
				setPositionError,
			}}
		>
			{children}
		</PositionContext.Provider>
	);
}

export { PositionContext, PositionProvider };
