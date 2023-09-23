import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import Button from '../../ui/Button';
import FilterOperations from './FilterOperations';
import './filter-panel.css';

const filterCategories = ['personal', 'business', 'completed', 'all'];

function FilterPanel() {
	const { handleDeleteAllTasks, handleDeleteCompletedTasks } =
		useContext(TasksContext);

	return (
		<div className='filter-panel'>
			<FilterOperations categories={filterCategories} />

			<Button className='btn-clear' onClick={handleDeleteCompletedTasks}>
				<span>Clear Completed</span>
			</Button>

			<Button className='btn-clear' onClick={handleDeleteAllTasks}>
				<span>Clear All</span>
			</Button>
		</div>
	);
}

export default FilterPanel;
