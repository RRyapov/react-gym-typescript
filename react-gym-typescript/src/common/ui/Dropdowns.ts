import styled, { css } from "styled-components";
import { BlueBlink, FlexCenter } from "./Container";
import { ProgramBorder } from "./Program";

export const GeneralDropdownBlock = styled.div`
  ${FlexCenter};
  width: 100%;
  min-height: 350px;
  margin-bottom: 45px;

  ${FlexCenter}
  ${ProgramBorder}
  
  flex-direction: column;
`;

export const ProgramDropdownBlock = styled.div`
  ${FlexCenter}
  flex-direction: column;
`;

export const DropdownTitle = styled.div`
  ${FlexCenter}

  width: fit-content;
  height: 50px;

  background: rgb(0, 104, 136);

  border: #2fb3ff 3px solid;
  border-radius: 5px;

  font-family: "Anton", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 6mm;
  color: #ffffff;
  text-shadow: 2px 2px 2px #012133;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:active {
    transform: scale(0.975);
    transition: none;
  }
`;

export const DropdownFreeSpace = styled.div`
  ${FlexCenter}

  width: 63px;
  height: 23px;
  margin-top: 10px;

  background: rgba(219, 254, 255);

  border: #2fb3ff 3px solid;
  border-radius: 5px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 6mm;
  color: black;
  cursor: pointer;

  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;

  &:hover {
    ${BlueBlink}
  }
`;
