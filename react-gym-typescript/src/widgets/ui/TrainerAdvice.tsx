import { Container, styled } from "@mui/material";
import { type FC } from "react";
import { EndLine } from "@shared/ui/additionalElements/EndLine";
import TrainerAvatar from "@shared/ui/avatars/TrainerAvatar";
import { ButtonForDetails } from "@shared/ui/buttons/buttons";
import { StyledContainer } from "@shared/ui/generalStyles/generalStyles";
import { MainTitle } from "@shared/ui/typographies";
import { ArticleText, MediumTitle } from "@shared/ui/typographies/Typographies";

export const TrainerAdvice: FC = () => {
	return (
		<StyledContainer>
			<MainTitle children={"Совет тренера"} />

			<ArticleText />

			<TrainerAvatar />
			<MediumTitle children={"Алексей"} />

			<ButtonForDetails />
			<EndLine />
		</StyledContainer>
	);
};

export default TrainerAdvice;
