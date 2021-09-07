import "../index.css";

import BeatLoader from "react-spinners/BeatLoader";
import PropTypes from "prop-types";

export default function Button({
	children,
	onClick,
	className,
	fullWidth,
	variant,
	color,
	size,
	disabled,
	loading,
}) {
	let baseClasses = `${fullWidth && "w-full"} outline-none focus:outline-none font-semibold `;
	let props = { children, onClick, className, color, disabled, size, loading, baseClasses };

	if (variant === "solid") {
		return buildSolidButton(props);
	} else if (variant === "open") {
		return buildOpenButton(props);
	} else if (variant === "outlined") {
		return buildOutlinedButton(props);
	} else if (variant === "gray") {
		return buildGrayButton(props);
	} else if (variant === "text") {
		return buildTextButton(props);
	} else if (variant === "pill") {
		return buildPillButton(props);
	} else {
		return null;
	}
}

function buildSolidButton({
	children,
	onClick,
	className,
	color,
	size,
	disabled,
	loading,
	baseClasses,
}) {
	let buttonClasses = `transition-all rounded-md ${SIZES[size]} ${baseClasses} ${className}`;

	if (disabled) {
		return (
			<button className={`text-gray-500 bg-gray-100 ${buttonClasses}`} disabled={disabled}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={`${BACKGROUND_COLORS[color]} text-white ${buttonClasses}`}
				onClick={!loading ? onClick : () => {}}
			>
				{loading ? (
					<div className="relative">
						<span className="invisible">{children}</span>
						<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
							<BeatLoader color="white" size={8} />
						</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}
}

function buildOpenButton({
	children,
	onClick,
	className,
	color,
	size,
	disabled,
	loading,
	baseClasses,
}) {
	let buttonClasses = `transition-all rounded-md ${SIZES[size]} ${baseClasses} ${className}`;

	if (disabled) {
		return (
			<button className={`text-gray-500 bg-gray-100 ${buttonClasses}`} disabled={disabled}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={`${TEXT_COLORS[color]} hover:bg-gray-100 focus:bg-gray-100 ${buttonClasses}`}
				onClick={!loading ? onClick : () => {}}
			>
				{loading ? (
					<div className="relative">
						<span className="invisible">{children}</span>
						<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
							<BeatLoader color="gray" size={8} />
						</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}
}

function buildOutlinedButton({
	children,
	onClick,
	className,
	color,
	size,
	disabled,
	loading,
	baseClasses,
}) {
	let buttonClasses = `transition-all rounded-md border border-gray-300 ${SIZES[size]} ${baseClasses} ${className}`;

	if (disabled) {
		return (
			<button className={`text-gray-500 bg-gray-100 ${buttonClasses}`} disabled={disabled}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={`${TEXT_COLORS[color]} hover:bg-gray-100 focus:bg-gray-100 ${buttonClasses}`}
				onClick={!loading ? onClick : () => {}}
			>
				{loading ? (
					<div className="relative">
						<span className="invisible">{children}</span>
						<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
							<BeatLoader color="gray" size={8} />
						</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}
}

function buildGrayButton({
	children,
	onClick,
	className,
	color,
	size,
	disabled,
	loading,
	baseClasses,
}) {
	let buttonClasses = `transition-all rounded-md  ${SIZES[size]} ${baseClasses} ${className}`;

	if (disabled) {
		return (
			<button className={`bg-gray-100 text-gray-500 ${buttonClasses}`} disabled={disabled}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={` ${TEXT_COLORS[color]} bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 ${buttonClasses}`}
				onClick={!loading ? onClick : () => {}}
			>
				{loading ? (
					<div className="relative">
						<span className="invisible">{children}</span>
						<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
							<BeatLoader color="gray" size={8} />
						</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}
}

function buildTextButton({
	children,
	onClick,
	className,
	color,
	size,
	disabled,
	loading,
	baseClasses,
}) {
	let buttonClasses = `transition-all rounded-md ${SIZES[size]} ${baseClasses} ${className}`;

	if (disabled) {
		return (
			<button className={`text-gray-500  ${buttonClasses}`} disabled={disabled}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={`${TEXT_COLORS[color]} ${buttonClasses}`}
				onClick={!loading ? onClick : () => {}}
			>
				{loading ? (
					<div className="relative">
						<span className="invisible">{children}</span>
						<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
							<BeatLoader color="gray" size={8} />
						</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}
}

function buildPillButton({ children, onClick, className, color, disabled, loading, baseClasses }) {
	let buttonClasses = `transition-all rounded-full py-2 px-6 ${baseClasses} ${className}`;

	if (disabled) {
		return (
			<button className={`text-gray-500 bg-gray-100 ${buttonClasses}`} disabled={disabled}>
				{children}
			</button>
		);
	} else {
		return (
			<button
				className={`${BACKGROUND_COLORS[color]} text-white ${buttonClasses}`}
				onClick={!loading ? onClick : () => {}}
			>
				{loading ? (
					<div className="relative">
						<span className="invisible">{children}</span>
						<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
							<BeatLoader color="white" size={8} />
						</div>
					</div>
				) : (
					children
				)}
			</button>
		);
	}
}

Button.defaultProps = {
	className: "",
	fullWidth: false,
	variant: "solid",
	color: "blue",
	size: "sm",
	disabled: false,
	loading: false,
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	variant: PropTypes.string,
	fullWidth: PropTypes.bool,
	color: PropTypes.string,
	size: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
};

const BACKGROUND_COLORS = {
	red: "bg-red-500 hover:bg-red-600 focus:bg-red-600",
	blue: "bg-blue-500 hover:bg-blue-600 focus:bg-blue-600",
	green: "bg-green-500 hover:bg-green-600 focus:bg-green-600",
	white: "bg-white",
	black: "bg-black",
	purple: "bg-purple-500 hover:bg-purple-600 focus:bg-purple-600",
	indigo: "bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600",
	yellow: "bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600",
	pink: "bg-pink-500 hover:bg-pink-600 focus:bg-pin-600",
};

const TEXT_COLORS = {
	red: "text-red-700",
	blue: "text-blue-700",
	green: "text-green-700",
	black: "text-black",
	purple: "text-purple-700",
	indigo: "text-indigo-700",
	yellow: "text-yellow-700",
	pink: "text-pink-700",
	black: "text-black",
	white: "text-white",
	gray: "text-gray-700",
};

export const SIZES = {
	xs: "px-1 py-1",
	sm: "px-2 py-2",
	md: "px-3 py-3",
};
