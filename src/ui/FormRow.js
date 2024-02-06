import Box from './Box';
import '../components/welcomeForms/welcome.css';

function FormRow({ label, children }) {
	return (
		<Box className='welcome-form-row'>
			<label className='welcome-form-input-label'>{label}</label>

			{children}
		</Box>
	);
}

export default FormRow;
