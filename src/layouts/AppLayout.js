import { Outlet } from 'react-router-dom';
import { BackgroundProvider } from '../contexts/BackgroundContext';
import { UserProvider } from '../contexts/UserContext';
import Background from '../components/background/Background';
import '../assets/styles/index.css';

function AppLayout() {
	return (
		<BackgroundProvider>
			<Background />

			<UserProvider>
				<div className='app-layout'>
					<Outlet />
				</div>
			</UserProvider>
		</BackgroundProvider>
	);
}

export default AppLayout;
