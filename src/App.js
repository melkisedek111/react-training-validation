import React, { Component } from "react";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import Axios from "axios";

import Navbar from "./components/Navbar.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import GoogleMap from "./pages/GoogleMap.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Signup from "./pages/Signup.jsx";
import AboutUs from "./pages/AboutUs.jsx";
const theme = createTheme({
	typography: {
		fontFamily: ["Poppins"].join(","),
	},
});
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			isSignupSuccess: false,
		};
	}
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
		this.setState((prevState) => ({
			users: [...prevState.users, user],
			isSignupSuccess: true,
		}));
	};

	/**
	 * DOCUMENT: This function is used toggle status of signup. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 4, 2022
	 * @function
	 * @memberOf Users
	 * @param {}  - {}.
	 * @author Mel
	 */
	handleSignupSuccess = () => {
		this.setState({ isSignupSuccess: false });
	};

	render() {
		return (
			<ThemeProvider theme={theme}>
				<div>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/contact-us"
							element={
								<ContactUs
									users={this.state.users}
									isSignupSuccess={this.state.isSignupSuccess}
									handleSignupSuccess={this.handleSignupSuccess}
								/>
							}
						/>
						<Route
							path="/signup"
							element={<Signup handleNewUser={this.handleNewUser} />}
						/>
						<Route path="/google-map" element={<GoogleMap />} />
						<Route path="/about-us" element={<AboutUs />} />
					</Routes>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
