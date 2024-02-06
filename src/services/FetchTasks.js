import axios from 'axios';
import { BASE_URL } from '../config/Config';

async function createTask(task, dispatch, focus) {
	dispatch({ type: 'loading' });

	try {
		const { description, category } = task;

		const { data } = await axios.post(`${BASE_URL}/api/v1/tasks`, {
			description,
			category,
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
		const { data } = await axios.patch(`${BASE_URL}/api/v1/tasks/${id}`, {
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
		const { data } = await axios.patch(`${BASE_URL}/api/v1/tasks/${id}`, {
			completed,
		});

		if (data.status === 'success') getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function deleteTask(id, dispatch) {
	dispatch({ type: 'loading' });

	try {
		const response = await axios.delete(`${BASE_URL}/api/v1/tasks/${id}`);

		if (response.status === 204) getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function getAllTasks(dispatch, focus) {
	try {
		const { data } = await axios.get(`${BASE_URL}/api/v1/tasks`);

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
		const { data } = await axios.delete(`${BASE_URL}/api/v1/tasks`);

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
		const { data } = await axios.delete(
			`${BASE_URL}/api/v1/tasks?completed=true`
		);

		if (data.status === 'success') getAllTasks(dispatch);
	} catch (err) {
		dispatch({ type: 'rejected', payload: err.response.data.message });
	}
}

async function swapTasks(id1, id2, dispatch) {
	dispatch({ type: 'loading' });

	try {
		const { data } = await axios.put(
			`${BASE_URL}/api/v1/tasks/${id1}&${id2}`
		);

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
