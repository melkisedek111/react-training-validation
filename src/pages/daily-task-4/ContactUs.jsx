import {
	Alert,
	Box,
	Container,
	Divider,
	Grid,
	Snackbar,
	Typography,
} from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../../components/daily-task-4/ContactCard.jsx";

class ContactUs extends Component {
	constructor(props) {
		super(props);
	}

    /**
	 * DOCUMENT: This function is used handle signup status that will make the status to false. <br>
	 * Triggered: when submitting the form <br>
	 * Last Updated Date: November 4, 2022
	 * @function
	 * @memberOf Users
	 * @param {}  - {}.
	 * @author Mel
	 */
	handleSignupSuccess = () => {
		this.props.handleSignupSuccess();
	};

	render() {
		return (
			<>
				<Container
					maxWidth="lg"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					<Box>
						<Typography variant="h4">Contact Us</Typography>

						<Divider style={{ margin: "20px 0" }} />
					</Box>
					<Box>
						<Grid container spacing={2}>
							{this.props.users.length ? (
								this.props.users.map((user, index) => (
									<Grid key={index} item xs={4}>
										<ContactCard
											firstName={user.firstName}
											lastName={user.lastName}
											dateOfBirth={user.dateOfBirth}
											emailAddress={user.emailAddress}
											contactNumber={user.contactNumber}
											aboutMyself={user.aboutMyself}
											address={user.address}
											level={user.level}
											jobTitle={user.jobTitle}
										/>
									</Grid>
								))
							) : (
								<Grid item xs={12}>
									<Typography variant="h4">No Available Contacts</Typography>
								</Grid>
							)}
						</Grid>
					</Box>
                    <Box style={{margin: "50px 0"}}>
                        <Typography variant="subtitle1">Please go to <Link to="/daily-task-4/signup">Signup Page</Link> to create an account.</Typography>
                    </Box>
					{this.props.isSignupSuccess ? (
						<Snackbar
							open={this.props.isSignupSuccess}
							autoHideDuration={6000}
							onClose={this.handleSignupSuccess}
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						>
							<Alert
								onClose={this.handleSignupSuccess}
								severity="success"
								sx={{ width: "100%" }}
							>
								Account successfully created!
							</Alert>
						</Snackbar>
					) : null}
				</Container>
			</>
		);
	}
}

export default ContactUs;
