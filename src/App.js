import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./pages/daily-task-4/Home.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import GoogleMap from "./pages/daily-task-4/GoogleMap.jsx";
import ContactUs from "./pages/daily-task-4/ContactUs.jsx";
import Signup from "./pages/daily-task-4/Signup.jsx";
import AboutUs from "./pages/daily-task-4/AboutUs.jsx";
import Main from "./pages/Main.jsx";
import DailyTaskFiveHome from "./pages/daily-task-5/DailyTaskFiveHome.jsx";
import HooksPage from "./pages/daily-task-5/HooksPage.jsx";
import FunctionalComponentPage from "./pages/daily-task-5/FunctionalComponentPage.jsx";

import "./App.css";
import LodashPage from "./pages/daily-task-5/LodashPage.jsx";

const theme = createTheme({
	typography: {
		fontFamily: ["Poppins", "Fira Code"].join(","),
	},
});
const App = () => {
	const [users, setUsers] = useState([]);
	const [isSignupSuccess, setIsSignupSuccess] = useState(false);

	/**
	 * DOCUMENT: This function is used to add new user. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 3, 2022
	 * @function
	 * @memberOf Users
	 * @param {object} user - {fullName,dateOfBirth,emailAddress,contactNumber,aboutMyself}.
	 * @author Mel
	 */
	const handleNewUser = (user) => {
		setUsers([...users, user]);
		setIsSignupSuccess(true);
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
	const handleSignupSuccess = () => {
		setIsSignupSuccess(false);
	};

	const links = [
		{
			path: "/daily-task-4",
			task: "Daily Task 4",
			Component: Home,
			label: "Home",
			subPaths: [
				{
					path: "/contact-us",
					Component: ContactUs,
					label: "Contact Us",
					props: { users, isSignupSuccess, handleSignupSuccess },
				},
				{
					path: "/signup",
					Component: Signup,
					props: { handleNewUser },
					label: "Sign Up",
				},
				{
					path: "/google-map",
					Component: GoogleMap,
					props: {},
					label: "Google Map",
				},
				{
					path: "/about-us",
					Component: AboutUs,
					props: {},
					label: "About Us",
				},
			],
		},
		{
			path: "/daily-task-5",
			task: "Daily Task 5",
			props: {},
			Component: DailyTaskFiveHome,
			label: "Daily Task 5 (Home)",
			subPaths: [
				{
					path: "/hooks-practice",
					Component: HooksPage,
					label: "Hooks Practice",
					props: { },
				},
				{
					path: "/functional-component",
					Component: FunctionalComponentPage,
					label: "Functional Component",
					props: { },
				},
				{
					path: "/lodash",
					Component: LodashPage,
					label: "Lodash",
					props: { },
				},
			],
		},
	];
	console.log({users})
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Navbar links={links} />
				<Routes>
					<Route path="/" element={<Main links={links} />} />
					{links.map(
						({ path: mainPath, Component: MainComponent, subPaths }, index) => (
							<Route key={index} path={mainPath} element={<Outlet />}>
								<Route path={mainPath} element={<MainComponent />} />
								{subPaths.map(({ path, Component, props }, index_a) => {
									return (
										<Route
											key={index_a}
											path={mainPath + path}
											element={<Component {...props} />}
										/>
									);
								})}
							</Route>
						)
					)}
				</Routes>
			</div>
		</ThemeProvider>
	);
};

export default App;
