import CheckMark from '../checkbox/CheckMark';
import './message.css';

function Message({ type }) {
	if (type !== 'instructions')
		return (
			<div className='message'>
				<p className='row'>{`You have no ${type} tasks.`}</p>
			</div>
		);

	return (
		<div className='message'>
			<p className='row first-row'>
				Click on the
				<CheckMark />
				above to change the task category.
			</p>
			<p className='row'>
				Add, edit, delete and mark tasks as completed.
			</p>
			<p className='row'>Drag and drop to reorder your tasks.</p>
			<p className='row'>Filter by category.</p>
		</div>
	);
}

export default Message;
