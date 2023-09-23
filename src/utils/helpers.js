const formatOptions = {
	weekday: 'long',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
};

const getToday = () => {
	const now = new Date();

	return now;
};

export const getYear = () => {
	const now = getToday();
	const year = now.getFullYear();

	return year;
};

export const getWindowWidth = () => {
	const { innerWidth } = window;

	return innerWidth;
};

const formatGreetings = (now) => {
	const hour = now.getHours();

	const greetings =
		(hour >= 5 && hour < 12 && 'Good Morning') ||
		(hour >= 12 && hour < 17 && 'Good Afternoon') ||
		(hour >= 17 && hour < 24 && 'Good Evening') ||
		'TODO';

	return greetings;
};

export const formatDateAndTime = () => {
	const now = getToday();

	const today = new Intl.DateTimeFormat('en-US', formatOptions).format(now);
	const [day, date, time] = today.split(', ');

	const formattedDate = day + ', ' + date;
	const formattedTime = time.toLowerCase();
	const formattedGreetings = formatGreetings(now);

	return [formattedDate, date, formattedTime, formattedGreetings];
};

export const formatLocation = (city, country) => {
	let location;

	if (city && country) location = `${city}, ${country}`;
	else if (!city && country) location = country;
	else location = '';

	return location;
};

export const formatTemperature = (temp) => {
	const temperature = temp ? `${temp.toFixed()} °C` : '';

	return temperature;
};

export const filterTasks = (tasks, filterValue) => {
	let filteredTasks;

	if (filterValue === 'all') filteredTasks = tasks;
	else if (filterValue === 'personal')
		filteredTasks = tasks.filter(
			(task) => task.category === 'personal' && task.completed === false
		);
	else if (filterValue === 'business')
		filteredTasks = tasks.filter(
			(task) => task.category === 'business' && task.completed === false
		);
	else if (filterValue === 'completed')
		filteredTasks = tasks.filter((task) => task.completed === true);

	return filteredTasks;
};
