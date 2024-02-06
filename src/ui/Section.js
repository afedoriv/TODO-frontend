import Box from './Box';
import Loader from '../components/loader/Loader';
import Toast from '../components/toast/Toast';
import Footer from '../components/footer/Footer';
import '../assets/styles/index.css';

function Section({ loader, error, handleError, children }) {
	return (
		<Box tag='section' className='main-content'>
			{error && <Toast message={error} onComplete={handleError} />}

			{loader && <Loader />}

			{children}

			<Footer />
		</Box>
	);
}

export default Section;
