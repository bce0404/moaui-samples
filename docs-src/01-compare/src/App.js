import "./App.css";
import * as React from "react";
import MuiGrid from "@mui/material/Grid";
import MuiStack from "@mui/material/Stack";
import MuiButton from "@mui/material/Button";
import MuiCheckbox from "@mui/material/Checkbox";
import MuiRadio from "@mui/material/Radio";
import MuiTypography from "@mui/material/Typography";
import MuiTextField from "@mui/material/TextField";
import MuiSwitch from "@mui/material/Switch";

import MoaGrid from "@midasit-dev/moaui/Grid";
import MoaPanel from "@midasit-dev/moaui/Panel";
import MoaStack from "@midasit-dev/moaui/Stack";
import MoaButton from "@midasit-dev/moaui/Button";
import MoaCheckbox from "@midasit-dev/moaui/Check";
import MoaRadio from "@midasit-dev/moaui/Radio";
import MoaTypography from "@midasit-dev/moaui/Typography";
import MoaTextField from "@midasit-dev/moaui/TextField";
import MoaSwitch from "@midasit-dev/moaui/Switch";

function CheckCompare() {
	const [check, setCheck] = React.useState(false);

	const handleCheck = (e) => {
		setCheck(e.target.checked);
	};

	return (
		<React.Fragment>
			<MoaStack direction="row" alignItems="center">
				<MuiCheckbox checked={check} onChange={handleCheck} text="Mui Check" />
				<MuiTypography>Mui Check</MuiTypography>
			</MoaStack>
			<MoaCheckbox checked={check} onChange={handleCheck} name="MoaUI Check" />
		</React.Fragment>
	);
}

function RadioCompare() {
	const [select, setSelect] = React.useState("1");

	const handleSelect = (e) => {
		setSelect(e.target.value);
	};

	return (
		<React.Fragment>
			<MoaStack direction="row" alignItems="center">
				<MuiTypography>Mui Radio</MuiTypography>
				<MuiRadio checked={select === "1"} onChange={handleSelect} value="1" />
				<MuiRadio checked={select === "2"} onChange={handleSelect} value="2" />
			</MoaStack>
			<MoaStack direction="row" alignItems="center">
				<MoaTypography>MoaUI Radio</MoaTypography>
				<MoaRadio checked={select === "1"} onChange={handleSelect} value="1" />
				<MoaRadio checked={select === "2"} onChange={handleSelect} value="2" />
			</MoaStack>
		</React.Fragment>
	);
}

function TextFieldCompare() {
	const [value, setValue] = React.useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<React.Fragment>
			<MoaStack direction="row" alignItems="center" spacing={2}>
				<MuiTypography>Mui TextField</MuiTypography>
				<MuiTextField value={value} onChange={handleChange} />
			</MoaStack>
			<MoaStack direction="row" alignItems="center" spacing={2}>
				<MoaTypography>MoaUI TextField</MoaTypography>
				<MoaTextField value={value} onChange={handleChange} />
			</MoaStack>
		</React.Fragment>
	);
}

function App() {
	return (
		<div className="App">
			<MoaStack
				width="100%"
				height="100%"
				justifyContent="center"
				alignItems="center"
			>
				<MoaStack
					spacing={2}
					alignItems="center"
					justifyContent="center"
					direction="column"
				>
					<MuiGrid container spacing={2}>
						<MuiGrid item xs={3}>
							<MuiTypography>
								{`@mui/
								material`}
							</MuiTypography>
						</MuiGrid>
						<MuiGrid item xs={3}>
							<MuiButton variant="contained">Button</MuiButton>
						</MuiGrid>
						<MuiGrid item xs={2}>
							<MuiCheckbox />
						</MuiGrid>
						<MuiGrid item xs={2}>
							<MuiRadio />
						</MuiGrid>
						<MuiGrid item xs={2}>
							<MuiSwitch />
						</MuiGrid>
					</MuiGrid>
					<MoaGrid container spacing={2}>
						<MoaGrid item xs={3}>
							<MoaTypography>@midasit-dev/moaui</MoaTypography>
						</MoaGrid>
						<MoaGrid item xs={3}>
							<MoaButton variant="contained">Button</MoaButton>
						</MoaGrid>
						<MoaGrid item xs={2}>
							<MoaCheckbox />
						</MoaGrid>
						<MoaGrid item xs={2}>
							<MoaRadio />
						</MoaGrid>
						<MoaGrid item xs={2}>
							<MoaSwitch />
						</MoaGrid>
					</MoaGrid>
					<MoaGrid container spacing={2}>
						<MoaGrid item xs={3}></MoaGrid>
						<MoaGrid item xs={3}>
							<MoaTypography>Button</MoaTypography>
						</MoaGrid>
						<MoaGrid item xs={2}>
							<MoaTypography>Check</MoaTypography>
						</MoaGrid>
						<MoaGrid item xs={2}>
							<MoaTypography>Radio</MoaTypography>
						</MoaGrid>
						<MoaGrid item xs={2}>
							<MoaTypography>Switch</MoaTypography>
						</MoaGrid>
					</MoaGrid>
					<br />
					<MoaStack direction="row" spacing={3} marginBottom={2}>
						<MoaPanel>
							<MoaStack
								spacing={2}
								direction="column"
								alignItems="center"
								justifyContent="center"
							>
								<CheckCompare />
							</MoaStack>
						</MoaPanel>
						<MoaPanel>
							<MoaStack
								spacing={2}
								direction="column"
								alignItems="center"
								justifyContent="center"
							>
								<RadioCompare />
							</MoaStack>
						</MoaPanel>
					</MoaStack>
					<MoaPanel>
						<MoaStack
							spacing={2}
							direction="column"
							alignItems="center"
							justifyContent="center"
						>
							<TextFieldCompare />
						</MoaStack>
					</MoaPanel>
				</MoaStack>
			</MoaStack>
		</div>
	);
}

export default App;
