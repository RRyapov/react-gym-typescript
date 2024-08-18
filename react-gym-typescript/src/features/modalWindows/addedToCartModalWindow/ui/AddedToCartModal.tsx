import { type FC } from "react";

import { StyledButton } from "@shared/ui/buttons/buttons";
import { ModalContainer, ModalContent } from "@shared/ui/generalStyles/generalStyles";
import { AddedToCartModalTypes } from "../model/types/types";

export const AddedToCartModal: FC<AddedToCartModalTypes> = ({ activeModal, setActiveModal, children }) => {
	// if (!activeModal) return <ModalContainer sx={{ opacity: "0 !important" }} />;

	return (
		<ModalContainer>
			<ModalContent>
				{children}
				<StyledButton
					children={"ОК"}
					// onClick={() => setActiveModal(false)}
				/>

				{/* <ProgramButtonContainer>
					<ModalButton onClick={() => setActiveModal(false)}>O K</ModalButton>
				</ProgramButtonContainer> */}
			</ModalContent>
		</ModalContainer>
	);
};
