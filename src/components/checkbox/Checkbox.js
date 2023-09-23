import CheckMark from './CheckMark';

function Checkbox({
	id = 'form-checkbox',
	isChecked,
	disabled = false,
	onChange,
	children,
}) {
	const checkMarkType = id === 'form-checkbox' ? 'form' : 'task';

	return (
		<label htmlFor={id}>
			<input
				id={id}
				type='checkbox'
				checked={isChecked}
				disabled={disabled}
				onChange={onChange}
			/>
			<CheckMark type={checkMarkType} isChecked={isChecked} />

			{children}
		</label>
	);
}

export default Checkbox;
