import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Box, Container, Divider, Typography } from "@mui/material";

const containerStyle = {
	width: "100%",
	height: "700px",
};

const center = {
	lat: -3.745,
	lng: -38.523,
};

function GoogleMap1() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyCt5g9NHrv-Cc5JTaQCqKf4GkPWDSGdkNc",
	});

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return (
		<Container
			maxWidth="lg"
			style={{ marginTop: "20px", marginBottom: "20px" }}
		>
			<Box>
				<Typography variant="h4">Google Map</Typography>

				<Divider style={{ margin: "20px 0" }} />
			</Box>
			<Box>
				{isLoaded ? (
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={10}
						onLoad={onLoad}
						onUnmount={onUnmount}
					>
						{/* Child components, such as markers, info windows, etc. */}
						<></>
					</GoogleMap>
				) : (
					<Typography variant="h5">Google Map is not Available</Typography>
				)}
			</Box>
		</Container>
	);
}

export default React.memo(GoogleMap1);
