import { type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddedToCartModal } from "@features/modalWindows/addedToCartModalWindow/ui/AddedToCartModal";
import { BuyItemImage } from "@entities/trainingProgram/ui/BuyItemImage";
import { useChangeModalWindow } from "@shared/model/store/modalChangerStore/modalChangerStore";
import { BuyItemProps } from "@shared/model/types/types";
import { StyledButton } from "../buttons/buttons";
import { BuyItemButtonContainer } from "../buttons/buttonsContainers";
import { BuyItemBlock, BuyItemTitleBlock, GeneralBuyItemBlock, BuyItemDescriptionBlock, BuyItemDescription } from "../generalStyles/generalStyles";
import { ArticleTitle, MainTitle, BuyItemDescriptionLongRead } from "../typographies";
import { PriceText } from "../typographies/Typographies";

export const BuyItemFrame: FC<BuyItemProps> = (props) => {
	const { openModalState, setOpenModalState } = useChangeModalWindow();
	const { title, longText, price, imageUrl, itemType, activeModal, setActiveModal } = props;

	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1); // Переход на предыдущую страницу
	};
	return (
		<GeneralBuyItemBlock>
			<BuyItemBlock>
				<MainTitle children={"Программы тренировок"} />
				<BuyItemTitleBlock>
					<MainTitle children={title} />
				</BuyItemTitleBlock>
				<BuyItemDescriptionBlock>
					<BuyItemDescription>
						<BuyItemDescriptionLongRead children={longText} />
						<PriceText children={price} />
						<BuyItemButtonContainer>
							<StyledButton
								children={"Купить"}
								onClick={() => {
									setOpenModalState(true);
									setTimeout(() => setOpenModalState(false), 4000);
								}}
							/>
							<StyledButton
								onClick={goBack}
								children={"Назад"}
							/>
						</BuyItemButtonContainer>
					</BuyItemDescription>
					<BuyItemImage imageUrl={imageUrl} />
				</BuyItemDescriptionBlock>
			</BuyItemBlock>
			{openModalState ? (
				<AddedToCartModal
					activeModal={activeModal}
					setActiveModal={setActiveModal}
				>
					<ArticleTitle children={`${itemType} ${title} добавлен(а) в корзину`} />
				</AddedToCartModal>
			) : (
				<></>
			)}
		</GeneralBuyItemBlock>
	);
};
