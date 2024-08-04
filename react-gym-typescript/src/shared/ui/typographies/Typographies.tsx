import { Typography, styled, Box } from "@mui/material";
import { FC } from "react";
import { FlexCenter } from "@shared/ui/generalStyles/generalStyles";

type MainTitleProps = {
	children: React.ReactNode;
};

const MainTitleContainer = styled(Box)({
	marginBottom: "55px",
	FlexCenter,
	width: "100%",
	height: "fit-content",
	marginTop: "30px",
	transition: "all 1s ease-in-out",
	textAlign: "center",
});

const MainTitleTypography = styled(Typography)({
	fontFamily: '"Anton", sans-serif',
	fontWeight: 700,
	fontStyle: "normal",
	fontSize: "14mm",
	color: "#1dd6ff",
	textShadow: "15px 15px 15px #012133",
});

export const MainTitle: FC<MainTitleProps> = ({ children }) => (
	<MainTitleContainer>
		<MainTitleTypography>{children}</MainTitleTypography>
	</MainTitleContainer>
);
