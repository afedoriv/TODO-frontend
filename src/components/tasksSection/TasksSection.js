import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';
import { TasksContext } from '../../contexts/TasksContext';
import Box from '../../ui/Box';
import FilterPanel from '../filterPanel/FilterPanel';
import Footer from '../footer/Footer';
import Form from '../form/Form';
import Loader from '../loader/Loader';
import Tasks from '../tasks/Tasks';
import Toast from '../toast/Toast';
import '../../assets/styles/index.css';

function TasksSection() {
	const { positionIsLoading } = useContext(PositionContext);
	const { tasksAreLoading, tasksError, handleError } =
		useContext(TasksContext);

	const showLoader = tasksAreLoading || positionIsLoading;

	return (
		<Box tag='section' className='main-content'>
			{tasksError && (
				<Toast message={tasksError} onComplete={handleError} />
			)}

			{showLoader && <Loader />}

			<Form />
			<Tasks />
			<FilterPanel />
			<Footer />
		</Box>
	);
}

export default TasksSection;
