import ky from "ky";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { ArticleTitle, MainTitle } from "@shared/ui/typographies";
import {
	ProgramBlock,
	ProgramImage,
	ProgramDescription,
	ProgramTitleBlock,
	ProgramButton,
	ProgramPageBlock,
	ProgramLongRead,
	GeneralProgramPageBlock,
	ProgramDetailedTitle,
	ProgramDetailedButtonContainer,
} from "../common";
import { ModalTitle, ModalWindowForCart } from "../components";
import { programStorage } from "../stores";

export const DetailedProgramPage: React.FC = observer(() => {
	const { getProgram } = programStorage;
	const { id } = useParams();
	const programInfo = getProgram(+(id ?? ""));

	const [activeModal, setActiveModal] = useState(false);

	if (!programInfo) return <></>;

	const { imageUrl, name, longText, price } = programInfo;

	return (
		<GeneralProgramPageBlock>
			<ProgramPageBlock>
				<MainTitle children={"Программы тренировок"} />
				<ProgramTitleBlock>
					<ProgramDetailedTitle>
						<span>{name}</span>
					</ProgramDetailedTitle>
				</ProgramTitleBlock>
				<ProgramBlock>
					<ProgramDescription>
						<ProgramLongRead>{longText}</ProgramLongRead>
						<ArticleTitle>{price} руб.</ArticleTitle>
						<ProgramDetailedButtonContainer>
							<ProgramButton>
								<span
									onClick={() => {
										setActiveModal(true);
										setTimeout(() => setActiveModal(false), 3000);
									}}
								>
									Купить
								</span>
							</ProgramButton>
							<Link to="/programs">
								<ProgramButton>
									<span>Назад</span>
								</ProgramButton>
							</Link>
						</ProgramDetailedButtonContainer>
					</ProgramDescription>
					<ProgramImage>
						<img
							src={imageUrl}
							alt="program"
						/>
					</ProgramImage>
				</ProgramBlock>
			</ProgramPageBlock>
			<ModalWindowForCart
				activeModal={activeModal}
				setActiveModal={setActiveModal}
			>
				<ModalTitle>Программа тренировок "{name}" добавлена в корзину.</ModalTitle>
			</ModalWindowForCart>
		</GeneralProgramPageBlock>
	);
});
