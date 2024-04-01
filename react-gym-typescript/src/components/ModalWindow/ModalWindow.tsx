import React from "react";

import { ModalContent, ModalStyle, ModalIsClosed, ModalButton } from "./style";
import { ProgramButtonContainer } from "../../common";

export const ModalWindow = ({
  activeModal,
  setActiveModal,
  children,
}: {
  activeModal: boolean;
  setActiveModal: any;
  children: any;
}) => {
  if (!activeModal) return <ModalIsClosed />;

  return (
    <ModalStyle onClick={() => setActiveModal(false)}>
      <ModalContent>
        {children}
        <ProgramButtonContainer>
          <ModalButton>O K</ModalButton>
        </ProgramButtonContainer>
      </ModalContent>
    </ModalStyle>
  );
};
