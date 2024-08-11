// import { ProductCardOnMainPage } from "common";
import { FC } from "react";
import { StyledContainer } from "@shared/ui/generalStyles/generalStyles";
import { StyledButton } from "../../../../shared/ui/buttons/buttons";
import { ProductImageBox } from "../../../../shared/ui/images/imageStyles";
import { MediumTitle } from "../../../../shared/ui/typographies";

type ProductCardProps = {
	imageUrl: string;
	imageAlt: string;
	titleText: string;
};

export const ProductCard: FC<ProductCardProps> = (props) => {
	const { imageUrl, imageAlt, titleText } = props;
	return (
		<StyledContainer>
			<ProductImageBox>
				<img
					src={imageUrl}
					alt={imageAlt}
				/>
			</ProductImageBox>
			<MediumTitle children={titleText} />
			<StyledButton children={"Подробнее"} />
		</StyledContainer>
	);
};
