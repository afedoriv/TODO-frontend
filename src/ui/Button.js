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
			onClick={(e) => onClick?.(e)}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
