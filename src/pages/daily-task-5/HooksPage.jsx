import React from "react";
import { Container } from "@mui/system";
import { CopyBlock, androidstudio } from "react-code-blocks";
import Hooks from "../../components/daily-task-5/components/Hooks.jsx";
import { codeblocks } from "../../codeblocks.js";

const HooksPage = () => {
	return (
		<Container
			maxWidth="lg"
			style={{ marginTop: "20px", marginBottom: "20px" }}
		>
			<Hooks />
			<div style={{ fontFamily: "Fira Code" }}>
				<CopyBlock
					text={codeblocks.hooks}
					language={"jsx"}
					showLineNumbers={true}
					theme={androidstudio}
					codeBlock
				/>
			</div>
		</Container>
	);
};

export default HooksPage;
