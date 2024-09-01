import { type FC } from "react";
import { Link } from "react-router-dom";

import { StyledButton } from "@shared/ui/buttons/buttons";
import { BuyItemDescription } from "@shared/ui/generalStyles/generalStyles";
import { MainTitle } from "@shared/ui/typographies";
import { BuyItemDescriptionShortRead } from "@shared/ui/typographies/Typographies";
import { ITrainingProgram } from "../model/types/types";

export const BuyItemGeneralDescription: FC<Partial<ITrainingProgram>> = ({ id, name, shortText }) => (
	<BuyItemDescription>
		<MainTitle children={name} />
		<BuyItemDescriptionShortRead children={shortText} />
		<Link to={`/program/${id}`}>
			<StyledButton children={"Подробнее"} />
		</Link>
	</BuyItemDescription>
);
