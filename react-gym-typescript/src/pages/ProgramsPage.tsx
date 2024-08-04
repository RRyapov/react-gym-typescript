import { observer } from "mobx-react-lite";
import React from "react";

import { MainTitle } from "@shared/ui/typographies/Typographies";
import { ProgramPageBlock, ProgramPrevWord, ProgramFinalWord, ProgramButton, ProgramButtonContainer, ProductsTitlesOnMainPage } from "../common";
import { Pagination, TrainingProgram, trainingProgramPosition } from "../components";
import ProgramDropdown from "../components/Dropdowns/ProgramDropdown";
import { programStorage } from "../stores";
import { dropdownStorage } from "../stores/dropdownStores";

export const ProgramsPage: React.FC = observer(() => {
	const { paginatedAndFilteredPrograms } = programStorage;
	const { visibleProgramDropdown, setVisibleProgramDropdown } = dropdownStorage;

	return (
		<ProgramPageBlock>
			<MainTitle children={"Программы тренировок"} />
			<ProgramPrevWord>
				Составление тренировок представляет собой сложный процесс, требующий большого опыта и специальных знаний. К счастью, Вам не придется тратить свое время
				на это - просто доверьтесь профессионалам. Наши тренеры составили программы тренировок, среди которых Вы можете выбрать или подобрать под себя именно
				то, что подходит именно Вам, воспользовавшись нашим сервисом подбора программы тренировок. Желаем удачи на тропе спорта!
			</ProgramPrevWord>
			<ProgramFinalWord>
				<span>С уважением, команда React Gym</span>
			</ProgramFinalWord>
			<ProgramButtonContainer>
				<ProgramButton onClick={setVisibleProgramDropdown}>Подобрать программу тренировок</ProgramButton>
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
		</ProgramPageBlock>
	);
});
