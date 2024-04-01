import styled from "styled-components";

import { FlexCenter } from "./Container";

export const HeaderBackground = styled.div`
  height: 274px;
  width: 1336px;

  background-repeat: no-repeat;
  background-size: 1336px;
  background-image: url("https://i.postimg.cc/sf9tbKcL/header-background.png");
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderGraffity = styled.div`
  position: absolute;
  top: -60px;
  left: -25px;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

export const HeaderStrongMan = styled.img`
  height: 230px;
  top: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &:active {
    transform: translateX(-50%) scale(0.98);
  }
`;

export const CartArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartCountPlace = styled.div`
  background: rgb(30, 134, 166);
  background: linear-gradient(
    90deg,
    rgba(30, 134, 166, 1) 2%,
    rgba(4, 177, 232, 1) 54%,
    rgba(30, 134, 166, 1) 100%
  );

  margin-top: 15px;
  margin-right: 12px;
  padding-left: 8px;
  padding-right: 8px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 8px;

  border-radius: 8px;

  font-family: "Micro 5", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
  color: white;
`;

export const CartImage = styled.div`
  margin-right: 16px;
  margin-bottom: 2px;
  cursor: pointer;

  &:active {
    transform: scale(0.93);
  }
`;

export const Navigation = styled.nav`
  max-height: inherit;
  color: aliceblue;
  bottom: 0;
  width: 100%;
  ${FlexCenter}
`;

export const NavigationUL = styled.ul`
  list-style-type: none;
  width: 100%;

  font-family: "Anta", sans-serif;
  font-weight: 800;
  font-style: normal;
  text-shadow: 2px 2px 2px #000;

  display: flex;
  justify-content: space-around;
  z-index: 4;

  a {
    text-decoration: none;
  }

  a:visited {
    color: aliceblue;
    text-decoration: none;
  }
`;

export const NavigationLi = styled.li`
  ${FlexCenter}

  text-decoration: none;

  transition: all 1s ease;
  border-radius: 0px;
  cursor: pointer;
  background: transparent;

  height: 35px;
  z-index: 5;

  &:hover {
    margin-top: -4px;
    background-color: #20a0db;
    border: 1px #000 solid;
    border-radius: 8px;

    color: #000000;
    text-shadow: none;
  }
`;
