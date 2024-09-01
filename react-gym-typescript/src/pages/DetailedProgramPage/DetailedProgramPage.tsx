import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BuyItemLinks, BuyItemType } from "@shared/model/types/types";
import { BuyItemFrame } from "@shared/ui/buyItemFrame/BuyItemFrame";
import { programStorage } from "../../stores";

export const DetailedProgramPage: React.FC = observer(() => {
	const { getProgram } = programStorage;
	const { id } = useParams();
	const programInfo = getProgram(+(id ?? ""));

	const [activeModal, setActiveModal] = useState(false);

	if (!programInfo) return <></>;

	const { imageUrl, name, longText, price } = programInfo;
	const itemType = BuyItemType.program;
	const itemBackLink = BuyItemLinks.programs;
	return (
		<BuyItemFrame
			itemType={itemType}
			title={name}
			longText={longText}
			price={`${price} руб.`}
			imageUrl={imageUrl}
			activeModal={activeModal}
			setActiveModal={setActiveModal}
			backLink={`/${itemBackLink}`}
		/>
	);
});
