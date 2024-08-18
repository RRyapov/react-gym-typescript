import { ReactNode } from "react";

export type AddedToCartModalTypes = { 
  activeModal: boolean;
	setActiveModal: (v: boolean) => void;
	children: ReactNode;
}