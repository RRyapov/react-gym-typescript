import { Box, styled } from "@mui/material";

// ============== Общие стили =================

export const FlexCenter = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

export const TextShadow = {
	textShadow:
		"0 -2px 2px #000000, 0 -2px 2px #000000, 0 2px 2px #000000, 0 2px 2px #000000, -2px 0 2px #000000, 2px 0 2px #000000, -2px 0 2px #000000, 2px 0 2px #000000, -1px -2px 2px #000000, 1px -2px 2px #000000, -1px 2px 2px #000000, 1px 2px 2px #000000, -2px -1px 2px #000000, 2px -1px 2px #000000, -2px 1px 2px #000000, 2px 1px 2px #000000, -2px -2px 2px #000000, 2px -2px 2px #000000, -2px 2px 2px #000000, 2px 2px 2px #000000, -2px -2px 2px #000000, 2px -2px 2px #000000, -2px 2px 2px #000000, 2px 2px 2px #000000",
};

export const BlueBlink = {
	background: "linear-gradient(90deg, rgba(30, 134, 166, 1) 2%, rgba(4, 177, 232, 1) 54%, rgba(30, 134, 166, 1) 100%)",
	boxShadow: "0px 0px 15px 4px rgba(46, 175, 255, 0.9)",
};

export const EndLineStyle = {
	...FlexCenter,
	marginTop: "65px",
};

// ============== Стили Карточки продукта =================

export const StyledContainer = styled(Box)({
	...FlexCenter,
	flexDirection: "column",
});

export const ProductContainer = styled(Box)({
	...FlexCenter,
	flexDirection: "row",
	justifyContent: "space-between",
});

// ============== Стили ProgramPage =================

export const ProgramPageBlock = styled(Box)({
	width: "100%",
	height: "fit-content",
	...FlexCenter,
	flexDirection: "column",
});

export const ProgramButtonContainer = styled(Box)({
	...FlexCenter,
	marginBottom: "45px",
});

// ============== Стили Карточки программы =================

const ProgramBorder = {
	border: "3px solid #2fb3ff",
	borderRadius: "35px",
	backgroundColor: "rgba(0, 0, 0, 0.5)",
};

export const ProgramBlock = styled(Box)({
	...FlexCenter,
	...ProgramBorder,
	width: "100%",
	height: "fit-content",
	minHeight: "680px",
	marginBottom: "35px",
	justifyContent: "space-around",
});

export const ProgramDescription = styled(Box)({
	...FlexCenter,
	justifyContent: "space-between",
	maxWidth: "640px",
	maxHeight: "800px",
	flexDirection: "column",
	marginLeft: "75px",
	marginBottom: "25px",

	a: {
		textDecoration: "none",
	},

	"&:active": {
		textDecoration: "none",
	},
});

export const ProgramImage = styled(Box)({
	...FlexCenter,
	width: "500px",
	height: "590px",
	overflow: "hidden",
	marginLeft: "45px",

	borderRadius: "50px",
	boxSizing: "border-box",

	transition: "all 0.1s ease-in-out",

	"&:hover": {
		...BlueBlink,
	},
});
