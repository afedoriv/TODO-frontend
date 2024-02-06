import { useContext } from 'react';
import { PositionContext } from '../../contexts/PositionContext';
import { TasksContext } from '../../contexts/TasksContext';
import FilterPanel from '../filterPanel/FilterPanel';
import TaskForm from '../taskForm/TaskForm';
import Section from '../../ui/Section';
import Tasks from '../tasks/Tasks';

function TasksSection() {
	const { positionIsLoading } = useContext(PositionContext);
	const { tasksAreLoading, tasksError, handleError } =
		useContext(TasksContext);

	const showLoader = tasksAreLoading || positionIsLoading;

	return (
		<Section
			loader={showLoader}
			error={tasksError}
			handleError={handleError}
		>
			<TaskForm />
			<Tasks />
			<FilterPanel />
		</Section>
	);
}

export default TasksSection;
