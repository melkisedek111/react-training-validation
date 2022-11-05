import React from "react";
import { Box, Divider, Typography,Container } from "@mui/material";
import { CopyBlock, androidstudio } from "react-code-blocks";
import { codeblocks } from "../../codeblocks.js";

import FunctionalComponent from "../../components/daily-task-5/components/FunctionalComponent.jsx";

const FunctionalComponentPage = () => {
	return (
		<Container
			maxWidth="lg"
			style={{ marginTop: "20px", marginBottom: "20px" }}
		>
			<Box>
				<Typography variant="h4">Functional Component</Typography>
				<Divider style={{ margin: "20px 0" }} />
			</Box>
			<FunctionalComponent />
			<Box marginBottom={5}>
				<Typography variant="h5">FunctionalComponent.jsx</Typography>
				<Divider style={{ margin: "20px 0" }} />
				<div style={{ fontFamily: "Fira Code" }}>
					<CopyBlock
						text={codeblocks.functionalComponent}
						language={"jsx"}
						showLineNumbers={true}
						theme={androidstudio}
						codeBlock
					/>
				</div>
			</Box>
		</Container>
	);
};

export default FunctionalComponentPage;
