import { createContext, useMemo, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import {
	formatDate,
	formatFullDate,
	formatGreetings,
	formatTime,
} from '../utils/helpers';
import { SEC } from '../config/Config';

const initialDateState = {
	fullDate: formatFullDate(),
	date: formatDate(),
	time: formatTime(),
	greetings: formatGreetings(),
};

const DateContext = createContext();

function DateProvider({ children }) {
	const [today, setToday] = useState(initialDateState);
	const { fullDate, date, time, greetings } = today;

	useInterval(() => {
		setToday({
			fullDate: formatFullDate(),
			date: formatDate(),
			time: formatTime(),
			greetings: formatGreetings(),
		});
	}, SEC);

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
