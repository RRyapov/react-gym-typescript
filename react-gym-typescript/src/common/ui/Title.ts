import { css } from "styled-components";

import { FlexCenter } from "./Container";

export const BoldTitles = css`
  ${FlexCenter}

  width: 100%;
  height: fit-content;
  margin-top: 30px;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MainTitleStyle = css`
  ${BoldTitles}

  font-family: "Anton", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14mm;
  height: fit-content;
  color: #1dd6ff;
  text-shadow: 15px 15px 15px #012133;
  text-decoration: underline;
`;

export const BlackTextShadow = css`
  text-shadow: -0 -2px 2px #000000, 0 -2px 2px #000000, -0 2px 2px #000000,
    0 2px 2px #000000, -2px -0 2px #000000, 2px -0 2px #000000,
    -2px 0 2px #000000, 2px 0 2px #000000, -1px -2px 2px #000000,
    1px -2px 2px #000000, -1px 2px 2px #000000, 1px 2px 2px #000000,
    -2px -1px 2px #000000, 2px -1px 2px #000000, -2px 1px 2px #000000,
    2px 1px 2px #000000, -2px -2px 2px #000000, 2px -2px 2px #000000,
    -2px 2px 2px #000000, 2px 2px 2px #000000, -2px -2px 2px #000000,
    2px -2px 2px #000000, -2px 2px 2px #000000, 2px 2px 2px #000000;
`;

export const TitlePattern = css`
  ${FlexCenter}
  font-family: "Arial", cursive;
  font-weight: 400;
  font-size: 11mm;
  font-style: italic;

  color: #37dbff;
  ${BlackTextShadow}

  margin-bottom: 25px;
`;
export const ArticleFontStyle = css`
  ${FlexCenter}
  font-family: "Arial", cursive;
  font-weight: 400;
  font-size: 9mm;
  font-style: italic;

  color: #ffffff;
  ${BlackTextShadow}

  margin-top: 45px;

  text-align: center;
  line-height: 50px;
`;
