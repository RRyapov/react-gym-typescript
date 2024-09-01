import { type FC } from "react";

import { useChangeModalWindow } from "@shared/model/store/modalChangerStore/modalChangerStore";
import { StyledButton } from "@shared/ui/buttons/buttons";
import { ModalContainer, ModalContent } from "@shared/ui/generalStyles/generalStyles";
import { AddedToCartModalTypes } from "../model/types/types";

export const AddedToCartModal: FC<AddedToCartModalTypes> = ({ activeModal, setActiveModal, children }) => {
	const { openModalState, setOpenModalState } = useChangeModalWindow();

	return (
		<ModalContainer>
			<ModalContent>
				{children}
				<StyledButton
					children={"ОК"}
					onClick={() => setOpenModalState(!openModalState)}
				/>
			</ModalContent>
		</ModalContainer>
	);
};
