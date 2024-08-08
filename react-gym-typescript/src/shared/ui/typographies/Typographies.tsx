import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import { FC } from "react";
import { TextShadow, FlexCenter } from "@shared/ui/generalStyles/generalStyles";

type TitleProps = {
	children: React.ReactNode;
};

const TitleContainer = styled(Box)({
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	marginTop: "10px",
	transition: "all 1s ease-in-out",
	textAlign: "center",
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
	fontSize: "9mm",
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

export const ArticleText: FC = () => (
	<TitleContainer>
		<ArticleTextTypography>
			Люди думают, что знаменитости проводят в спортзале по полдня, поэтому так хорошо и выглядят. Но это не так: у большинства селебрити есть максимум час на
			тренировку. Дело не в том, как долго вы работаете, а в том, насколько усердно. Своим подопечным я рекомендую интервальные тренировки, например, по такой
			схеме: 15 секунд отжиманий, 10 секунд отдыха, 15 секунд выпадов, 10 секунд отдыха, 15 секунд бега с высоким подъемом коленей, 10 секунд отдыха, 15 секунд
			прыжков из стороны в стороны, 10 секунд отдыха». Если выполнить несколько таких «кругов» подряд, то даже получасовая тренировка будет весьма эффективной
		</ArticleTextTypography>
	</TitleContainer>
);

export const ArticleTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<ArticleTitleTypography>{children}</ArticleTitleTypography>
	</TitleContainer>
);
