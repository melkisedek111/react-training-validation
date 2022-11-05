import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Main = ({links}) => {

	return (
		<Container
			maxWidth="lg"
			style={{ marginTop: "20px", marginBottom: "20px" }}
		>
			<Box>
				<Typography variant="h4">React Training - Daily Tasks</Typography>
				<Divider style={{ margin: "20px 0" }} />
				<Box
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 20,
						justifyContent: "space-evenly",
					}}
				>
					{links.map((link, index) => (
						<Link
							style={{ textDecoration: "none", color: "inherit" }}
							to={link.path}
							key={index}
						>
							<Button
								style={{
									padding: "12px 38px",
									fontSize: "25px",
									borderRadius: "25px",
									border: "2px solid #22215b",
									backgroundColor: "#22215b",
									minWidth: "350px",
								}}
								variant="contained"
							>
								{link.task}
							</Button>
						</Link>
					))}
				</Box>
			</Box>
		</Container>
	);
};

export default Main;
