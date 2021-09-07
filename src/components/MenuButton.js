import PropTypes from "prop-types";
import { SIZES } from "./Button";

export default function MenuButton({ onClick, children, className, color, size }) {
	return (
		<button
			className={`flex items-center justify-start font-semibold outline-none focus:outline-none w-full 
				 ${TEXT_COLORS[color]} hover:bg-gray-100 focus:bg-gray-100 transition-colors ${SIZES[size]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

MenuButton.defaultProps = {
	className: "",
	color: "black",
	size: "sm",
};

MenuButton.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
};

export const TEXT_COLORS = {
	red: "text-red-600",
	blue: "text-blue-600",
	green: "text-green-600",
	black: "text-black",
	purple: "text-purple-600",
	indigo: "text-indigo-600",
	yellow: "text-yellow-600",
	pink: "text-pink-600",
	black: "text-black",
	white: "text-white",
	gray: "text-gray-600",
};
