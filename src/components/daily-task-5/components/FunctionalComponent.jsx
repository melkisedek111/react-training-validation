import React, { useState } from "react";
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Backdrop, CircularProgress, Snackbar, Alert } from "@mui/material";
import { Box, Container } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import dayjs from "dayjs";

const FunctionalComponent = () => {
	const [formFields, setFormFields] = useState({
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
	});

	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const [isSuccess, setIsSuccess] = useState(false);
	const Levels = ["Beginner", "Intermediate", "Pro"];
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

	/**
	 * DOCUMENT: This function is used to validate all the field on the user form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleValidation = () => {
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
			const value = formFields[field].trim();

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
		setErrors(errors);

		return errors;
	};

	/**
	 * DOCUMENT: This function is used to handle the date value using date picker. <br>
	 * Triggered: when changing the value of date field <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleDateChange = (newValue) => {
		setFormFields({
			...formFields,
			dayValue: newValue,
			dateOfBirth: moment(newValue["$d"]).format("MM/DD/YYYY"),
		});
	};

	/**
	 * DOCUMENT: This function is used to handle the alert message. <br>
	 * Triggered: when changing the value of date field <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleAlert = () => {
		setIsSuccess(!isSuccess);
	};

	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFieldChange = (event) => {
		const {
			target: { value, name, id },
		} = event;
		setFormFields({ ...formFields, [id || name]: value });
	};

	/**
	 * DOCUMENT: This function is used to check for errors and submit the form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFormSubmit = () => {
		const errors = handleValidation();

		/* checking for error if no, then submit */
		if (!Object.keys(errors).length) {
			/* this will reset all the fields */
			setFormFields({
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
			});
			setIsLoading(true);

			setTimeout(() => {
				setIsLoading(false);
				handleAlert();
				setTimeout(() => handleAlert(), 3000);
			}, 3000);
		}
	};

	return (
		<Container maxWidth="lg" style={{ padding: "20px 0" }}>
			<Box style={{ maxWidth: "700px", margin: "0 auto" }}>
				<form>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								id="firstName"
								name="First Name"
								label="First Name"
								variant="outlined"
								fullWidth
								error={errors?.firstName ? true : false}
								helperText={errors?.firstName || ""}
								value={formFields.firstName}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="lastName"
								name="Last Name"
								label="Last Name"
								variant="outlined"
								fullWidth
								error={errors?.lastName ? true : false}
								helperText={errors?.lastName || ""}
								value={formFields.lastName}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DesktopDatePicker
									label="Date of Birth"
									inputFormat="MM/DD/YYYY"
									value={formFields.dateOfBirth}
									onChange={handleDateChange}
									renderInput={(params) => (
										<TextField
											name="Date of Birth"
											id="dateOfBirth"
											{...params}
											error={errors?.dateOfBirth ? true : false}
											helperText={errors?.dateOfBirth || ""}
											value={formFields.dateOfBirth}
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
								error={errors?.emailAddress ? true : false}
								helperText={errors?.emailAddress || ""}
								value={formFields.emailAddress}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="contactNumber"
								label="Contact Number (e.g 09xxxxxxxx)"
								name="Contact Number"
								variant="outlined"
								fullWidth
								error={errors?.contactNumber ? true : false}
								helperText={errors?.contactNumber || ""}
								value={formFields.contactNumber}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="address"
								label="Address"
								name="Address"
								variant="outlined"
								fullWidth
								error={errors?.address ? true : false}
								helperText={errors?.address || ""}
								value={formFields.address}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth error={errors?.level ? true : false}>
								<InputLabel id="level">Level</InputLabel>
								<Select
									labelId="level"
									id="level"
									name="level"
									label="Level"
									onChange={handleFieldChange}
									value={formFields.level}
								>
									{Levels.map((level, index) => (
										<MenuItem key={index} value={level}>
											{level}
										</MenuItem>
									))}
								</Select>
								{errors?.level ? (
									<FormHelperText>{errors?.level}</FormHelperText>
								) : null}
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth error={errors?.jobTitle ? true : false}>
								<InputLabel id="jobTitle">Job Title</InputLabel>
								<Select
									labelId="jobTitle"
									id="jobTitle"
									name="jobTitle"
									label="Job Title"
									onChange={handleFieldChange}
									value={formFields.jobTitle}
								>
									{JobTitles.map((title, index) => (
										<MenuItem key={index} value={title}>
											{title}
										</MenuItem>
									))}
								</Select>
								{errors?.jobTitle ? (
									<FormHelperText>{errors?.jobTitle}</FormHelperText>
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
								error={errors?.aboutMyself ? true : false}
								helperText={errors?.aboutMyself || ""}
								value={formFields.aboutMyself}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={12} style={{ display: "flex" }}>
							<Button
								variant="contained"
								onClick={handleFormSubmit}
								fullWidth
								style={{
									border: "2px solid #22215b",
									backgroundColor: "#22215b",
								}}
							>
								Sign Up
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Snackbar open={isSuccess} autoHideDuration={6000} onClose={handleAlert}>
				<Alert onClose={handleAlert} severity="success" sx={{ width: "100%" }}>
					This is a success message!
				</Alert>
			</Snackbar>
		</Container>
	);
};

export default FunctionalComponent;
