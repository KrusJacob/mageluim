import {
  ACTION_VALUE_1,
  ACTION_VALUE_2,
  BURN_DOT_DMG,
  DARKNESS_DOT_DMG,
  INSPIRATION_REGEN_VALUE,
  POSION_DOT_DMG,
} from "@/constant";
import usePluralizationEffect from "@/hooks/usePluralizationEffect";
import type { IAction, IEffect } from "@/types/effect";
import type { IEnemy } from "@/types/enemy";
import type { IHero } from "@/types/hero";
import type { IElement, IElementName, ITypeTargetEffect, Rarity } from "@/types/skill";
import { getDataElement } from "@/utils/getDataElement";

export const useDmgToElement = (value: number, element: IElement) => {
  const { Icon, color } = element;

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color, fontWeight: "bold" }}>
      {value} {Icon}{" "}
    </span>
  );
};

export const useEffectTo = (effect: IEffect, duration: number, layer?: number) => {
  const { Icon, color, label } = effect;
  const plural = usePluralizationEffect(duration);

  return (
    <span>
      Накладывает {layer ? `${layer} слой ` : " "}
      <span style={{ color, display: "inline-flex", alignItems: "center", gap: "2px", fontWeight: "bold" }}>
        {label} {Icon}
      </span>{" "}
      на {duration} {plural}
    </span>
  );
};

export const useActionTo = (action: IAction, duration: number) => {
  const { Icon, color, level, type: typeAction, label } = action;
  const target = typeAction === "buff" ? "Дает герою" : "Накладывает";
  const plural = usePluralizationEffect(duration);

  return (
    <span title={label}>
      {target}{" "}
      <span style={{ color, display: "inline-flex", alignItems: "center", gap: "2px", fontWeight: "bold" }}>
        {label}
      </span>{" "}
      на {duration} {plural}
    </span>
  );

  // return (
  //   <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color, fontWeight: "bold" }}>
  //     {target} {label} {Icon}
  //   </span>
  // );
};

export function useBuffs(target: IHero | IEnemy, dmgValue: number, elementName: IElementName) {
  return target.buffs.reduce((acc, buff) => {
    if (buff.action.elementName === elementName) {
      const modifier = (buff.action.level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2) / 100 + 1;
      acc *= modifier;
    }
    return acc;
  }, dmgValue);
}

export function useDebuffs(target: IHero | IEnemy, dmgValue: number, elementName: IElementName) {
  return target.debuffs.reduce((acc, debuff) => {
    if (debuff.action.elementName === elementName) {
      const modifier = (debuff.action.level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2) / 100 + 1;
      acc *= modifier;
    }
    return acc;
  }, dmgValue);
}

export function isControl(target: IHero | IEnemy) {
  return target.effects.some((effect) => effect.action.name === "freeze" || effect.action.name === "stun");
}
export function isBlindTriggered(target: IHero | IEnemy) {
  const isBlind = target.effects.some((effect) => effect.action.name === "blind");
  if (!isBlind) return false;

  // 50% шанс промаха
  return Math.random() < 0.5;
}

export function useBuffDebuffAttack(target: IHero | IEnemy) {
  let debuffModifier = 0;
  let buffModifier = 0;
  const debuffAttack = target.debuffs.find((effect) => effect.action.elementName === "attack");
  const buffAttack = target.buffs.find((effect) => effect.action.elementName === "attack");
  if (debuffAttack) debuffModifier = (debuffAttack.action.level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2) / 100;
  if (buffAttack) buffModifier = (buffAttack.action.level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2) / 100;
  return buffModifier - debuffModifier + 1;
}
export function useBuffDebuffDeffense(target: IHero | IEnemy) {
  let debuffModifier = 0;
  let buffModifier = 0;
  const debuffDef = target.debuffs.find((effect) => effect.action.elementName === "def");
  const buffDef = target.buffs.find((effect) => effect.action.elementName === "def");
  if (debuffDef) debuffModifier = (debuffDef.action.level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2) / 100;
  if (buffDef) buffModifier = (buffDef.action.level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2) / 100;
  return buffModifier - debuffModifier + 1;
}

export function useInspiration(target: IHero) {
  const isInspiration = target.effects.some((effect) => effect.action.name === "inspiration");
  if (!isInspiration) return 0;
  return INSPIRATION_REGEN_VALUE;
}

export function isInvulnerability(target: IHero | IEnemy) {
  return target.effects.some((effect) => effect.action.name === "invulnerability");
}
