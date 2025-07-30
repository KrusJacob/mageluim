import type { ReactNode } from "react";
import type { IElementName } from "./skill";

export type IEffectName = "freeze" | "wet" | "burn" | "poison" | "stun" | "darkness" | "blind" | "heal";
export type IEffect = {
  name: IEffectName;
  color: string;
  label: string;
  Icon: ReactNode;
  maxLayer: number;
  description?: string;
};

// export type IDebuff = "water" | "wet" | "burn" | "poison" | "stun";
export type ITypeAction = "buff" | "debuff";
export interface IAction {
  elementName: IElementName;
  color: string;
  label: string;
  labelElement: string;
  Icon: ReactNode;
  level: LevelAction;
  typeAction: ITypeAction;
  description?: string;
}
export type LevelAction = 1 | 2;
