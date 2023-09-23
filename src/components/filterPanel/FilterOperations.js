import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import Button from '../../ui/Button';
import './filter-panel.css';

function FilterOperations({ categories }) {
	const {
		activeCategory,
		filterTasksByCategory,
		handleChangeActiveCategory,
	} = useContext(TasksContext);

	return (
		<>
			{categories.map((filterCategory) => (
				<Button
					className={
						filterCategory === activeCategory
							? 'btn-filter btn-filter-active'
							: 'btn-filter'
					}
					onClick={() => handleChangeActiveCategory(filterCategory)}
					disabled={filterCategory === activeCategory}
					key={filterCategory}
				>
					<div className='stats'>
						{filterTasksByCategory(filterCategory).length}
					</div>
					<span>{filterCategory}</span>
				</Button>
			))}
		</>
	);
}

export default FilterOperations;
