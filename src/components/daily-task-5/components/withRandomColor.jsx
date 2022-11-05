import React, { useState } from "react";

const withRandomColor = (WrapperComponent) => (props) => {
	const [color, setColor] = useState("#fff");

	/**
	 * DOCUMENT: This function is used to get random color. <br>
	 * Triggered: when click the button <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const randomBackgroundColor = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		setColor(randomColor);
	};

	return (
		<WrapperComponent
			randomBackgroundColor={randomBackgroundColor}
			color={color}
			{...props}
		/>
	);
};

export default withRandomColor;
