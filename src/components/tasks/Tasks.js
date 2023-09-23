import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import Box from '../../ui/Box';
import Message from '../message/Message';
import TasksList from './TasksList';
import '../../assets/styles/index.css';

function Tasks() {
	const { tasks, activeCategory, filterTasksByCategory } =
		useContext(TasksContext);

	if (tasks.length === 0)
		return (
			<Box className='container'>
				<Message type='instructions' />
			</Box>
		);

	const filteredTasks = filterTasksByCategory(activeCategory);

	return (
		<Box className='container'>
			{filteredTasks.length === 0 ? (
				<Message type={activeCategory} />
			) : (
				<TasksList tasks={filteredTasks} />
			)}
		</Box>
	);
}

export default Tasks;
