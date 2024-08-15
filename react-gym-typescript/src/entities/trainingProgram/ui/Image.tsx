import { type FC } from "react";

import { ProgramImage } from "@shared/ui/generalStyles/generalStyles";

import { ITrainingProgram } from "../model/types";

export const Image: FC<ITrainingProgram> = ({ id, imageUrl }) => (
	<ProgramImage>
		<img
			src={imageUrl}
			alt={`program-${id}`}
		/>
	</ProgramImage>
);
