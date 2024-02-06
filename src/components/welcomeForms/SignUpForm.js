import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import './welcome.css';

function SighUpForm() {
	const {
		formInput,
		userInfoIsLoading,
		handleChangeForm,
		handleChangeFormInput,
		handleSubmitSignUpForm,
	} = useContext(UserContext);

	return (
		<Form
			className='welcome-form'
			label='Sign Up'
			onSubmit={handleSubmitSignUpForm}
		>
			<FormRow label='User Name'>
				<input
					className='welcome-form-input'
					type='text'
					autoComplete='off'
					value={formInput?.name}
					onChange={(e) => handleChangeFormInput('name', e)}
				/>
			</FormRow>

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

			<FormRow label='Confirm Password'>
				<input
					className='welcome-form-input'
					type='password'
					autoComplete='off'
					value={formInput?.passwordConfirm}
					onChange={(e) =>
						handleChangeFormInput('passwordConfirm', e)
					}
				/>
			</FormRow>

			<Button
				className='btn-link'
				onClick={() => handleChangeForm('login')}
				disabled={userInfoIsLoading}
			>
				<span>Login</span>
			</Button>

			<Button
				className='welcome-form-btn'
				type='submit'
				disabled={userInfoIsLoading}
			>
				<span>Submit</span>
			</Button>
		</Form>
	);
}

export default SighUpForm;
