import { BackgroundProvider } from './contexts/BackgroundContext';
import { DateProvider } from './contexts/DateContext';
import { PositionProvider } from './contexts/PositionContext';
import { TasksProvider } from './contexts/TasksContext';
import Background from './components/background/Background';
import InfoDisplay from './components/infoDisplay/InfoDisplay';
import TasksSection from './components/tasksSection/TasksSection';

function App() {
	return (
		<PositionProvider>
			<BackgroundProvider>
				<Background />

				<DateProvider>
					<InfoDisplay />
				</DateProvider>
			</BackgroundProvider>

			<TasksProvider>
				<TasksSection />
			</TasksProvider>
		</PositionProvider>
	);
}

export default App;
