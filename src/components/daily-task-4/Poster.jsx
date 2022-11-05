import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Poster = ({imageUrl, title, year}) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="200"
				image={imageUrl}
				alt={title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title} ({year})
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Esse culpa id proident quis irure irure aliqua ea magna aliqua. Qui
					laboris eu anim officia veniam in. Eu mollit velit duis ut qui
					reprehenderit minim officia do commodo culpa. Non eiusmod ad elit
					laboris officia irure ea irure nostrud ipsum nulla.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Poster;
