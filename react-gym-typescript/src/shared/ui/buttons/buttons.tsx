import { Button, styled } from "@mui/material";
import { BlueBlink, FlexCenter } from "../generalStyles/generalStyles";

export const StyledButton = styled(Button)({
	textTransform: "unset",
	...FlexCenter,

	width: "fit-content",
	height: "50px",

	background: "rgb(0, 104, 136)",

	border: "#2fb3ff 3px solid",
	borderRadius: "25px",

	fontFamily: '"Anton", sans-serif',
	fontWeight: 700,
	fontStyle: "normal",
	fontSize: "6mm",
	color: "#ffffff",
	textShadow: "2px 2px 2px #012133",
	paddingBottom: "5px",
	paddingLeft: "12px",
	paddingRight: "12px",
	transition: "all 0.1s ease-in-out",

	"&:hover": {
		...BlueBlink,
		transform: "scale(1.01)",
		cursor: "pointer",

		"&:active": {
			transform: "scale(0.975)",
			transition: "none",
		},
	},
});
