import { type FC } from "react";
import { StyledButton } from "@shared/ui/buttons/buttons";
import { StyledContainer } from "@shared/ui/generalStyles/generalStyles";
import { MainTitle } from "@shared/ui/typographies";
import { ArticleTitle } from "@shared/ui/typographies/Typographies";

const MoreInfo: FC = () => {
	return (
		<StyledContainer>
			<MainTitle children={"Узнай больше"} />
			<StyledContainer sx={{ margin: "unset !important", marginBottom: "35px !important" }}>
				<ArticleTitle children={"Как тренироваться на развитие максимальной силы?"} />
				<ArticleTitle children={"Асимметрия мышц - что это и как с этим бороться?"} />
				<ArticleTitle children={"Первая помощь при растяжениях мышц и связок"} />
			</StyledContainer>

			<StyledButton children={"Подробнее"} />
		</StyledContainer>
	);
};

export default MoreInfo;
