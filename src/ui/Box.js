function Box({ tag, boxRef, className, children }) {
	const Tag = tag || 'div';

	const properties = boxRef ? { className, ref: boxRef } : { className };

	return <Tag {...properties}>{children}</Tag>;
}

export default Box;
