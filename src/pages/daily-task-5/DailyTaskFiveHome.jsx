import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { CopyBlock, androidstudio } from "react-code-blocks";
import { codeblocks } from "../../codeblocks.js";

import ColorPage from "../../components/daily-task-5/components/ColorPage.jsx";

const DailyTaskFiveHome = () => {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					height: "300px",
				}}
			>
				<ColorPage />
				<ColorPage />
			</div>
			<Container
				maxWidth="lg"
				style={{ marginTop: "20px", marginBottom: "20px" }}
			>
				<Box marginBottom={5}>
					<Typography variant="h5">ColorPage.jsx</Typography>
					<Divider style={{ margin: "20px 0" }} />
					<div style={{ fontFamily: "Fira Code" }}>
						<CopyBlock
							text={codeblocks.colorPage}
							language={"jsx"}
							showLineNumbers={true}
							theme={androidstudio}
							codeBlock
						/>
					</div>
				</Box>
				<Box>
					<Typography variant="h5">withRandomColor.jsx</Typography>
					<Divider style={{ margin: "20px 0" }} />
					<div style={{ fontFamily: "Fira Code" }}>
						<CopyBlock
							text={codeblocks.withRandomColor}
							language={"jsx"}
							showLineNumbers={true}
							theme={androidstudio}
							codeBlock
						/>
					</div>
				</Box>
			</Container>
		</>
	);
};

export default DailyTaskFiveHome;
