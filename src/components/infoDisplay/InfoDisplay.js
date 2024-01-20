import { useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { BackgroundContext } from '../../contexts/BackgroundContext';
import { DateContext } from '../../contexts/DateContext';
import { PositionContext } from '../../contexts/PositionContext';
import Box from '../../ui/Box';
import Control from '../control/Control';
import DateAndTime from '../date/DateAndTime';
import Greetings from '../greetings/Greetings';
import Position from '../position/Position';
import '../greetings/greetings.css';
import './info-display.css';

function InfoDisplay() {
	const [layout, setLayout] = useState('');

	const fadeInAnimationRef = useRef(null);
	const fadeInContainerRef = useRef(null);

	const { isExpanded, mobileWidth } = useContext(BackgroundContext);
	const { greetings } = useContext(DateContext);
	const { location, positionIsLoading } = useContext(PositionContext);

	const headerClass = isExpanded ? 'header expanded' : 'header collapsed';

	useGSAP(
		() => {
			fadeInAnimationRef.current = gsap.timeline({
				paused: true,
			});

			if (!layout) return;

			fadeInAnimationRef.current.from('.fade-in', {
				opacity: 0,
				scale: 1.2,
				duration: 0.6,
			});
			fadeInAnimationRef.current.play();
		},
		{
			dependencies: [layout],
			scope: fadeInContainerRef,
		}
	);

	useEffect(() => {
		if (positionIsLoading && !location) return;

		if (!positionIsLoading && location && !mobileWidth && greetings)
			setLayout('primary');
		else if (
			(!positionIsLoading && location && mobileWidth && greetings) ||
			(!positionIsLoading && !location && greetings)
		)
			setLayout('secondary');
	}, [positionIsLoading, location, mobileWidth, greetings]);

	return (
		<Box boxRef={fadeInContainerRef} className={headerClass} tag='header'>
			{layout === 'primary' && (
				<>
					<Position />
					<Greetings />
					<DateAndTime />
				</>
			)}
			{layout === 'secondary' && (
				<>
					<Greetings />
					<DateAndTime layout='secondary-layout' />
				</>
			)}

			<Control />
		</Box>
	);
}

export default InfoDisplay;
