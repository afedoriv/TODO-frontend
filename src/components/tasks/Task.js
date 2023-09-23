import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import Button from '../../ui/Button';
import Checkbox from '../checkbox/Checkbox';
import '../checkbox/checkbox.css';
import './tasks.css';

function Task({ listItem }) {
	const { _id: id, description, category, completed } = listItem;
	const {
		isEditing,
		handleTaskEditing,
		handleUpdateTask,
		handleDeleteTask,
		handleDragStart,
		handleDragOver,
		handleDragLeave,
		handleDragEnd,
		handleDragDrop,
	} = useContext(TasksContext);

	const taskClass = `task ${
		category === 'personal' ? 'task-personal' : 'task-business'
	} ${completed ? 'completed' : ''}`;

	return (
		<li
			className={taskClass}
			draggable={!isEditing}
			onDragStart={(e) => handleDragStart(e, id)}
			onDragOver={(e) => handleDragOver(e, id)}
			onDragLeave={(e) => handleDragLeave(e)}
			onDragEnd={(e) => handleDragEnd(e)}
			onDrop={(e) => handleDragDrop(e)}
		>
			<Checkbox
				id={id}
				isChecked={completed}
				disabled={isEditing}
				onChange={() => handleUpdateTask({ id, completed: !completed })}
			>
				<p className='task-text'>{description}</p>
			</Checkbox>

			{!completed && (
				<Button
					className='btn-edit'
					onClick={() =>
						handleTaskEditing({ id, description, category })
					}
				>
					<i className='fa-solid fa-pencil'></i>
				</Button>
			)}

			<Button className='btn-delete' onClick={() => handleDeleteTask(id)}>
				<i className='fa-solid fa-xmark'></i>
			</Button>
		</li>
	);
}

export default Task;
