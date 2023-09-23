import './loader.css';

function Loader({ type = 'primary' }) {
	const loaderClass = type === 'primary' ? 'loader' : 'loader secondary';

	return (
		<div className={loaderClass}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Loader;
