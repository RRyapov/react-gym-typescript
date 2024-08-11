import styled from "@emotion/styled";
import { Typography, Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import { TextShadow, FlexCenter } from "@shared/ui/generalStyles/generalStyles";

type TitleProps = {
	children: React.ReactNode;
	sx?: SxProps<Theme> | undefined;
};

const TitleContainer = styled(Box)({
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	marginTop: "10px",
	transition: "all 1s ease-in-out",
	textAlign: "center",
});

const LastWordContainer = styled(Box)({
	display: "flex",
	justifyContent: "end",
	width: "100%",
	height: "fit-content",
	marginTop: "15px",
	marginBottom: "25px",
});

const ProgramShortReadContainer = styled(Box)({
	marginBottom: "35px",
	marginTop: "45px",
});
const ProgramLongReadContainer = styled(Box)({
	maxWidth: "530px",
});

const MainTitleTypography = styled(Typography)({
	fontFamily: '"Anton", sans-serif',
	fontWeight: 700,
	fontStyle: "normal",
	fontSize: "14mm",
	color: "#1dd6ff",
	...TextShadow,
});

const MediumTitleTypography = styled(Typography)({
	...TextShadow,
	fontFamily: '"Arial", cursive',
	fontWeight: 400,
	fontSize: "11mm",
	fontStyle: "italic",

	color: "#37dbff",
	marginBottom: "25px",

	textAlign: "center",
	lineHeight: "50px",
});

const ArticleTextTypography = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	fontFamily: '"Arial", cursive',
	fontWeight: 400,
	fontSize: "8mm",
	fontStyle: "italic",

	color: "#ffffff",

	textAlign: "center",
	lineHeight: "50px",
});

const ArticleTitleTypography = styled(Typography)({
	...FlexCenter,
	...TextShadow,

	marginTop: "20px",

	fontFamily: '"Arial", sans-serif',
	fonWeight: 700,
	fontStyle: "italic",
	fontSize: "13mm",

	color: "aliceblue",

	transition: "all 0.5s ease-in-out",

	"&:hover": {
		cursor: "pointer",
	},

	"&:active": {
		transform: "scale(0.975)",
		transition: "none",
	},
});

export const MainTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<MainTitleTypography>{children}</MainTitleTypography>
	</TitleContainer>
);

export const MediumTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<MediumTitleTypography>{children}</MediumTitleTypography>
	</TitleContainer>
);

export const ArticleText: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<ArticleTextTypography>{children}</ArticleTextTypography>
	</TitleContainer>
);

export const LastWordText: FC<TitleProps> = ({ children }) => (
	<LastWordContainer>
		<ArticleTextTypography>{children}</ArticleTextTypography>
	</LastWordContainer>
);

export const ArticleTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<ArticleTitleTypography>{children}</ArticleTitleTypography>
	</TitleContainer>
);

export const ProgramShortRead: FC<TitleProps> = ({ children }) => (
	<ProgramShortReadContainer>
		<ArticleTextTypography>{children}</ArticleTextTypography>
	</ProgramShortReadContainer>
);
