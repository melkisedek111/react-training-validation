import {
	Avatar,
	Box,
	Button,
	Card,
	Chip,
	Divider,
	Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import CallIcon from "@mui/icons-material/Call";
const ContactCard = ({
	firstName,
	lastName,
	emailAddress,
	contactNumber,
	aboutMyself,
	address,
	level,
	jobTitle,
}) => {
	return (
		<Card
			style={{ padding: "25px", borderRadius: "25px" }}
			sx={{ maxWidth: "350px" }}
		>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar
					src={`https://avatars.dicebear.com/api/avataaars/${firstName}${lastName}.svg`}
					sx={{ height: "150px", width: "150px", backgroundColor: "#eef7fe" }}
				/>
				<Box style={{ margin: "10px 0" }}>
					<Typography
						style={{
							borderRadius: "5px",
							padding: "5px 30px",
							backgroundColor: "#eef7fe",
							fontSize: "12px",
							fontWeight: 300,
						}}
					>
						{level}
					</Typography>
				</Box>
				<Box style={{ textAlign: "center", marginBottom: "10px" }}>
					<Typography
						variant="subtitle1"
						sx={{ color: "#22215b", fontWeight: 600 }}
					>
						{firstName} {lastName}
					</Typography>
					<Typography
						variant="subtitle2"
						sx={{ color: "#22215b", fontWeight: 300 }}
					>
						{jobTitle}
					</Typography>
				</Box>
				<Box style={{ textAlign: "justify", margin: "10px 0" }}>
					<Typography
						variant="caption"
						sx={{ color: "#343374", fontWeight: 300 }}
					>
						{aboutMyself}
					</Typography>
				</Box>
				<Divider style={{ width: "100%" }} />
				<Box
					style={{
						color: "#22215b",
						fontSize: "9px",
						width: "100%",
						display: "flex",
						alignItems: "center",
						margin: "10px 0",
					}}
				>
					<AttachEmailIcon style={{ fontSize: "15px", marginRight: "5px" }} />
					<Typography variant="caption" style={{ fontWeight: 300 }}>
						{emailAddress}
					</Typography>
				</Box>
				<Divider style={{ width: "100%" }} />
				<Box
					style={{
						color: "#22215b",
						fontSize: "9px",
						width: "100%",
						display: "flex",
						alignItems: "center",
						margin: "10px 0",
					}}
				>
					<EditLocationIcon style={{ fontSize: "15px", marginRight: "5px" }} />
					<Typography variant="caption" style={{ fontWeight: 300 }}>
						{address}
					</Typography>
				</Box>
				<Divider style={{ width: "100%" }} />
				<Box
					style={{
						color: "#22215b",
						fontSize: "9px",
						width: "100%",
						display: "flex",
						alignItems: "center",
						margin: "10px 0",
					}}
				>
					<CallIcon style={{ fontSize: "15px", marginRight: "5px" }} />
					<Typography variant="caption" style={{ fontWeight: 300 }}>
						+63 ({contactNumber})
					</Typography>
				</Box>
				<Divider style={{ width: "100%" }} />
				<Box
					style={{
						padding: "0 20px",
						color: "#22215b",
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						margin: "30px 0",
					}}
				>
					<TwitterIcon />
					<InstagramIcon />
					<LinkedInIcon />
					<FacebookIcon />
					<PinterestIcon />
					<YouTubeIcon />
				</Box>
				<Box
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Button
						style={{
							color: "#22215b",
							padding: "12px 38px",
							fontSize: "12px",
							borderRadius: "10px",
							border: "2px solid #22215b",
						}}
						variant="outlined"
					>
						Message
					</Button>
					<Button
						style={{
							padding: "12px 38px",
							fontSize: "12px",
							borderRadius: "10px",
							border: "2px solid #22215b",
							backgroundColor: "#22215b",
						}}
						variant="contained"
					>
						Connect
					</Button>
				</Box>
			</Box>
		</Card>
	);
};

export default ContactCard;
