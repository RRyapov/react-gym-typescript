import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import ky from "ky";

import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramTitleBlock,
  ProgramButton,
  ProgramPageBlock,
  ProgramLongRead,
  GeneralProgramPageBlock,
  SportArticleTitle,
  ProductsTitlesOnMainPage,
  ProgramDetailedTitle,
  ProgramDetailedButtonContainer,
} from "../common";
import { programStorage, ProgramTypes } from "../stores";
import { ModalTitle, ModalWindowForCart } from "../components";
import { Link } from "react-router-dom";

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
          <ProgramDetailedTitle>
            <span>{name}</span>
          </ProgramDetailedTitle>
        </ProgramTitleBlock>
        <ProgramBlock>
          <ProgramDescription>
            <ProgramLongRead>{longText}</ProgramLongRead>
            <SportArticleTitle>{price} руб.</SportArticleTitle>
            <ProgramDetailedButtonContainer>
              <ProgramButton>
                <span
                  onClick={() => {
                    setActiveModal(true);
                    setTimeout(() => setActiveModal(false), 3000);
                  }}
                >
                  Купить
                </span>
              </ProgramButton>
              <Link to="/programs">
                <ProgramButton>
                  <span>Назад</span>
                </ProgramButton>
              </Link>
            </ProgramDetailedButtonContainer>
          </ProgramDescription>
          <ProgramImage>
            <img src={imageUrl} alt="program" />
          </ProgramImage>
        </ProgramBlock>
      </ProgramPageBlock>
      <ModalWindowForCart
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      >
        <ModalTitle>
          Программа тренировок "{name}" добавлена в корзину.
        </ModalTitle>
      </ModalWindowForCart>
    </GeneralProgramPageBlock>
  );
});
