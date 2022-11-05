import React, { useState } from "react";
import { Avatar, Box, Button, Chip, Divider, Typography,} from "@mui/material";

const Hooks = () => {
	const [array, setArray] = useState([
		{
			name: "John Doe",
			money: 100,
		},
		{
			name: "Alfredo Mcdanie",
			money: 100,
		},
		{
			name: "Madelynn Gonzales",
			money: 100,
		},
	]);

	/**
	 * DOCUMENT: This function is used to update second array of the state. <br>
	 * Triggered: when click the button <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleUpdateState = () => {
		const [first, second, third] = array;
		second.money = Math.floor(Math.random() * 1000);
		setArray([first, second, third]);
	};

	return (
		<Box>
			<Box>
				<Typography variant="h4">Hooks Page</Typography>

				<Divider style={{ margin: "20px 0" }} />
			</Box>
			<Box
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-evenly",
					gap: 20,
					margin: "0 auto",
				}}
			>
				{array.map((arr, index) => (
					<Box key={index} style={{ textAlign: "center" }}>
						<Avatar
							alt={arr.name}
							src={`https://avatars.dicebear.com/api/adventurer/${arr.name}.svg`}
							style={{ height: "150px", width: "150px" }}
						/>
						<Chip label={arr.money} variant="outlined" size="large" />
					</Box>
				))}
			</Box>
			<Box style={{ margin: "20px 0", textAlign: "center" }}>
				<Button
					style={{
						padding: "12px 38px",
						fontSize: "25px",
						borderRadius: "10px",
						border: "2px solid #22215b",
						backgroundColor: "#22215b",
						minWidth: "350px",
					}}
					variant="contained"
					onClick={handleUpdateState}
				>
					Update State
				</Button>
			</Box>
		</Box>
	);
};

export default Hooks;
