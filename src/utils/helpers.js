const getToday = () => {
	const now = new Date();

	return now;
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

export const formatDate = () => {
	const date = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
	}).format(getToday());

	return date;
};

export const formatFullDate = () => {
	const day = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
	}).format(getToday());

	return `${day}, ${formatDate()}`;
};

export const formatGreetings = () => {
	const now = getToday();
	const hour = now.getHours();

	const greetings =
		(hour >= 5 && hour < 12 && 'Good Morning') ||
		(hour >= 12 && hour < 17 && 'Good Afternoon') ||
		(hour >= 17 && hour < 24 && 'Good Evening') ||
		'TODO';

	return greetings;
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

export const formatTime = () => {
	const today = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: 'numeric',
	})
		.format(getToday())
		.toLowerCase();

	return today;
};

export const getWindowWidth = () => {
	const { innerWidth } = window;

	return innerWidth;
};

export const getYear = () => {
	const now = getToday();
	const year = now.getFullYear();

	return year;
};
