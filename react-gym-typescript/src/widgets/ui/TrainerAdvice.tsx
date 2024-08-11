import { type FC } from "react";
import { EndLine } from "@shared/ui/additionalElements/EndLine";
import TrainerAvatar from "@shared/ui/avatars/TrainerAvatar";
import { StyledButton } from "@shared/ui/buttons/buttons";
import { StyledContainer } from "@shared/ui/generalStyles/generalStyles";
import { MainTitle } from "@shared/ui/typographies";
import { ArticleText, MediumTitle } from "@shared/ui/typographies/Typographies";

export const TrainerAdvice: FC = () => {
	return (
		<StyledContainer>
			<MainTitle children={"Совет тренера"} />

			<ArticleText
				children={
					"Люди думают, что знаменитости проводят в спортзале по полдня, поэтому так хорошо и выглядят. Но это не так: у большинства селебрити есть максимум час на тренировку. Дело не в том, как долго вы работаете, а в том, насколько усердно. Своим подопечным я рекомендую интервальные тренировки, например, по такой схеме: 15 секунд отжиманий, 10 секунд отдыха, 15 секунд выпадов, 10 секунд отдыха, 15 секунд бега с высоким подъемом коленей, 10 секунд отдыха, 15 секунд прыжков из стороны в стороны, 10 секунд отдыха». Если выполнить несколько таких «кругов» подряд, то даже получасовая тренировка будет весьма эффективной"
				}
			/>

			<TrainerAvatar />
			<MediumTitle children={"Алексей"} />

			<StyledButton children={"Подробнее"} />
			<EndLine />
		</StyledContainer>
	);
};

export default TrainerAdvice;
