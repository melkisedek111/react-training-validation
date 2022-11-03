import React, { Component } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import dayjs from "dayjs";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dayValue: dayjs(new Date()),
			fullName: "",
			dateOfBirth: "",
			emailAddress: "",
			contactNumber: "",
			aboutMyself: "",
			errors: {},
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
			fullName: {
				type: "letter",
				label: "Full Name",
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
		const numberValidation = /^[1-9]\d*$/;
		let errors = {};


		/* this loop is used to iterate each of the default fields to check for errors and validations */
		for (const field in fields) {
			const { type, label } = fields[field];
			const value = this.state[field].trim();

			/* check for empty value */
			if (!value) {
				errors[field] = `${label} is empty. Please insert the field.`;
			} 
			/* check if the field is letter only */
			else if (type === "letter") {
				if (!value.match(alphabetValidation)) {
					errors[field] = `${label} must be an alphabet only.`;
				}
			} 
			/* check if the field is email only */
			else if (type === "email") {
				if (!value.match(emailValidation)) {
					errors[
						field
					] = `Your ${label} is invalid, Please provide a valid one.`;
				}
			} 
			/* check if the field is number only */
			else if (type === "number") {
				if (!value.match(numberValidation)) {
					errors[
						field
					] = `Your ${label} is invalid and should include digits only.`;
				} else if (value.length !== 10) {
					errors[field] = `Your ${label} length should be 10.`;
				}
			} 
			/* check if the field is date and date should not be greater then today's date */
			else if (type === "date") {
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
		this.setState({ [id]: value });
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

		/* checking for error if no, then submit */
		if (!Object.keys(errors).length) {
			this.props.handleNewUser({
				fullName: this.state.fullName,
				dateOfBirth: this.state.dateOfBirth,
				emailAddress: this.state.emailAddress,
				contactNumber: this.state.contactNumber,
				aboutMyself: this.state.aboutMyself,
			});

			/* this will reset all the fields */
			this.setState({
				fullName: "",
				dateOfBirth: "",
				emailAddress: "",
				contactNumber: "",
				aboutMyself: "",
				dayValue: "",
			});
		}
	};
	
	componentDidMount() {
		this.formRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		return (
			<Container maxWidth="lg" style={{ padding: "20px 0" }}>
				<Box style={{ maxWidth: "700px", margin: "0 auto" }}>
					<form ref={this.formRef}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<TextField
									id="fullName"
									name="Full Name"
									label="Full Name"
									variant="outlined"
									fullWidth
									error={this.state.errors?.fullName ? true : false}
									helperText={this.state.errors?.fullName || ""}
									value={this.state.fullName}
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
							<Grid item xs={12}>
								<Button
									variant="outlined"
									onClick={this.handleFormSubmit}
									fullWidth
								>
									Submit Form
								</Button>
							</Grid>
						</Grid>
					</form>
				</Box>
			</Container>
		);
	}
}

export default Form;
