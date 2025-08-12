import type { IAction, IEffect, ITypeAction } from "@/types/effect";
import type { ITypeTargetAction, ITypeDMG } from "@/types/skill";

export const dmgFire = (value: number): ITypeDMG => {
  return { value, element: "fire" };
};

export const dmgWater = (value: number): ITypeDMG => {
  return { value, element: "water" };
};

export const dmgWind = (value: number): ITypeDMG => {
  return { value, element: "wind" };
};

export const dmgForest = (value: number): ITypeDMG => {
  return { value, element: "forest" };
};

export const dmgDark = (value: number): ITypeDMG => {
  return { value, element: "dark" };
};

export const dmgLight = (value: number): ITypeDMG => {
  return { value, element: "light" };
};

export const dmgPhysical = (value: number): ITypeDMG => {
  return { value, element: "physical" };
};

export const actionTarget = (action: IEffect | IAction, duration: number, layer = 1): ITypeTargetAction => {
  if ("type" in action && action.type === "effect") {
    return {
      action: action as IEffect,
      duration,
      layer: layer ?? 1,
    };
  } else {
    return {
      action: action as IAction,
      duration,
    };
  }
};
