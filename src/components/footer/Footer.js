import Attribution from './Attribution';
import { getYear } from '../../utils/helpers';
import './footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<p className='paragraph'>TODO, {getYear()}</p>
			<Attribution />
		</footer>
	);
}

export default Footer;
