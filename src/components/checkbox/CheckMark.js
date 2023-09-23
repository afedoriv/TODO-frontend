import './checkbox.css';

function CheckMark({ type = 'form', isChecked = false }) {
	const checkMarkClass = `${
		type === 'form' ? 'form-checkmark' : 'task-checkmark'
	} ${isChecked ? 'checked' : 'unchecked'}`;

	const checkMarkFill =
		type === 'form'
			? 'fa-circle-check fa-regular'
			: isChecked
			? 'fa-circle-check fa-solid'
			: 'fa-circle-check fa-regular';

	return (
		<span className={checkMarkClass}>
			<i className={checkMarkFill}></i>
		</span>
	);
}

export default CheckMark;
