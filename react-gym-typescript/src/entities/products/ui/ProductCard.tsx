import { ProductCardOnMainPage } from "common";
import { FC } from "react";
import MyLoader from "@shared/ui/loaders/ProductCardLoader";
import ProductCardLoader from "@shared/ui/loaders/ProductCardLoader";
import { ButtonForDetails } from "../../../shared/ui/buttons/buttons";
import { ProductImageBox } from "../../../shared/ui/images/imageStyles";
import { MediumTitle } from "../../../shared/ui/typographies";

type ProductCardProps = {
	imageUrl: string;
	imageAlt: string;
	titleText: string;
};

export const ProductCard: FC<ProductCardProps> = (props) => {
	const { imageUrl, imageAlt, titleText } = props;
	return (
		<ProductCardOnMainPage>
			<ProductImageBox>
				<img
					src={imageUrl}
					alt={imageAlt}
				/>
			</ProductImageBox>
			<MediumTitle children={titleText} />
			<ButtonForDetails />
		</ProductCardOnMainPage>
	);
};

