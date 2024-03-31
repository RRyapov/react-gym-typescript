import styled from "styled-components";

import { ButtonStyle } from "../../common/ui/Container";
import { TitlePattern } from "../../common/ui/Title";

export const PaginationLayout = styled.div`
  ${TitlePattern}
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: auto;
  justify-content: center;
  margin: 35px;
`;

export const PaginationBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;

export const PaginationLi = styled.li`
  ${ButtonStyle}
  background-color: transparent;
  font-weight: 400;
  font-size: xx-large;
  text-decoration: none;

  ${({ isActive }) =>
    isActive ? "background: rgb(0, 104, 136); border: #2fb3ff 3px solid;" : ""}
`;
