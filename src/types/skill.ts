import type { ReactNode } from "react";
import type { IAction, IEffect } from "./effect";

export type GachaChanses = Record<Rarity, number>;
export type Rarity = "common" | "rare" | "epic" | "legendary";
export type IElementName = "physical" | "attack" | "def" | "fire" | "water" | "wind" | "forest" | "light" | "dark";
export interface IElement {
  name: IElementName;
  color: string;
  label: string;
  Icon: ReactNode;
}

export type ILevelSkill = 0 | 1 | 2 | 3;
export interface ISkillEngine {
  name: string;
  description: string | React.ReactNode;
  img: string;
  level: ILevelSkill;
  getCurrentAwakeningData?(): unknown;
  data: IDataAwakenings;
  awakenings?: React.ReactNode[];
  element: IElement[];
  tags?: Array<IEffect | IAction>;
}
// Record<ILevelSkill, IDataUse>
export type IDataAwakenings = {
  manaCost: number[];
  useDmgToTarget?: Partial<Record<IElementName, number[]>>;
  useDmgToAOE?: Partial<Record<IElementName, number[]>>;
  useActionToSelf?: ITypeTargetAction[][];
  useActionToTarget?: ITypeTargetAction[][];
  useActionToAOE?: ITypeTargetAction[][];
};

export interface ITypeDMG {
  value: number;
  element: IElementName;
}

export interface ITypeTargetAction {
  action: IEffect | IAction;
  duration: number;
  layer?: number;
}

export interface ISkill extends ISkillEngine {
  id: number;
  rarity: Rarity;
}
export interface ISkillHero extends ISkill {
  copies: number;
}
export type ISkillHistory = Pick<ISkill, "name" | "rarity"> & {
  dateOfRecipe: Date;
};
