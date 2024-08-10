import { type FC } from "react";
import { Link } from "react-router-dom";

import {
	CartArea,
	CartContainer,
	CartCountPlace,
	CartImage,
	HeaderBackground,
	HeaderGraffity,
	HeaderStrongMan,
	Navigation,
	NavigationUL,
	NavigationLi,
} from "@widgets/ui/Header/headerStyles";

export const Header: FC = () => {
	return (
		<HeaderBackground>
			<Link to="/">
				<HeaderGraffity>
					<img
						src="https://i.postimg.cc/RZcCYwWV/name-picture.png"
						alt="header-graffity"
					/>
				</HeaderGraffity>
			</Link>

			<HeaderStrongMan>
				<img
					src="https://i.postimg.cc/V6HztRV4/yellow-strong-man.png"
					alt="strong-man"
				/>
			</HeaderStrongMan>

			<CartArea>
				<CartContainer>
					<CartCountPlace>
						<span>1</span>
					</CartCountPlace>
					<CartImage>
						<img
							src="https://i.postimg.cc/q7D7c4t8/cart-minipicture.png"
							alt="small cart icon"
						/>
					</CartImage>
					<CartCountPlace sx={{ marginTop: "0px" }}>
						<span>1800 ₽</span>
					</CartCountPlace>
				</CartContainer>
			</CartArea>

			<Navigation>
				<NavigationUL>
					<Link to="/programs">
						<NavigationLi>Программы тренировок</NavigationLi>
					</Link>
					<NavigationLi>Услуги</NavigationLi>
					<NavigationLi>СпортЛикбез</NavigationLi>
					<NavigationLi>Бронирование тренажеров</NavigationLi>
					<NavigationLi>О нас</NavigationLi>
				</NavigationUL>
			</Navigation>
		</HeaderBackground>
	);
};
