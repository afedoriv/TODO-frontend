import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import './welcome.css';

function LoginForm() {
	const {
		formInput,
		userInfoIsLoading,
		handleChangeForm,
		handleChangeFormInput,
		handleSubmitLoginForm,
	} = useContext(UserContext);

	return (
		<Form
			className='welcome-form'
			label='LOGIN'
			onSubmit={handleSubmitLoginForm}
		>
			<FormRow label='Email'>
				<input
					className='welcome-form-input'
					type='text'
					autoComplete='off'
					value={formInput?.email}
					onChange={(e) => handleChangeFormInput('email', e)}
				/>
			</FormRow>

			<FormRow label='Password'>
				<input
					className='welcome-form-input'
					type='password'
					autoComplete='off'
					value={formInput?.password}
					onChange={(e) => handleChangeFormInput('password', e)}
				/>
			</FormRow>

			<Button
				className='btn-link'
				onClick={() => handleChangeForm('register')}
				disabled={userInfoIsLoading}
			>
				<span>Sign Up</span>
			</Button>

			<Button
				className='welcome-form-btn'
				type='submit'
				disabled={userInfoIsLoading}
			>
				<span>Sign In</span>
			</Button>
		</Form>
	);
}

export default LoginForm;
