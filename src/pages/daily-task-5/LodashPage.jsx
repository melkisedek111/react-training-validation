import React from "react";
import { Container } from "@mui/system";
import { CopyBlock, androidstudio } from "react-code-blocks";
import Hooks from "../../components/daily-task-5/components/Hooks.jsx";
import { codeblocks } from "../../codeblocks.js";
import { Box, Divider, Typography } from "@mui/material";
import LodashComponent from "../../components/daily-task-5/components/LodashComponent.jsx";

const LodashPage = () => {
	return (
		<Container
			maxWidth="lg"
			style={{ marginTop: "20px", marginBottom: "20px" }}
		>
			<Box>
				<Typography variant="h4">Lodash</Typography>
				<Divider style={{ margin: "20px 0" }} />
			</Box>
            <LodashComponent/>
            <Box paddingTop={5}>
				<Typography variant="h5">Lodash.jsx</Typography>
				<Divider style={{ margin: "20px 0" }} />
				<div style={{ fontFamily: "Fira Code" }}>
					<CopyBlock
						text={codeblocks.lodash}
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

export default LodashPage;
