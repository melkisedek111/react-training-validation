import React, { Component } from "react";
import {
	Typography,
	Grid,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	FormHelperText,
	Divider,
	Backdrop,
	CircularProgress,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import dayjs from "dayjs";
import withNavigate from "./withNavigation.jsx";
import {
	FakeAddress,
	FakeContactNumbers,
	FakeDateOfBirths,
	FakeEmails,
	FakeFirstNames,
	FakeLastNames,
} from "../Data.js";

const JobTitles = [
	"Software Developer",
	"Engineer",
	"Network Engineer",
	"Web Developer",
	"Data science",
	"Systems analyst",
	"Database Administrator",
	"Information security",
	"UI / UX Designer",
];

const Levels = ["Beginner", "Intermediate", "Pro"];

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dayValue: dayjs(new Date()),
			firstName: "",
			lastName: "",
			dateOfBirth: "",
			emailAddress: "",
			contactNumber: "",
			aboutMyself: "",
			address: "",
			level: "",
			jobTitle: "",
			errors: {},
			isLoading: false,
		};
	}
	formRef = React.createRef();

	/**
	 * DOCUMENT: This function is used to validate all the field on the user form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 3, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	handleValidation = () => {
		/* default fields */
		const fields = {
			firstName: {
				type: "letter",
				label: "First Name",
			},
			lastName: {
				type: "letter",
				label: "Last Name",
			},
			dateOfBirth: {
				type: "date",
				label: "Date of Birth",
			},
			emailAddress: {
				type: "email",
				label: "Email Address",
			},
			contactNumber: {
				type: "number",
				label: "Contact Number",
			},
			address: {
				type: "mixed",
				label: "Address",
			},
			level: {
				type: "letter",
				label: "Level",
			},
			jobTitle: {
				type: "mixed",
				label: "Job Title",
			},
			aboutMyself: {
				type: "mixed",
				label: "Tell me about yourself",
			},
		};

		/* validation for only letter and spaces */
		const alphabetValidation = /^[a-zA-Z\s]*$/;

		/* validation for email only */
		const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		/* validation for number only */
		const numberValidation = /^[0-9]\d*$/;
		let errors = {};

		/* this loop is used to iterate each of the default fields to check for errors and validations */
		for (const field in fields) {
			const { type, label } = fields[field];
			const value = this.state[field].trim();

			/* check for empty value */
			if (!value) {
				errors[field] = `${label} is empty. Please insert the field.`;
			} else if (type === "letter") {
				/* check if the field is letter only */
				if (!value.match(alphabetValidation)) {
					errors[field] = `${label} must be an alphabet only.`;
				}
			} else if (type === "email") {
				/* check if the field is email only */
				if (!value.match(emailValidation)) {
					errors[
						field
					] = `Your ${label} is invalid, Please provide a valid one.`;
				}
			} else if (type === "number") {
				/* check if the field is number only */
				if (!value.match(numberValidation)) {
					errors[
						field
					] = `Your ${label} is invalid and should include digits only.`;
				} else if (value.length !== 11) {
					errors[field] = `Your ${label} length should be 10.`;
				}
			} else if (type === "date") {
				/* check if the field is date and date should not be greater then today's date */
				if (new Date(value).getTime() > new Date().getTime()) {
					errors[
						field
					] = `Your ${label} should not be greater than date today.`;
				}
			}
		}
		this.setState({ errors });

		return errors;
	};

	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 3, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	handleFieldChange = (event) => {
		const {
			target: { value, name, id },
		} = event;
		this.setState({ [id || name]: value });
	};

	/**
	 * DOCUMENT: This function is used to handle the date value using date picker. <br>
	 * Triggered: when changing the value of date field <br>
	 * Last Updated Date: November 3, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	handleDateChange = (newValue) => {
		this.setState({
			dayValue: newValue,
			dateOfBirth: moment(newValue["$d"]).format("MM/DD/YYYY"),
		});
	};

	/**
	 * DOCUMENT: This function is used to check for errors and submit the form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 3, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	handleFormSubmit = () => {
		const errors = this.handleValidation();
		this.handleGetFakeTexts();
		/* checking for error if no, then submit */
		if (!Object.keys(errors).length) {
			this.props.handleNewUser({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				dateOfBirth: this.state.dateOfBirth,
				emailAddress: this.state.emailAddress,
				contactNumber: this.state.contactNumber,
				aboutMyself: this.state.aboutMyself,
				address: this.state.address,
				level: this.state.level,
				jobTitle: this.state.jobTitle,
			});

			/* this will reset all the fields */
			this.setState({
				firstName: "",
				lastName: "",
				dateOfBirth: "",
				emailAddress: "",
				contactNumber: "",
				aboutMyself: "",
				address: "",
				level: "",
				jobTitle: "",
				dayValue: "",
				isLoading: true,
			});

			setTimeout(() => {
				this.setState({ isLoading: false });
				this.props.useNavigate("/contact-us");
			}, 3000);
		}
	};

	getRandomItems = (array) => Math.floor(Math.random() * array.length);

	/**
	 * DOCUMENT: This function is used generate fake and gibberish text to the form. <br>
	 * Triggered: when clicking the generate fake data button <br>
	 * Last Updated Date: November 4, 2022
	 * @function
	 * @memberOf Users
	 * @param {}  - {}.
	 * @author Mel
	 */
	handleGetFakeTexts = async () => {
		const request = await fetch(
			"https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1"
		);
		const [lorem] = await request.json();
		return lorem;
	};

	/**
	 * DOCUMENT: This function is used generate fake data on the signup form. <br>
	 * Triggered: when clicking the generate fake data button <br>
	 * Last Updated Date: November 4, 2022
	 * @function
	 * @memberOf Users
	 * @param {}  - {}.
	 * @author Mel
	 */
	handleGenerateFakeData = async () => {
		this.setState({ isLoading: true });
		const FakeTexts = await this.handleGetFakeTexts();

		if (FakeTexts) {
			setTimeout(() => {
				this.setState({
					firstName: FakeFirstNames[this.getRandomItems(FakeFirstNames)],
					lastName: FakeLastNames[this.getRandomItems(FakeLastNames)],
					dateOfBirth: FakeDateOfBirths[this.getRandomItems(FakeDateOfBirths)],
					emailAddress: FakeEmails[this.getRandomItems(FakeEmails)],
					contactNumber:
						FakeContactNumbers[this.getRandomItems(FakeContactNumbers)],
					aboutMyself: FakeTexts,
					address: FakeAddress[this.getRandomItems(FakeAddress)],
					level: Levels[this.getRandomItems(Levels)],
					jobTitle: JobTitles[this.getRandomItems(JobTitles)],
					isLoading: false,
				});
			}, 2000);
		}
	};

	componentDidMount() {
		this.formRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		return (
			<Container maxWidth="lg" style={{ padding: "20px 0" }}>
				<Box style={{ maxWidth: "700px", margin: "0 auto" }}>
					<form ref={this.formRef}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									id="firstName"
									name="First Name"
									label="First Name"
									variant="outlined"
									fullWidth
									error={this.state.errors?.firstName ? true : false}
									helperText={this.state.errors?.firstName || ""}
									value={this.state.firstName}
									onChange={this.handleFieldChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="lastName"
									name="Last Name"
									label="Last Name"
									variant="outlined"
									fullWidth
									error={this.state.errors?.lastName ? true : false}
									helperText={this.state.errors?.lastName || ""}
									value={this.state.lastName}
									onChange={this.handleFieldChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DesktopDatePicker
										label="Date of Birth"
										inputFormat="MM/DD/YYYY"
										value={this.state.dateOfBirth}
										onChange={this.handleDateChange}
										renderInput={(params) => (
											<TextField
												name="Date of Birth"
												id="dateOfBirth"
												{...params}
												error={this.state.errors?.dateOfBirth ? true : false}
												helperText={this.state.errors?.dateOfBirth || ""}
												value={this.state.dateOfBirth}
												fullWidth
											/>
										)}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="emailAddress"
									name="Email Address"
									label="Email Address"
									variant="outlined"
									fullWidth
									error={this.state.errors?.emailAddress ? true : false}
									helperText={this.state.errors?.emailAddress || ""}
									value={this.state.emailAddress}
									onChange={this.handleFieldChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="contactNumber"
									label="Contact Number (e.g 09xxxxxxxx)"
									name="Contact Number"
									variant="outlined"
									fullWidth
									error={this.state.errors?.contactNumber ? true : false}
									helperText={this.state.errors?.contactNumber || ""}
									value={this.state.contactNumber}
									onChange={this.handleFieldChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									id="address"
									label="Address"
									name="Address"
									variant="outlined"
									fullWidth
									error={this.state.errors?.address ? true : false}
									helperText={this.state.errors?.address || ""}
									value={this.state.address}
									onChange={this.handleFieldChange}
								/>
							</Grid>
							<Grid item xs={6}>
								<FormControl
									fullWidth
									error={this.state.errors?.level ? true : false}
								>
									<InputLabel id="level">Level</InputLabel>
									<Select
										labelId="level"
										id="level"
										name="level"
										label="Level"
										onChange={this.handleFieldChange}
										value={this.state.level}
									>
										{Levels.map((level, index) => (
											<MenuItem key={index} value={level}>
												{level}
											</MenuItem>
										))}
									</Select>
									{this.state.errors?.level ? (
										<FormHelperText>{this.state.errors?.level}</FormHelperText>
									) : null}
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<FormControl
									fullWidth
									error={this.state.errors?.jobTitle ? true : false}
								>
									<InputLabel id="jobTitle">Job Title</InputLabel>
									<Select
										labelId="jobTitle"
										id="jobTitle"
										name="jobTitle"
										label="Job Title"
										onChange={this.handleFieldChange}
										value={this.state.jobTitle}
									>
										{JobTitles.map((title, index) => (
											<MenuItem key={index} value={title}>
												{title}
											</MenuItem>
										))}
									</Select>
									{this.state.errors?.jobTitle ? (
										<FormHelperText>
											{this.state.errors?.jobTitle}
										</FormHelperText>
									) : null}
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="aboutMyself"
									name="Tell me about yourself"
									label="Tell me about yourself"
									variant="outlined"
									fullWidth
									multiline
									rows={4}
									error={this.state.errors?.aboutMyself ? true : false}
									helperText={this.state.errors?.aboutMyself || ""}
									value={this.state.aboutMyself}
									onChange={this.handleFieldChange}
								/>
							</Grid>
							<Grid item xs={12} style={{ display: "flex", gap: 10 }}>
								<Button
									variant="outlined"
									onClick={this.handleGenerateFakeData}
									fullWidth
									style={{
										border: "2px solid #22215b",
										color: "#22215b",
									}}
								>
									Generate Fake Data
								</Button>
								<Button
									variant="contained"
									onClick={this.handleFormSubmit}
									fullWidth
									style={{
										border: "2px solid #22215b",
										backgroundColor: "#22215b",
									}}
								>
									Signup
								</Button>
							</Grid>
						</Grid>
					</form>
				</Box>
				<Backdrop
					sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={this.state.isLoading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Container>
		);
	}
}

export default withNavigate(Form);
