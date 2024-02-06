import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import Button from '../../ui/Button';
import Checkbox from '../checkbox/Checkbox';
import Input from './Input';
import './form.css';

function TasksForm() {
	const {
		input,
		isEditing,
		currentTask,
		handleAddNewTask,
		handleSaveTask,
		handleChangeCategoryInput,
	} = useContext(TasksContext);

	const submitIconClass = isEditing
		? 'fa-solid fa-check'
		: 'fa-solid fa-plus';
	const checked = currentTask.category !== 'personal';

	function handleSubmitForm(e) {
		e.preventDefault();

		if (isEditing) {
			handleSaveTask();
		} else {
			handleAddNewTask();
		}
	}

	return (
		<form className='form' onSubmit={handleSubmitForm}>
			<Checkbox
				isChecked={checked}
				onChange={handleChangeCategoryInput}
			/>
			<Input />

			<Button className='btn-submit' type='submit' disabled={!input}>
				<i className={submitIconClass}></i>
			</Button>
		</form>
	);
}

export default TasksForm;
