import Box from '../../ui/Box';
import Image from '../../ui/Image';
import alertIcon from '../../assets/images/icons/icon-alert.jpg';
import './toast.css';

function Toast({ message }) {
	return (
		<Box className='alert'>
			<Image src={alertIcon} alt='Alert Icon' />

			<p className='notification'>{message}</p>
		</Box>
	);
}

export default Toast;
