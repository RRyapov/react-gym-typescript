import styled, { RuleSet } from "styled-components";

import { FlexCenter } from "./Container";
import {

  BoldTitles,
  MainTitleStyle,
} from "./Title";

// export const MainSpace = styled.div`
//   /* height: fit-content;
//   max-height: max-content; */
// `;

export const GeneralTitle = styled.div`
  ${BoldTitles}
`;

export const ProductsOnMainPage = styled.div`
  height: fit-content;
`;

export const ProductsTitlesOnMainPage = styled.div`
  ${MainTitleStyle}
  margin-bottom: 55px;
`;


export const ShortReadSportArticle = styled.div`
  ${FlexCenter}
  flex-direction: column;
`;
