import type { IEnemy } from "./enemy";
import type {
  IElementName,
  ISkill,
  ISkillHero,
  ITypeDMG,
  ITypeTargetAction,
  ITypeTargetBuff,
  ITypeTargetDebuff,
  ITypeTargetEffect,
} from "./skill";

export interface IHeroEngine {
  name: string;
  image: string;
  shards: number;
  gold: number;
  skills: ISkillHero[];
  battleDeck: ISkillHero[];
  stats: HeroStats;
}

export interface IHero extends IHeroEngine {
  takenLastDamage: ITakenDamage[];
  buffs: ITypeTargetBuff[];
  debuffs: ITypeTargetDebuff[];
  effects: ITypeTargetEffect[];
  takeHeal: (value: number) => void;
  takeDamage: (type: ITypeDMG) => void;
  takeActions: (actions: ITypeTargetAction[]) => void;
  addNewSkill(newSkill: ISkill): void;
  upgradeSkill(upgradedSkill: ISkillHero): void;
  addSkillToDeck(skill: ISkill): void;
  removeSkillFromDeck(skill: ISkillHero): void;
  resetCooldownBattleDeck(): void;
  useAttack: (enemy: IEnemy) => void;
  useMana: (value: number) => void;
  regenMana: () => void;
  addShards: (amount: number) => void;
  addGold: (amount: number) => void;
  useShard: () => void;
  reset: () => void;
}

export interface HeroStats {
  currentHp: number;
  maxHp: number;
  atk: number;
  def: number;
  currentMana: number;
  maxMana: number;
  manaRegen: IManaRegen;
  chanceCrit: number;
  critValue: number;
  resistance: number;
  durability: IDurability;
}

interface IManaRegen {
  value: number;
  insperationValue: number;
}

export type IDurability = Record<IElementName, number>;
export interface ITakenDamage {
  value: number;
  key: number;
  isHeal?: boolean;
}
