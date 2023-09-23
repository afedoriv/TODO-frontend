function Box({ tag, className, children }) {
	const Tag = tag ? tag : 'div';

	return <Tag className={className}>{children}</Tag>;
}

export default Box;
