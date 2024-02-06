import '../components/greetings/greetings.css';

function Form({ className, label, onSubmit, children }) {
	return (
		<form className={className} onSubmit={onSubmit}>
			{label && <label className='heading'>{label}</label>}

			{children}
		</form>
	);
}

export default Form;
