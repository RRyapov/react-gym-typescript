import { BottomNavigation, Box, List, ListItem, styled } from "@mui/material";
import { FlexCenter } from '@shared/ui/generalStyles/generalStyles';
// import styled from "@emotion/styled";

// =================== стили Header =========================

export const HeaderBackground = styled(Box)({
  height: "274px",
  width: "1336px",

  backgroundRepeat: "no-repeat",
  backgroundSize: "1336px",
  backgroundImage:' url("https://i.postimg.cc/sf9tbKcL/header-background.png")',
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const HeaderGraffity = styled(Box)({
  position: "absolute",
  top: "-60px",
  left: "-25px",
  cursor: "pointer",

  "&:active": {
    transform: "scale(0.98)",
  }
});

export const HeaderStrongMan = styled(Box)({
  height: "230px",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",

  "&:active": {
    transform: "translateX(-50%) scale(0.98)",
  }
})


// =================== стили Cart =========================

export const CartArea = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const CartContainer = styled(Box)({
  ...FlexCenter,
  flexDirection: "column",
});

export const CartCountPlace = styled(Box)({
  background: "linear-gradient(90deg,rgba(30, 134, 166, 1) 2%, rgba(4, 177, 232, 1) 54%, rgba(30, 134, 166, 1) 100%)",
  marginTop: "15px",
  marginRight: "12px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "fit-content",
  height: "fit-content",
  marginBottom: "8px",

  borderRadius: "8px",

  fontFamily: '"Micro 5", sans-serif',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "xx-large",
  color: "white",
});

export const CartImage = styled(Box)({
  marginRight: "16px",
  marginBottom: "2px",
  cursor: "pointer",

  '&:active': {
    transform: "scale(0.93)",
  }
});

// =================== стили Navigation =========================

export const Navigation = styled(BottomNavigation)({
  maxHeight: "inherit",
  color: "aliceblue",
  background: "transparent",
  bottom: 0,
  width: "100%",
  ...FlexCenter,
})


export const NavigationUL = styled(List)({

  listStyleType: "none",
  width: "100%",

  fontFamily: '"Anta", sans-serif',
  fontWeight: 800,
  fontStyle: 'normal',
  textShadow: '2px 2px 2px #000',

  display: "flex",
  justifyContent: "space-around",
  zIndex: 4,

    textDecoration: "none",

    "a": {
      textDecoration: "none"},

  'a: visited': {
    color: "aliceblue",
    textDecoration: "none",
  }
})


export const NavigationLi = styled(ListItem)({
  ...FlexCenter,
  padding: "0px 20px",

  transition: "all 0.5s ease",

  cursor: "pointer",
  border: "3px solid",
  borderRadius: "8px",
  backgroundColor: "#20a0db",
  textShadow: "none",
  color: "#000000",
  height: "35px",
  width: "fit-content !important",

  "&:hover": {
    background: "transparent",
    borderRadius: "8px",
    color: "antiquewhite",

    borderColor: "#20a0db",
    textShadow: "2px 1px 2px black",
  }
})
 