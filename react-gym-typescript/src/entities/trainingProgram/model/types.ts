import type { ProgramType } from "../../../stores";

export enum trainingProgramPosition {
  left = "left",
  right = "right",
}

export type ITrainingProgram = ProgramType & {
  position: trainingProgramPosition;
};
