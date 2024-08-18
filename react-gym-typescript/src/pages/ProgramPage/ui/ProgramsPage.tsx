import { observer } from "mobx-react-lite";
import { type FC } from "react";

import { TrainingProgram } from "@widgets/ui/TrainingProgram";
import { trainingProgramPosition } from "@entities/trainingProgram/model/types";
import { StyledButton } from "@shared/ui/buttons/buttons";
import { ProgramButtonContainer, BuyItemBlock } from "@shared/ui/generalStyles/generalStyles";
import { ArticleText, LastWordText, MainTitle } from "@shared/ui/typographies/Typographies";
import { Pagination } from "../../../components";
import ProgramDropdown from "../../../components/Dropdowns/ProgramDropdown";
import { programStorage } from "../../../stores";
import { dropdownStorage } from "../../../stores/dropdownStores";

export const ProgramsPage: FC = observer(() => {
	const { paginatedAndFilteredPrograms } = programStorage;
	const { visibleProgramDropdown, setVisibleProgramDropdown } = dropdownStorage;

	return (
		<BuyItemBlock>
			<MainTitle children={"Программы тренировок"} />
			<ArticleText
				children={
					"Составление тренировок представляет собой сложный процесс, требующий большого опыта и специальных знаний. К счастью, Вам не придется тратить свое время на это - просто доверьтесь профессионалам. Наши тренеры составили программы тренировок, среди которых Вы можете выбрать или подобрать под себя именно то, что подходит именно Вам, воспользовавшись нашим сервисом подбора программы тренировок. Желаем удачи на тропе спорта!"
				}
			/>
			<LastWordText children={"С уважением, команда React Gym"} />

			<ProgramButtonContainer>
				<StyledButton
					onClick={setVisibleProgramDropdown}
					children={"Подобрать программу тренировок"}
				/>
			</ProgramButtonContainer>

			{visibleProgramDropdown && <ProgramDropdown />}
			{paginatedAndFilteredPrograms.map((program) => {
				const position = program.id % 2 === 0 ? trainingProgramPosition.right : trainingProgramPosition.left;
				return (
					<TrainingProgram
						position={position}
						key={program.id}
						{...program}
					/>
				);
			})}
			<Pagination />
		</BuyItemBlock>
	);
});
