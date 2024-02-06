import axios from 'axios';
import { loginUser, logoutUser } from '../slices/authSlice';
import { BASE_URL } from '../config/Config';

async function createUser(newUser, dispatch, authDispatch, navigate) {
	dispatch({ type: 'loading' });

	try {
		const { name, email, password, passwordConfirm } = newUser;

		const { data } = await axios.post(`${BASE_URL}/api/v1/users/register`, {
			name,
			email,
			password,
			passwordConfirm,
		});

		if (data.status === 'success') {
			dispatch({ type: 'user/loggedIn' });
			authDispatch(loginUser(data.data.user.name));
			navigate('/tasks');
		}
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function signInUser(userInfo, dispatch, authDispatch, navigate) {
	dispatch({ type: 'loading' });

	try {
		const { email, password } = userInfo;

		const { data } = await axios.post(`${BASE_URL}/api/v1/users/login`, {
			email,
			password,
		});

		if (data.status === 'success') {
			dispatch({ type: 'user/loggedIn' });
			authDispatch(loginUser(data.data.user.name));
			navigate('/tasks');
		}
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function signOutUser(dispatch, authDispatch, navigate) {
	dispatch({ type: 'loading' });

	try {
		const { data } = await axios.get(`${BASE_URL}/api/v1/users/logout`);

		if (data.status === 'success') {
			dispatch({ type: 'user/loggedOut' });
			authDispatch(logoutUser());
			navigate('/');
		}
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

export { createUser, signInUser, signOutUser };
