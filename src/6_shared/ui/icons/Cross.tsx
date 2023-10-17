import React from "react";
import cx from "classnames";

interface P {
	fill?: any;
	classNames?: any;
}

const Cross = ({ fill, classNames }: P) => {
	return (
		<svg
			className={cx(classNames)}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L10 8.93934L14.2197 4.71967C14.5126 4.42678 14.9874 4.42678 15.2803 4.71967C15.5732 5.01256 15.5732 5.48744 15.2803 5.78033L11.0607 10L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L10 11.0607L5.78033 15.2803C5.48744 15.5732 5.01256 15.5732 4.71967 15.2803C4.42678 14.9874 4.42678 14.5126 4.71967 14.2197L8.93934 10L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
				fill="currentcolor"
			/>
		</svg>
	);
};

export default Cross;
