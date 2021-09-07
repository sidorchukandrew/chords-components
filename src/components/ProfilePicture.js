import PropTypes from "prop-types";

export default function ProfilePicture({ url, size, className }) {
	return (
		<div className={`${SIZES[size]} ${className}`}>
			<div
				className={`w-full h-full rounded-full bg-gray-200 `}
				style={{
					backgroundImage: `url('${url}')`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></div>
		</div>
	);
}

ProfilePicture.defaultProps = {
	className: "",
	size: "sm",
};

ProfilePicture.propTypes = {
	className: PropTypes.string,
	url: PropTypes.string.isRequired,
	size: PropTypes.string,
};

const SIZES = {
	xs: "w-8 h-8",
	sm: "w-12 h-12",
	md: "w-16 h-16",
	lg: "w-20 h-20",
	xl: "w-32 h-32",
	"2xl": "w-40 h-40",
};
