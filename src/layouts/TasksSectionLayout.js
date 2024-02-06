import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DateProvider } from '../contexts/DateContext';
import { PositionProvider } from '../contexts/PositionContext';
import { TasksProvider } from '../contexts/TasksContext';
import InfoDisplay from '../components/infoDisplay/InfoDisplay';
import TasksSection from '../components/tasksSection/TasksSection';
import { getAuthorizedUser } from '../slices/authSlice';

function TasksSectionLayout() {
	const navigate = useNavigate();
	const authorizedUser = useSelector(getAuthorizedUser);

	useEffect(() => {
		if (!authorizedUser) navigate('/');
	}, [authorizedUser]);

	return (
		<PositionProvider>
			<DateProvider>
				<InfoDisplay />
			</DateProvider>

			<TasksProvider>
				<TasksSection />
			</TasksProvider>
		</PositionProvider>
	);
}

export default TasksSectionLayout;
