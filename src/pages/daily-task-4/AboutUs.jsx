import { Avatar, Box, Typography } from "@mui/material";
import React, { Component } from "react";

class AboutUs extends Component {
	render() {
		return (
			<Box
				style={{
					width: "100%",
					height: "88.6vh",
				}}
			>
				<Box
					style={{
						backgroundColor: "#eef7fe",
						width: "100%",
						minHeight: "35%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h3"
						style={{ fontWeight: 900, color: "#22215b" }}
					>
						WE ARE ROYAL DIAMOND TEAM
					</Typography>
				</Box>
				<Box
					style={{
						width: "800px",
						minHeight: "30%",
						margin: "0 auto",
						padding: "30px 0",
					}}
				>
					<Typography
						variant="h5"
						style={{
							fontWeight: 900,
							textAlign: "center",
							marginBottom: "20px",
						}}
					>
						About Us
					</Typography>
					<Typography color="text.secondary" style={{ textAlign: "justify" }}>
						Anim nisi veniam id incididunt elit proident elit veniam irure
						adipisicing laborum. Nisi pariatur eiusmod dolor ad eiusmod aliquip
						aliqua qui ut in Lorem proident enim. Incididunt ex nostrud ea ex
						laboris mollit eiusmod mollit. Consectetur incididunt Lorem sint
						sunt. Anim velit eu ex labore amet sint amet. Consequat aliquip non
						quis nulla. Irure occaecat deserunt commodo nulla fugiat dolor
						pariatur do ea deserunt. Nostrud consectetur anim velit velit minim
						culpa aliqua aute laborum sit officia. Eu cupidatat incididunt
						mollit ex occaecat ea quis deserunt. Commodo aute exercitation ex
						ullamco minim magna eu enim aliqua cupidatat cupidatat ex. Nisi
						occaecat est eiusmod adipisicing. Anim elit tempor qui veniam
						officia velit aliquip ullamco eu et magna sit proident. Officia sint
						Lorem sint ad officia mollit incididunt dolor laboris.
					</Typography>
				</Box>
				<Box
					style={{
						backgroundColor: "#22215b",
						width: "100%",
						color: "#fff",
						padding: "30px 0",
						minHeight: "35%",
					}}
				>
					<Typography
						variant="h5"
						style={{
							fontWeight: 900,
							textAlign: "center",
							marginBottom: "20px",
						}}
					>
						Meet the team
					</Typography>
					<Box
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							padding: "0 100px",
						}}
					>
						<Box style={{ textAlign: "center" }}>
							<Avatar
								src="https://avatars.dicebear.com/api/avataaars/zimmer.svg"
								sx={{
									backgroundColor: "#eef7fe",
									height: "160px",
									width: "160px",
								}}
							/>
							<Typography variant="h6" style={{ fontWeight: 600 }}>
								Zimmer
							</Typography>
						</Box>
						<Box style={{ textAlign: "center" }}>
							<Avatar
								src="https://avatars.dicebear.com/api/avataaars/Jane.svg"
								sx={{
									backgroundColor: "#eef7fe",
									height: "160px",
									width: "160px",
								}}
							/>
							<Typography variant="h6" style={{ fontWeight: 600 }}>
								Jane
							</Typography>
						</Box>
						<Box style={{ textAlign: "center" }}>
							<Avatar
								src="https://avatars.dicebear.com/api/avataaars/Neelash.svg"
								sx={{
									backgroundColor: "#eef7fe",
									height: "160px",
									width: "160px",
								}}
							/>
							<Typography variant="h6" style={{ fontWeight: 600 }}>
								Neelash
							</Typography>
						</Box>
						<Box style={{ textAlign: "center" }}>
							<Avatar
								src="https://avatars.dicebear.com/api/avataaars/JuanCarlos.svg"
								sx={{
									backgroundColor: "#eef7fe",
									height: "160px",
									width: "160px",
								}}
							/>
							<Typography variant="h6" style={{ fontWeight: 600 }}>
								Juan Carlos
							</Typography>
						</Box>
						<Box style={{ textAlign: "center" }}>
							<Avatar
								src="https://avatars.dicebear.com/api/avataaars/Dendi.svg"
								sx={{
									backgroundColor: "#eef7fe",
									height: "160px",
									width: "160px",
								}}
							/>
							<Typography variant="h6" style={{ fontWeight: 600 }}>
								Dendi
							</Typography>
						</Box>
						<Box style={{ textAlign: "center" }}>
							<Avatar
								src="https://avatars.dicebear.com/api/avataaars/Jenkins.svg"
								sx={{
									backgroundColor: "#eef7fe",
									height: "160px",
									width: "160px",
								}}
							/>
							<Typography variant="h6" style={{ fontWeight: 600 }}>
								Jenkins
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default AboutUs;
