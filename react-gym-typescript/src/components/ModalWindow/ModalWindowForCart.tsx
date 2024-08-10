import React, { FC, ReactNode } from "react";

import { ProgramButtonContainer } from "../../common";
import { ModalContent, ModalStyle, ModalIsClosed, ModalButton } from "./style";

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
