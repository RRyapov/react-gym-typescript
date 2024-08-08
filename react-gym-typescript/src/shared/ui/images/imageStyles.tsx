import { Box, styled } from "@mui/material";
import { FlexCenter } from "../generalStyles/generalStyles";

export const ProductImageBox = styled(Box)({
	...FlexCenter,
	marginTop: "70px",
	marginBottom: "25px",
	height: "315px",
	transition: "all 0.3s ease-in-out",

	"&:hover": {
		transform: "scale(1.1)",
	},
});
