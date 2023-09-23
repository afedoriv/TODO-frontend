import axios from 'axios';
import { BASE_URL } from '../../config/Config';

const URL = `${BASE_URL}/api/v1/tasks`;

async function createTask(task, dispatch, focus) {
	dispatch({ type: 'loading' });

	try {
		const { description, category } = task;
		const { data } = await axios.post(URL, {
			description,
			category,
			completed: false,
		});

		if (data.status === 'success') getAllTasks(dispatch, focus);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function editTask(task, dispatch, focus) {
	dispatch({ type: 'task/saving' });

	try {
		const { id, description, category } = task;
		const { data } = await axios.patch(`${URL}/${id}`, {
			description,
			category,
		});

		if (data.status === 'success') getAllTasks(dispatch, focus);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function updateTask(task, dispatch) {
	dispatch({ type: 'loading' });

	try {
		const { id, completed } = task;
		const { data } = await axios.patch(`${URL}/${id}`, { completed });

		if (data.status === 'success') getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function deleteTask(id, dispatch) {
	dispatch({ type: 'loading' });

	try {
		const response = await axios.delete(`${URL}/${id}`);

		if (response.status === 204) getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function getAllTasks(dispatch, focus) {
	try {
		const { data } = await axios.get(URL);

		if (data.status === 'success')
			dispatch({ type: 'tasks/loaded', payload: data.data.tasks });
		if (focus) focus();
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function deleteAllTasks(dispatch, focus) {
	dispatch({ type: 'loading' });

	try {
		const { data } = await axios.delete(URL);

		if (data.status === 'success') {
			dispatch({ type: 'tasks/deleted' });
			focus();
		}
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function deleteCompletedTasks(dispatch) {
	dispatch({ type: 'loading' });

	try {
		const { data } = await axios.delete(`${URL}?completed=true`);

		if (data.status === 'success') getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function swapTasks(id1, id2, dispatch) {
	dispatch({ type: 'loading' });

	try {
		const { data } = await axios.put(`${URL}/${id1}&${id2}`);

		if (data.status === 'success') getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

export {
	createTask,
	editTask,
	updateTask,
	deleteTask,
	getAllTasks,
	deleteAllTasks,
	deleteCompletedTasks,
	swapTasks,
};
