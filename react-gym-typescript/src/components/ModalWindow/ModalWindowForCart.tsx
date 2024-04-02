import React, { FC, ReactNode } from "react";

import { ModalContent, ModalStyle, ModalIsClosed, ModalButton } from "./style";
import { ProgramButtonContainer } from "../../common";

export const ModalWindowForCart: FC<{
  activeModal: boolean;
  setActiveModal: (v: boolean) => void;
  children: ReactNode;
}> = ({ activeModal, setActiveModal, children }) => {
  if (!activeModal) return <ModalIsClosed />;

  return (
    <ModalStyle>
      <ModalContent>
        {children}
        <ProgramButtonContainer>
          <ModalButton onClick={() => setActiveModal(false)}>O K</ModalButton>
        </ProgramButtonContainer>
      </ModalContent>
    </ModalStyle>
  );
};
