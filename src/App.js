import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import TasksSectionLayout from './layouts/TasksSectionLayout';
import WelcomeSectionLayout from './layouts/WelcomeSectionLayout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<WelcomeSectionLayout />} />
					<Route path='/tasks' element={<TasksSectionLayout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
