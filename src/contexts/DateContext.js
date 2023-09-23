import { createContext, useEffect, useMemo, useState } from 'react';
import { formatDateAndTime } from '../utils/helpers';
import { SEC } from '../config/Config';

const initialDateState = {
	fullDate: '',
	date: '',
	time: '',
	greetings: '',
};

const DateContext = createContext();

function DateProvider({ children }) {
	const [today, setToday] = useState(initialDateState);
	const { date, fullDate, time, greetings } = today;

	useEffect(() => {
		const count = setInterval(() => {
			const [fullDate, date, time, greetings] = formatDateAndTime();
			setToday({ fullDate, date, time, greetings });
		}, SEC);

		return () => clearInterval(count);
	}, []);

	const value = useMemo(() => {
		return {
			fullDate,
			date,
			time,
			greetings,
		};
	}, [fullDate, date, time, greetings]);

	return (
		<DateContext.Provider value={value}>{children}</DateContext.Provider>
	);
}

export { DateContext, DateProvider };
