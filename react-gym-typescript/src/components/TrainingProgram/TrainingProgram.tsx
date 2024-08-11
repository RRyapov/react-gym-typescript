import React from "react";
import { ProgramBlock } from "@shared/ui/generalStyles/generalStyles";
import { Description, Image } from "./Description";
import { ITrainingProgram, trainingProgramPosition } from "./types";

export const TrainingProgram: React.FC<ITrainingProgram> = (props) => {
	return (
		<ProgramBlock>
			{props.position === trainingProgramPosition.right && (
				<>
					<Description {...props} />
					<Image {...props} />
				</>
			)}
			{props.position === trainingProgramPosition.left && (
				<>
					<Image {...props} />
					<Description {...props} />
				</>
			)}
		</ProgramBlock>
	);
};
