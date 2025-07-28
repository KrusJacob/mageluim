import type { ReactNode } from "react";
import type { IAction, IEffect } from "./effect";

export type Rarity = "common" | "rare" | "epic" | "legendary";
export type IElementName = "physical" | "def" | "fire" | "water" | "wind" | "forest" | "light" | "dark";
export interface IElement {
  name: IElementName;
  color: string;
  label: string;
  Icon: ReactNode;
}
export interface ISkillEngine {
  name: string;
  description: string | React.ReactNode;
  url: string;
  img?: string;
  // rarity: Rarity;
  element: IElement[];
  tags?: IEffect[] | IAction[];
}
export interface ISkill extends ISkillEngine {
  id: number;
  rarity: Rarity;
}
export type ISkillHistory = Pick<ISkill, "name" | "rarity"> & {
  dateOfRecipe: Date;
};
