import { useContext, useEffect } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import Box from '../../ui/Box';
import FilterPanel from '../filterPanel/FilterPanel';
import Footer from '../footer/Footer';
import Form from '../form/Form';
import Loader from '../loader/Loader';
import Tasks from '../tasks/Tasks';
import Toast from '../toast/Toast';
import { ALERT_DURATION } from '../../config/Config';
import '../../assets/styles/index.css';

function TasksSection() {
	const { tasksAreLoading, tasksError, handleTimer } =
		useContext(TasksContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			handleTimer();
		}, ALERT_DURATION);

		return () => clearTimeout(timer);
	}, [tasksError]);

	return (
		<Box tag='section' className='main-content'>
			{tasksError && <Toast message={tasksError} />}

			{tasksAreLoading && <Loader type='secondary' />}

			<Form />
			<Tasks />
			<FilterPanel />
			<Footer />
		</Box>
	);
}

export default TasksSection;
