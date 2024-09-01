//@ts-nocheck

import Pagination from "@mui/material/Pagination";
import { observer } from "mobx-react-lite";
import { useState, type FC } from "react";

import { TrainingProgram } from "@widgets/ui/TrainingProgram";
import { useQueryPrograms } from "@entities/trainingProgram/model/services/query";
import { trainingProgramPosition } from "@entities/trainingProgram/model/types/types";
import { StyledButton } from "@shared/ui/buttons/buttons";
import { ProgramButtonContainer, BuyItemBlock } from "@shared/ui/generalStyles/generalStyles";
import { ArticleText, LastWordText, MainTitle } from "@shared/ui/typographies/Typographies";
import ProgramDropdown from "../../../components/Dropdowns/ProgramDropdown";
import { dropdownStorage } from "../../../stores/dropdownStores";

export const ProgramsPage: FC = observer(() => {
	const { visibleProgramDropdown, setVisibleProgramDropdown } = dropdownStorage;

	const { data: requestedPrograms, isLoading } = useQueryPrograms();

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3; // количество элементов на странице

	if (isLoading) {
		return <></>;
	}

	const indexOfLastProgram = currentPage * itemsPerPage;
	const indexOfFirstProgram = indexOfLastProgram - itemsPerPage;
	// const currentItems = requestedPrograms.slice(indexOfFirstProgram, indexOfLastProgram);
	const currentItems = requestedPrograms[0].programs.slice(indexOfFirstProgram, indexOfLastProgram);
	console.log("currentItems: ", currentItems);

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
		setCurrentPage(newPage);
	};

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
			{currentItems.map((program) => {
				const position = program.id % 2 === 0 ? trainingProgramPosition.right : trainingProgramPosition.left;
				return (
					<TrainingProgram
						position={position}
						key={program.id}
						{...program}
					/>
				);
			})}

			<Pagination
				onChange={handleChangePage}
				count={5}
				color="primary"
				size="large"
				sx={{
					"& .MuiButtonBase-root.MuiPaginationItem-root": {
						margin: "10px 3px !important",
						minWidth: "45px",
						border: "3px solid #1dd6ff !important",
						fontFamily: '"Anton", sans-serif',
						fontWeight: 500,
						fontStyle: "normal",
						fontSize: "6mm",
						color: "#ffffff",
					},
				}}
				page={currentPage}
			/>
		</BuyItemBlock>
	);
});
