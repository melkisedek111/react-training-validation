import React from "react";
import withRandomColor from "./withRandomColor.jsx";

const ColorPage = ({ color, randomBackgroundColor }) => {
	return (
		<div
			onClick={randomBackgroundColor}
			style={{
				backgroundColor: `#${color}`,
				height: "100%",
				width: "100%",
				fontFamily: "Poppins",
			}}
		>
			Click the whitespace to change the background color
		</div>
	);
};

export default withRandomColor(ColorPage);
