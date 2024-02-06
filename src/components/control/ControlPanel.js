import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import { UserContext } from '../../contexts/UserContext';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import './control.css';

function ControlPanel() {
	const {
		controlPanelIsExpanded,
		handleExpandBackground,
		handleExpandControlPanel,
	} = useContext(BackgroundContext);
	const { handleLogout } = useContext(UserContext);

	const btnControlIconClass = controlPanelIsExpanded
		? 'fa-solid fa-chevron-right'
		: 'fa-solid fa-chevron-left';

	return (
		<Box className='control-panel'>
			{controlPanelIsExpanded && (
				<>
					<Button
						className='btn-logout fade-in-step-two'
						onClick={handleLogout}
					>
						<span className='btn-label'>Logout</span>
					</Button>

					<Button
						className='btn-bg-control fade-in-step-one'
						onClick={handleExpandBackground}
					>
						<span className='btn-label'>BG</span>
					</Button>
				</>
			)}

			<Button className='btn-control' onClick={handleExpandControlPanel}>
				<span className='btn-control-label'>
					{controlPanelIsExpanded ? 'Less' : 'More'}
				</span>

				<span className='btn-control-icon'>
					<i className={btnControlIconClass} />
				</span>
			</Button>
		</Box>
	);
}

export default ControlPanel;
