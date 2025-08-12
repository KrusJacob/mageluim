import type { ReactNode } from "react";
import type { IElementName } from "./skill";

export type IEffectName =
  | "freeze"
  | "wet"
  | "burn"
  | "poison"
  | "stun"
  | "darkness"
  | "blind"
  | "heal"
  | "inspiration"
  | "invulnerability";
export type IEffect = {
  name: IEffectName;
  color: string;
  label: string;
  Icon: ReactNode;
  maxLayer: number;
  type: "effect";
  description?: string;
};

// export type IDebuff = "water" | "wet" | "burn" | "poison" | "stun";
export type ITypeAction = "buff" | "debuff";
export type IActionElement = IElementName | "attack" | "def";
export interface IAction {
  elementName: IActionElement;
  color: string;
  label: string;
  labelElement: string;
  Icon: ReactNode;
  level: LevelAction;
  type: ITypeAction;
  description?: string;
}
export type LevelAction = 1 | 2;
