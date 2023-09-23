import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import './form.css';

function Input() {
	const { input, inputRef, handleChangeFormInput } = useContext(TasksContext);

	return (
		<input
			className='form-input'
			type='text'
			placeholder='Start by adding your tasks...'
			autoComplete='off'
			value={input}
			ref={inputRef}
			onChange={handleChangeFormInput}
		/>
	);
}

export default Input;
