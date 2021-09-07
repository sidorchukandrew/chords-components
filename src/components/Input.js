import PropTypes from "prop-types";

export default function Input({
	placeholder,
	onEnter,
	onChange,
	value,
	className,
	variant,
	fullWidth,
	type,
}) {
	const handleKeyUp = (event) => {
		if (event.keyCode === 13) {
			onEnter?.();
		}
	};

	let baseClasses = `outline-none focus:outline-none text-base ${
		fullWidth && "w-full"
	} ${className}`;

	if (variant === "outlined") {
		return (
			<input
				placeholder={placeholder}
				value={value}
				type={type}
				className={
					`p-2 rounded-md border border-gray-300 bg-gray-50 ` +
					`hover:bg-gray-100 focus:bg-gray-100 transition-all ${baseClasses}`
				}
				onKeyUp={handleKeyUp}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		);
	} else if (variant === "open") {
		return (
			<input
				placeholder={placeholder}
				value={value}
				type={type}
				className={`p-2 transition-all ${baseClasses}`}
				onKeyUp={handleKeyUp}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		);
	} else if (variant === "underlined") {
		return (
			<input
				placeholder={placeholder}
				value={value}
				type={type}
				className={`p-2 border-b border-gray-300 transition-all ${baseClasses}`}
				onKeyUp={handleKeyUp}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		);
	} else if (variant === "pill") {
		return (
			<input
				placeholder={placeholder}
				value={value}
				type={type}
				className={
					`px-6 py-2 rounded-full border border-gray-300 bg-gray-50 ` +
					`hover:bg-gray-100 focus:bg-gray-100 transition-all ${baseClasses}`
				}
				onKeyUp={handleKeyUp}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		);
	} else {
		return null;
	}
}

Input.defaultProps = {
	className: "",
	placeholder: "",
	variant: "outlined",
	fullWidth: false,
	type: "text",
};

Input.propTypes = {
	placeholder: PropTypes.string,
	onEnter: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.any,
	variant: PropTypes.string,
	className: PropTypes.string,
	fullWidth: PropTypes.bool,
	type: PropTypes.string,
};
