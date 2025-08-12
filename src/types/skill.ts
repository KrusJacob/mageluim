import type { ReactNode } from "react";
import type { IAction, IEffect } from "./effect";
import type { IEnemy } from "./enemy";
import type { IHero } from "./hero";

export type GachaChanses = Record<Rarity, number>;
export type Rarity = "common" | "rare" | "epic" | "legendary";
export type IElementName = "physical" | "fire" | "water" | "wind" | "forest" | "light" | "dark";
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
  currentCooldown: number;
}
// Record<ILevelSkill, IDataUse>
export type IDataAwakenings = {
  manaCost: number[];
  cooldown: number[];
  useHealSelf?: number[];
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

export type ITypeTargetAction = ITypeTargetBuff | ITypeTargetDebuff | ITypeTargetEffect;
export interface ITypeTargetBuff {
  action: IAction;
  duration: number;
}
export interface ITypeTargetDebuff {
  action: IAction;
  duration: number;
}
export interface ITypeTargetEffect {
  action: IEffect;
  duration: number;
  layer: number;
}

export interface ISkill extends ISkillEngine {
  id: number;
  rarity: Rarity;
  setCooldown(): void;
  resetCooldown(): void;
  tickCooldown(): void;
  useSkill(enemies: IEnemy[], index: number, hero: IHero): void;
}
export interface ISkillHero extends ISkill {
  copies: number;
}
export type ISkillHistory = Pick<ISkill, "name" | "rarity"> & {
  dateOfRecipe: Date;
};
