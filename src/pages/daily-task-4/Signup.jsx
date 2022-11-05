import { Box, Container, Divider, Typography } from "@mui/material";
import React, { Component } from "react";
import Form from "../../components/daily-task-4/Form.jsx";

class Signup extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container maxWidth="lg" style={{ marginTop: "20px" }}>
				<Box>
					<Typography variant="h4">Account Signup</Typography>
					<Divider style={{ margin: "20px 0" }} />
				</Box>
				<Form handleNewUser={this.props.handleNewUser} />
			</Container>
		);
	}
}

export default Signup;
