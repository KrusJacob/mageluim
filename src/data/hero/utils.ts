import { BURN_DOT_DMG, DARKNESS_DOT_DMG, HEAL_DOT_HEAL, POSION_DOT_DMG, WET_CHANCE_REDUCTION } from "@/constant";
import type { IEnemy } from "@/types/enemy";
import type { IAmpifications, IHero } from "@/types/hero";
import type {
  IElementName,
  ITypeTargetAction,
  ITypeTargetBuff,
  ITypeTargetDebuff,
  ITypeTargetEffect,
} from "@/types/skill";

export function isBuff(action: ITypeTargetAction): action is ITypeTargetBuff {
  return action.action.type === "buff";
}

export function isDebuff(action: ITypeTargetAction): action is ITypeTargetDebuff {
  return action.action.type === "debuff";
}

export function isEffect(action: ITypeTargetAction): action is ITypeTargetEffect {
  return action.action.type === "effect";
}

export function applyAllStatus(this: IHero | IEnemy, actions: ITypeTargetAction[], attackerAccuracy: number) {
  actions.forEach((item) => {
    if (isBuff(item)) {
      applyStatusAction(
        this.buffs,
        item,
        (i) => i.action.label,
        (i) => i.action.level
      );
    } else if (isDebuff(item)) {
      applyStatusAction(
        this.debuffs,
        item,
        (i) => i.action.label,
        (i) => i.action.level
      );
    } else if (isEffect(item)) {
      applyStatusEffect(this.effects, item, Math.max(0, this.stats.resistance - attackerAccuracy));
    }
  });
}

export function applyStatusAction<T extends ITypeTargetAction>(
  list: T[],
  incoming: T,
  getLabel: (item: T) => string,
  getLevel: (item: T) => number
) {
  const label = getLabel(incoming);
  const level = getLevel(incoming);
  const index = list.findIndex((item) => getLabel(item) === label);

  if (index !== -1) {
    const existing = list[index];
    const existingLevel = getLevel(existing);

    if (level > existingLevel) {
      list[index] = incoming;
    } else if (level === existingLevel) {
      list[index].duration = incoming.duration;
    }
    // уровень ниже — игнорируем
  } else {
    list.push(incoming);
  }
}

export function applyStatusEffect(list: ITypeTargetEffect[], incoming: ITypeTargetEffect, resistance: number) {
  const name = incoming.action.name;
  let incomingIsWet = name === "wet";

  const index = list.findIndex((e) => e.action.name === name);
  let alreadyisWet = list.some((e) => e.action.name === "wet");

  if (!incomingIsWet) {
    if (isTriggerResistance(resistance, alreadyisWet)) return;
  }

  if (index !== -1) {
    const existing = list[index];

    // Обновляем длительность
    existing.duration = incoming.duration;

    // Увеличиваем слой, но не превышаем maxLayer
    const totalLayer = existing.layer + incoming.layer;
    existing.layer = Math.min(totalLayer, existing.action.maxLayer);
  } else {
    // Новый эффект — ограничиваем слой при добавлении
    const initialLayer = Math.min(incoming.layer, incoming.action.maxLayer);
    list.push({ ...incoming, layer: initialLayer });
  }
}

function isTriggerResistance(resistance: number, isWet: boolean) {
  const effectiveResistance = isWet ? resistance * (1 - WET_CHANCE_REDUCTION / 100) : resistance;

  // Генерируем случайное число от 0 до 100
  const roll = Math.random() * 100;

  // Сопротивление срабатывает, если roll меньше effectiveResistance
  return roll < effectiveResistance;
}

export function tickAllStatuses(target: IEnemy | IHero, heroAmplifications?: IAmpifications) {
  target.takenLastDamage = [];
  useTickHeal(target);
  useDotDamage(target, heroAmplifications);
  target.buffs = tickAction(target.buffs);
  target.debuffs = tickAction(target.debuffs);
  target.effects = tickAction(target.effects);
  setTimeout(() => (target.takenLastDamage = []), 1250);
}

function tickAction<T extends ITypeTargetAction>(actions: T[]) {
  return actions
    .map((action) => ({ ...action, duration: action.duration - 1 }))
    .filter((action) => action.duration > 0);
}

export function useDotDamage(target: IHero | IEnemy, heroAmplifications?: IAmpifications) {
  let posion: ITypeTargetEffect | null = null;
  let burn: ITypeTargetEffect | null = null;
  let darkness: ITypeTargetEffect | null = null;

  target.effects.forEach((effect) => {
    if (effect.action.name === "poison") posion = effect;
    if (effect.action.name === "burn") burn = effect;
    if (effect.action.name === "darkness") darkness = effect;
  });

  if (posion) takePosionDotDamage(target, posion, heroAmplifications);
  if (burn) takeBurnDotDamage(target, burn, heroAmplifications);
  if (darkness) takeDarknessDotDamage(target, darkness, heroAmplifications);
}

export function takePosionDotDamage(
  target: IHero | IEnemy,
  effect: ITypeTargetEffect,
  amplification: IAmpifications | undefined
) {
  const forestAmplification = amplification ? 1 + amplification.forest / 100 : 1;
  const dotAmlification = amplification ? 1 + amplification.dotDamage / 100 : 1;
  const dmgPosion = POSION_DOT_DMG * effect.layer * forestAmplification * dotAmlification;
  target.takeDamage({ element: "forest", value: dmgPosion });
}
export function takeBurnDotDamage(
  target: IHero | IEnemy,
  effect: ITypeTargetEffect,
  amplification: IAmpifications | undefined
) {
  const fireAmplification = amplification ? 1 + amplification.fire / 100 : 1;
  const dotAmlification = amplification ? 1 + amplification.dotDamage / 100 : 1;
  const dmgBurn = ((target.stats.maxHp * BURN_DOT_DMG) / 100) * effect.layer * fireAmplification * dotAmlification;
  target.takeDamage({ element: "fire", value: dmgBurn });
}
export function takeDarknessDotDamage(
  target: IHero | IEnemy,
  effect: ITypeTargetEffect,
  amplification: IAmpifications | undefined
) {
  const darkAmplification = amplification ? 1 + amplification.dark / 100 : 1;
  const dotAmlification = amplification ? 1 + amplification.dotDamage / 100 : 1;
  const dmgDarkness =
    ((target.stats.maxHp * DARKNESS_DOT_DMG) / 100) * effect.layer * darkAmplification * dotAmlification;
  target.takeDamage({ element: "dark", value: dmgDarkness });
}

export function useTickHeal(target: IHero | IEnemy) {
  const heal = target.effects.find((effect) => effect.action.name === "heal");
  if (!heal) return;
  const healValue = ((target.stats.maxHp * HEAL_DOT_HEAL) / 100) * heal.layer;
  target.takeHeal(healValue);
}

function isHero(target: IHero | IEnemy): target is IHero {
  return "skills" in target;
}

export function resetTarget(target: IHero | IEnemy) {
  target.buffs = [];
  target.debuffs = [];
  target.effects = [];
  target.takeHeal(target.stats.maxHp);
  target.takenLastDamage = [];

  if (isHero(target)) {
    target.stats.currentMana = target.stats.maxMana;
    target.resetCooldownBattleDeck();
  }
}

export function useDefense(attack: number, defense: number) {
  return attack - defense > 0 ? attack - defense : 1;
}

export function useAmplifyDmg(attacker: IHero, dmgValue: number, elementName: IElementName) {
  if (attacker.amplifications[elementName] > 0) {
    return dmgValue * (1 + attacker.amplifications[elementName] / 100);
  }
  return dmgValue;
}
