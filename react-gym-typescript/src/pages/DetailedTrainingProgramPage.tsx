import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramTitleBlock,
  ProgramTitle,
  ProgramButton,
  ProgramPageBlock,
  ProgramLongRead,
  GeneralProgramPageBlock,
  SportArticleTitle,
  ProductsTitlesOnMainPage,
} from "../common";
import { programStorage } from "../stores";
import { ModalTitle, ModalWindow } from "../components";

export const DetailedTrainingProgramPage: React.FC = observer(() => {
  const { getProgram } = programStorage;
  const { id } = useParams();
  const programInfo = getProgram(+(id ?? ""));

  const [activeModal, setActiveModal] = useState(false);

  if (!programInfo) return <></>;

  const { imageUrl, name, longText, price } = programInfo;

  return (
    <GeneralProgramPageBlock>
      <ProgramPageBlock>
        <ProductsTitlesOnMainPage>
          Программы тренировок
        </ProductsTitlesOnMainPage>
        <ProgramTitleBlock>
          <ProgramTitle>
            <span>{name}</span>
          </ProgramTitle>
        </ProgramTitleBlock>
        <ProgramBlock>
          <ProgramDescription>
            <ProgramLongRead>{longText}</ProgramLongRead>
            <SportArticleTitle>{price} руб.</SportArticleTitle>
            <ProgramButton>
              <span onClick={() => setActiveModal(true)}>Купить</span>
            </ProgramButton>
          </ProgramDescription>
          <ProgramImage>
            <img src={imageUrl} alt="program" />
          </ProgramImage>
        </ProgramBlock>
      </ProgramPageBlock>
      <ModalWindow activeModal={activeModal} setActiveModal={setActiveModal}>
        <ModalTitle>
          Программа тренировок "{name}" добавлена в корзину.
        </ModalTitle>
      </ModalWindow>
    </GeneralProgramPageBlock>
  );
});
