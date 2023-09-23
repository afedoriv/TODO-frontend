function Button({
	type = 'button',
	disabled = false,
	className,
	onClick,
	children,
}) {
	return (
		<button
			className={className}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
