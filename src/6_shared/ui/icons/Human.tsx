import React from "react";
import cx from "classnames";

interface P {
	fill?: any;
	classNames?: any;
}

const Human = ({ fill, classNames }: P) => {
	return (
		<svg
			className={cx(classNames)}
			width="28"
			height="28"
			viewBox="0 0 28 28"
			style={{ fill: "currentColor" }}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17.5 8.5C17.5 6.56603 15.934 5 14 5C12.066 5 10.5 6.56603 10.5 8.5C10.5 10.434 12.066 12 14 12C15.934 12 17.5 10.434 17.5 8.5ZM19.5 8.5C19.5 11.5385 17.0385 14 14 14C10.9615 14 8.5 11.5385 8.5 8.5C8.5 5.46147 10.9615 3 14 3C17.0385 3 19.5 5.46147 19.5 8.5ZM7 20.6429C7 21.5862 6.91987 21.5 7.45588 21.5H21.0441C21.5801 21.5 21.5 21.5862 21.5 20.6429C21.5 18.3547 18.196 17 14.25 17C10.304 17 7 18.3547 7 20.6429ZM5 20.6429C5 16.7626 9.29892 15 14.25 15C19.2011 15 23.5 16.7626 23.5 20.6429C23.5 22.6593 22.7189 23.5 21.0441 23.5H7.45588C5.78111 23.5 5 22.6593 5 20.6429Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Human;
