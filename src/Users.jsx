import React, { Component } from "react";
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import Form from "./Form.jsx";
import moment from "moment";

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddUser: false,
			users: [],
		};
	}
    userRef = React.createRef();

    /**
    * DOCUMENT: This function is used to add new user. <br>
    * Triggered: when submitting a form <br>
    * Last Updated Date: November 3, 2022
    * @function
    * @memberOf Users
    * @param {object} user - {fullName,dateOfBirth,emailAddress,contactNumber,aboutMyself}.
    * @author Mel
    */
	handleNewUser = (user) => {
		this.setState((prevState) => ({ users: [...prevState.users, user] }));
	};

    /**
    * DOCUMENT: This function is used to toggle open the add new user form. <br>
    * Triggered: when clicking the add user button <br>
    * Last Updated Date: November 3, 2022
    * @function
    * @memberOf Users
    * @param {} {}.
    * @author Mel
    */
	handleToggleAddNewUser = () => {
		this.setState((prevState) => ({ showAddUser: !prevState.showAddUser }));
	};

    componentDidUpdate() {
        this.userRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

	render() {
		return (
			<>
				<Container maxWidth="lg" sx={{ margin: "20px auto" }}>
					<Grid container >
                        <Grid item xs={6}>
							<Typography variant="h4">User Lists</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: "right" }}>
							<Button
								variant="outlined"
								color={!this.state.showAddUser ? "primary" : "error"}
								onClick={this.handleToggleAddNewUser}
							>
								{!this.state.showAddUser ? "Add User" : "Cancel"}
							</Button>
						</Grid>
						<Grid item xs={12}>
							{this.state.showAddUser ? (
								<Form handleNewUser={this.handleNewUser} />
							) : null}
						</Grid>

						<Grid item xs={12}>
							<Grid container spacing={2} ref={this.userRef}>
								{this.state.users.length
									? this.state.users.map((user, index) => (
											<Grid item key={index}>
												<Card  sx={{ maxWidth: 345 }}>
													<CardActionArea>
														<CardMedia
															component="img"
															height="300"
															image={`https://robohash.org/${user.fullName}`}
															alt={user.fullName}
														/>
														<CardContent>
															<Typography
																gutterBottom
																variant="h4"
																component="div"
															>
																{user.fullName}
															</Typography>
															<Typography
																gutterBottom
																variant="subtitle1"
																sx={{ margin: 0 }}
															>
																{moment(user.dateOfBirth).format("LL")}
															</Typography>
															<Typography
																gutterBottom
																variant="caption"
																color="text.secondary"
															>
																Date of Birth
															</Typography>
															<Typography
																gutterBottom
																variant="subtitle1"
																sx={{ margin: 0 }}
															>
																{user.emailAddress}
															</Typography>
															<Typography
																gutterBottom
																variant="caption"
																color="text.secondary"
															>
																Email Address
															</Typography>
															<Typography
																gutterBottom
																variant="subtitle1"
																sx={{ margin: 0 }}
															>
																{user.contactNumber}
															</Typography>
															<Typography
																gutterBottom
																variant="caption"
																color="text.secondary"
															>
																Contact Number
															</Typography>
															<Divider sx={{ margin: "5px 0" }} />
															<Typography
																gutterBottom
																variant="caption"
																color="text.secondary"
															>
																About Myself
															</Typography>
															<Typography
																gutterBottom
																variant="subtitle2"
																sx={{ margin: 0 }}
															>
																{user.aboutMyself}
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Grid>
									  ))
									: null}
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</>
		);
	}
}

export default Users;
