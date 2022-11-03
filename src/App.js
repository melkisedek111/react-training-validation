import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Axios from "axios";

import "./App.css";
import { Container } from "@mui/system";
import Poster from "./Poster.jsx";
import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import Form from "./Form.jsx";
import Users from "./Users.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		};
	}

	componentDidMount() {
		const movies = ["avengers", "godzilla", "pirates"];
		const options = {
			method: "GET",
			url: `http://www.omdbapi.com/?s=${
				movies[Math.floor(Math.random() * movies.length)]
			}&apikey=90b3ee1e`,
		};

		Axios.request(options)
			.then((response) => {
				this.setState({ movies: response.data.Search });
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<Container maxWidth="lg">
					<Typography variant="h3">Movie Lists</Typography>
					<Box sx={{ display: "flex", flexWrap: "wrap" }}>
						{this.state.movies &&
							this.state.movies.map((movie, index) => (
								<Poster
									key={index}
									imageUrl={movie.Poster}
									title={movie.Title}
									year={movie.Year}
								/>
							))}
					</Box>
				</Container>
				<Divider />
				<Users />
			</div>
		);
	}
}

export default App;
