import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Box from '../ui/Box';
import Heading from '../ui/Heading';
import Section from '../ui/Section';
import LoginForm from '../components/welcomeForms/LoginForm';
import SignUpForm from '../components/welcomeForms/SignUpForm';
import '../components/welcomeForms/welcome.css';
import '../components/greetings/greetings.css';

function WelcomeSectionLayout() {
	const { formType, userInfoIsLoading, userInfoError, handleUserInfoError } =
		useContext(UserContext);

	const displayLoginForm = formType === 'login';
	const displaySignUpForm = formType === 'register';

	return (
		<>
			<Box className='greetings'>
				<Heading className='heading' heading='Welcome to TODO!' />
			</Box>

			<Section
				loader={userInfoIsLoading}
				error={userInfoError}
				handleError={handleUserInfoError}
			>
				<div className='welcome-form-container'>
					{displayLoginForm && <LoginForm />}
					{displaySignUpForm && <SignUpForm />}
				</div>
			</Section>
		</>
	);
}

export default WelcomeSectionLayout;
