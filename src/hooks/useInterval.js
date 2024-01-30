import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function count() {
			savedCallback.current();
		}

		const id = setInterval(count, delay);

		return () => clearInterval(id);
	}, [delay]);
};
