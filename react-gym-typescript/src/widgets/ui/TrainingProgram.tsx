import { type FC } from "react";
import { ITrainingProgram, trainingProgramPosition } from "@entities/trainingProgram/model/types";
import { Description } from "@entities/trainingProgram/ui/Description";
import { Image } from "@entities/trainingProgram/ui/Image";
import { ProgramBlock } from "@shared/ui/generalStyles/generalStyles";

export const TrainingProgram: FC<ITrainingProgram> = (props) => {
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
