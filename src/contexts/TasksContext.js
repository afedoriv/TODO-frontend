import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { filterTasks } from '../utils/helpers';
import {
	createTask,
	editTask,
	updateTask,
	deleteTask,
	getAllTasks,
	deleteAllTasks,
	deleteCompletedTasks,
	swapTasks,
} from '../components/tasks/FetchTasks';

const initialTaskState = {
	id: '',
	description: '',
	category: 'personal',
};

const initialState = {
	tasks: [],
	tasksAreLoading: false,
	tasksError: null,
	activeCategory: 'all',
	isEditing: false,
	currentTask: initialTaskState,
};

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return { ...state, tasksAreLoading: true };
		case 'rejected':
			return {
				...state,
				tasksAreLoading: false,
				tasksError: action.payload,
				currentTask: initialTaskState,
			};
		case 'category/set':
			return { ...state, activeCategory: action.payload };
		case 'error/set':
			return { ...state, tasksError: null };
		case 'task/editing':
			return { ...state, isEditing: true, currentTask: action.payload };
		case 'task/saving':
			return {
				...state,
				tasksAreLoading: true,
				isEditing: false,
			};
		case 'task/set':
			return { ...state, currentTask: action.payload };
		case 'tasks/loaded':
			return {
				...state,
				tasks: action.payload,
				tasksAreLoading: false,
				currentTask: initialTaskState,
			};
		case 'tasks/deleted':
			return { ...state, tasks: [], tasksAreLoading: false };
		default:
			throw new Error('Unknown action type');
	}
}

const TasksContext = createContext();

function TasksProvider({ children }) {
	const [input, setInput] = useState('');
	const inputRef = useRef(null);

	const [
		{
			tasks,
			tasksAreLoading,
			tasksError,
			activeCategory,
			isEditing,
			currentTask,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const dragItemRef = useRef(null);
	const dragOverItemRef = useRef(null);

	function handleAddNewTask() {
		const newTask = { description: input, category: currentTask.category };
		blur();
		createTask(newTask, dispatch, focus);
	}
	function handleTaskEditing(task) {
		dispatch({ type: 'task/editing', payload: task });
		setInput(task.description);
		focus();
	}
	function handleSaveTask() {
		const updatedTask = { ...currentTask, description: input };
		blur();
		editTask(updatedTask, dispatch, focus);
	}
	function handleUpdateTask(task) {
		updateTask(task, dispatch);
	}
	function handleDeleteTask(id) {
		deleteTask(id, dispatch);
	}
	function handleDeleteAllTasks() {
		if (tasks.length) deleteAllTasks(dispatch, focus);
	}
	function handleDeleteCompletedTasks() {
		if (tasks.some((task) => task.completed === true))
			deleteCompletedTasks(dispatch);
	}
	function handleChangeFormInput(e) {
		setInput(e.target.value);
	}
	function handleChangeCategoryInput() {
		const taskCategory =
			currentTask.category === 'personal' ? 'business' : 'personal';

		dispatch({
			type: 'task/set',
			payload: { ...currentTask, category: taskCategory },
		});
	}
	function handleChangeActiveCategory(category) {
		if (activeCategory !== category)
			dispatch({ type: 'category/set', payload: category });
	}

	function handleDragStart(e, id) {
		dragItemRef.current = id;
		e.currentTarget.classList.add('task-draggable');
	}
	function handleDragOver(e, id) {
		e.preventDefault();
		dragOverItemRef.current = id;
		e.currentTarget.classList.add('task-droppable');
	}
	function handleDragLeave(e) {
		e.currentTarget.classList.remove('task-droppable');
	}
	function handleDragEnd(e) {
		e.currentTarget.classList.remove('task-draggable');
		dragItemRef.current = null;
		dragOverItemRef.current = null;
	}
	function handleDragDrop(e) {
		e.preventDefault();
		e.currentTarget.classList.remove('task-droppable');

		if (dragItemRef.current !== dragOverItemRef.current)
			swapTasks(dragItemRef.current, dragOverItemRef.current, dispatch);
	}
	function handleTimer() {
		dispatch({ type: 'error/set' });
		focus();
	}

	function filterTasksByCategory(category) {
		if (tasks.length === 0) return [];
		const filteredTasks = filterTasks(tasks, category);

		return filteredTasks;
	}
	function blur() {
		inputRef.current.blur();
		setInput('');
	}
	function focus() {
		inputRef.current.focus();
	}

	useEffect(() => {
		dispatch({ type: 'loading' });

		getAllTasks(dispatch);
	}, []);

	return (
		<TasksContext.Provider
			value={{
				input,
				inputRef,
				tasks,
				tasksAreLoading,
				tasksError,
				activeCategory,
				isEditing,
				currentTask,
				handleAddNewTask,
				handleTaskEditing,
				handleSaveTask,
				handleUpdateTask,
				handleDeleteTask,
				handleDeleteAllTasks,
				handleDeleteCompletedTasks,
				handleChangeFormInput,
				handleChangeCategoryInput,
				handleChangeActiveCategory,
				handleDragStart,
				handleDragOver,
				handleDragLeave,
				handleDragEnd,
				handleDragDrop,
				handleTimer,
				filterTasksByCategory,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
}

export { TasksContext, TasksProvider };
