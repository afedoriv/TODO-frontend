import { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser, signInUser, signOutUser } from '../services/FetchUsers';

const initialFormState = {
	name: '',
	email: '',
	password: '',
	passwordConfirm: '',
};

const initialState = {
	formType: 'login',
	formInput: initialFormState,
	userInfoIsLoading: false,
	userInfoError: null,
};

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return { ...state, userInfoIsLoading: true };

		case 'formType/set':
			return {
				...state,
				formType: action.payload,
				formInput: initialFormState,
			};

		case 'formInput/set':
			return {
				...state,
				formInput: {
					...state.formInput,
					[action.payload.key]: action.payload.value,
				},
			};

		case 'user/loggedIn':
			return {
				...state,
				formInput: initialFormState,
				userInfoIsLoading: false,
			};

		case 'user/loggedOut':
			return initialState;

		case 'rejected':
			return {
				...state,
				formInput: initialFormState,
				userInfoIsLoading: false,
				userInfoError: action.payload,
			};

		case 'error/reset':
			return {
				...state,
				userInfoError: null,
			};

		default:
			throw new Error('Unknown action type');
	}
}

const UserContext = createContext();

function UserProvider({ children }) {
	const [
		{ formType, formInput, userInfoIsLoading, userInfoError },
		dispatch,
	] = useReducer(reducer, initialState);

	const navigate = useNavigate();
	const authDispatch = useDispatch();

	function handleChangeForm(formType) {
		dispatch({ type: 'formType/set', payload: formType });
	}
	function handleChangeFormInput(key, e) {
		const { value } = e.target;

		dispatch({ type: 'formInput/set', payload: { key, value } });
	}
	function handleSubmitSignUpForm(e) {
		e.preventDefault();

		createUser(formInput, dispatch, authDispatch, navigate);
	}
	function handleSubmitLoginForm(e) {
		e.preventDefault();

		signInUser(formInput, dispatch, authDispatch, navigate);
	}
	function handleLogout(e) {
		e.preventDefault();

		signOutUser(dispatch, authDispatch, navigate);
	}
	function handleUserInfoError() {
		dispatch({ type: 'error/reset' });
	}

	return (
		<UserContext.Provider
			value={{
				formType,
				formInput,
				userInfoIsLoading,
				userInfoError,
				handleChangeForm,
				handleChangeFormInput,
				handleSubmitSignUpForm,
				handleSubmitLoginForm,
				handleLogout,
				handleUserInfoError,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext, UserProvider };
