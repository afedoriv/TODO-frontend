import Task from './Task';
import './tasks.css';

function TasksList({ tasks }) {
	return (
		<ul className='tasks-list'>
			{tasks.map((task) => (
				<Task listItem={task} key={task._id} />
			))}
		</ul>
	);
}

export default TasksList;
