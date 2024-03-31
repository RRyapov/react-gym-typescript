import styled from "styled-components";

import { FlexCenter, ArticleFontStyle, ProgramButtonStyle } from "../../common";

export const ModalStyle = styled.div`
  ${FlexCenter}

  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  animation: ani 2.5s forwards;
`;

export const ModalIsClosed = styled.div`
  opacity: 0;
  animation: scale 2.5s forwards;
  @keyframes modality {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ModalContent = styled.div`
  border-radius: 25px;
  width: 400px;
  background: rgb(30, 134, 166);
  background: radial-gradient(
    circle,
    rgba(30, 134, 166, 1) 2%,
    rgba(152, 238, 255, 1) 54%,
    rgba(30, 134, 166, 1) 100%
  );
  border: 3px solid #2fb3ff;
`;

export const ModalTitle = styled.p`
  ${ArticleFontStyle}
  font-size: 10mm;
`;

export const ModalButton = styled.button`
  ${ProgramButtonStyle}
  width: 125px;
`;
