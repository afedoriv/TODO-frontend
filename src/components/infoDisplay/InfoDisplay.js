import { useContext } from 'react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import { DateContext } from '../../contexts/DateContext';
import { PositionContext } from '../../contexts/PositionContext';
import Box from '../../ui/Box';
import Control from '../control/Control';
import DateAndTime from '../date/DateAndTime';
import Greetings from '../greetings/Greetings';
import Loader from '../loader/Loader';
import Position from '../position/Position';
import '../greetings/greetings.css';
import './info-display.css';

function InfoDisplay() {
	const { isExpanded, mobileWidth } = useContext(BackgroundContext);
	const { greetings } = useContext(DateContext);
	const { location, positionIsLoading } = useContext(PositionContext);

	const headerClass = isExpanded ? 'header expanded' : 'header collapsed';

	const desktopLayout =
		!positionIsLoading && !mobileWidth && location && greetings;
	const mobileLayout =
		(!positionIsLoading && mobileWidth && location && greetings) ||
		(!positionIsLoading && !location);

	return (
		<Box tag='header' className={headerClass}>
			{positionIsLoading && (
				<Box className='greetings'>
					<Loader />
				</Box>
			)}
			{desktopLayout && (
				<>
					<Position />
					<Greetings />
					<DateAndTime />
				</>
			)}
			{mobileLayout && (
				<>
					<Greetings />
					<DateAndTime />
				</>
			)}

			<Control />
		</Box>
	);
}

export default InfoDisplay;
