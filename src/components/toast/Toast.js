import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Box from '../../ui/Box';
import Image from '../../ui/Image';
import alertIcon from '../../assets/images/icons/icon-alert.jpg';
import { ANIMATION_MOVE_DURATION, ANIMATION_DELAY } from '../../config/Config';
import './toast.css';

function Toast({ message, onComplete }) {
	const toastAnimationRef = useRef(null);
	const toastContainerRef = useRef(null);

	useGSAP(
		() => {
			toastAnimationRef.current = gsap
				.timeline({ onComplete: onComplete })
				.from(toastContainerRef.current, {
					top: '-15vh',
					ease: 'back(1)',
					duration: ANIMATION_MOVE_DURATION,
					repeat: 1,
					repeatDelay: ANIMATION_DELAY,
					yoyo: true,
				})
				.play();
		},
		{
			dependencies: [message],
			scope: toastContainerRef,
		}
	);

	return createPortal(
		<Box boxRef={toastContainerRef} className='alert'>
			<Image src={alertIcon} alt='Alert Icon' />

			<p className='notification'>{message}</p>
		</Box>,
		document.body
	);
}

export default Toast;
