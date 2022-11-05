import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React, { Component } from "react";
import Poster from "../../components/daily-task-4/Poster.jsx";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		};
	}

	componentDidMount() {
		fetch("https://gogoanime.consumet.org/anime-movies")
		.then((response) => response.json())
		.then((animelist) => {
			this.setState({ movies: animelist })
		});
	}

	render() {
		return (
			<Container
				maxWidth="lg"
				style={{ marginTop: "20px", marginBottom: "20px" }}
			>
				<Box>
					<Typography variant="h4">Movie Lists</Typography>

					<Divider style={{ margin: "20px 0" }} />
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: 5,
						justifyContent: "space-between",
					}}
				>
					{this.state.movies &&
						this.state.movies.map((movie, index) => (
							<Poster
								key={index}
								imageUrl={movie.animeImg}
								title={movie.animeTitle}
								year={movie.releasedDate}
							/>
						))}
				</Box>
			</Container>
		);
	}
}

export default Home;
