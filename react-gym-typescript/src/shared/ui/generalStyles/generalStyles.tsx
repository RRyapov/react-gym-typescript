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
	boxShadow: "0px 0px 66px 11px rgba(46, 175, 255, 0.9)",
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

export const ProductCardOnMainPage = styled(Box)({
	...FlexCenter,
	flexDirection: "column",
});
