import { type FC } from "react";

import MoreInfo from "@widgets/ui/MoreInfo";
import TrainerAdvice from "@widgets/ui/TrainerAdvice";
import WeekProducts from "@widgets/ui/WeekProducts";

export const MainPage: FC = () => {
	return (
		<>
			<WeekProducts />
			<TrainerAdvice />
			<MoreInfo />
		</>
	);
};
