import React from "react";
import { Link } from "react-router-dom";

import {
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
  ProgramImage,
} from "../../common";
import { ITrainingProgram } from "./types";

export const Description: React.FC<ITrainingProgram> = ({
  id,
  name,
  shortText,
}) => (
  <ProgramDescription>
    <ProgramTitle>
      <span>{name}</span>
    </ProgramTitle>
    <ProgramShortRead>{shortText}</ProgramShortRead>
    <Link to={`/program/${id}`}>
      <ProgramButton>
        <span>Подробнее</span>
      </ProgramButton>
    </Link>
  </ProgramDescription>
);

export const Image: React.FC<ITrainingProgram> = ({ id, imageUrl }) => (
  <ProgramImage>
    <img src={imageUrl} alt={`program-${id}`} />
  </ProgramImage>
);
