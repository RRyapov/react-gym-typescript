import styled, { css } from "styled-components";

import { FlexCenter, BlueBlink, ButtonStyle } from "./Container";
import { ArticleFontStyle, MainTitleStyle } from "./Title";

export const GeneralProgramPageBlock = styled.div`
  ${FlexCenter};
`;

export const ProgramPageBlock = styled.div`
  width: 100%;
  height: fit-content;
  ${FlexCenter}
  flex-direction: column;
`;

export const ProgramBorder = css`
  border: 3px solid #2fb3ff;
  border-radius: 35px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ProgramBlock = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 680px;
  margin-bottom: 35px;

  ${FlexCenter}
  justify-content: space-around;

  ${ProgramBorder}
`;

export const ProgramTitleBlock = styled.div`
  ${ProgramBorder}
  ${FlexCenter}
  width: fit-content;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 15px;

  margin-bottom: 45px;
`;

export const ProgramImage = styled.div`
  width: 500px;
  height: 590px;
  overflow: hidden;
  margin-left: 45px;

  ${FlexCenter}

  border-radius: 50px;
  box-sizing: border-box;

  transition: all 0.1s ease-in-out;

  &:hover {
    ${BlueBlink}
  }
`;

export const ProgramDescription = styled.section`
  max-width: 540px;
  ${FlexCenter}
  flex-direction: column;
  margin-left: 75px;

  a {
    text-decoration: none;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ProgramTitle = styled.div`
  ${MainTitleStyle}
  text-align: center;
  text-decoration: none;
  margin-bottom: 60px;
`;

export const ProgramShortRead = styled.div`
  ${ArticleFontStyle}
  max-width: 530px;
  font-size: 8mm;
`;

export const ProgramLongRead = styled.div`
  ${ArticleFontStyle}
  width: 750px;
  font-size: 8mm;
  margin-left: 25px;
  margin-bottom: -70px;
`;

export const ProgramButtonStyle = css`
  ${ButtonStyle}
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const ProgramButton = styled.button`
  ${ProgramButtonStyle}
`;

export const ProgramPrevWord = styled.div`
  ${ArticleFontStyle}
  width: auto;
  font-size: 8mm;
  margin-bottom: 55px;
`;

export const ProgramFinalWord = styled.div`
  ${ArticleFontStyle}
  width: auto;
  font-size: 8mm;
  margin-bottom: 2dvb5px;
  display: flex;
  justify-content: end;
`;

export const ProgramButtonContainer = styled.div`
  ${FlexCenter}
`;
