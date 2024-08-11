import { type FC } from "react";
import { Link } from "react-router-dom";

import { StyledButton } from "@shared/ui/buttons/buttons";
import { ProgramDescription, ProgramImage } from "@shared/ui/generalStyles/generalStyles";
import { MainTitle } from "@shared/ui/typographies";
import { ProgramShortRead } from "@shared/ui/typographies/Typographies";
import { ITrainingProgram } from "./types";

export const Description: React.FC<ITrainingProgram> = ({ id, name, shortText }) => (
	<ProgramDescription>
		<MainTitle children={name} />
		<ProgramShortRead children={shortText} />
		<Link to={`/program/${id}`}>
			<StyledButton children={"Подробнее"} />
		</Link>
	</ProgramDescription>
);

export const Image: FC<ITrainingProgram> = ({ id, imageUrl }) => (
	<ProgramImage>
		<img
			src={imageUrl}
			alt={`program-${id}`}
		/>
	</ProgramImage>
);
