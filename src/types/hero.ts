import type { IArtifact, IArtifactHero } from "./artifact";
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
  shardsSkill: number;
  shardsArtifact: number;
  gold: number;
  skills: ISkillHero[];
  battleDeckSkills: ISkillHero[];
  artifacts: IArtifactHero[];
  battleDeckArtifacts: IArtifactHero[];
  baseStats: HeroStats;
  stats: HeroStats;
  amplifications: IAmpifications;
}

export interface IHero extends IHeroEngine {
  takenLastDamage: ITakenDamage[];
  buffs: ITypeTargetBuff[];
  debuffs: ITypeTargetDebuff[];
  effects: ITypeTargetEffect[];
  takeHeal: (value: number) => void;
  takeDamage: (type: ITypeDMG) => void;
  takeActions: (actions: ITypeTargetAction[], accuracy?: number) => void;
  addNewSkill(newSkill: ISkill): void;
  addNewArtifact(newArtifact: IArtifact): void;
  // upgradeSkill(upgradedSkill: ISkillHero): void;
  // upgradeArtifact(upgradedArtifact: IArtifactHero): void;
  addSkillToDeck(skill: ISkill): void;
  addArtifactToDeck(artifact: IArtifact): void;
  removeSkillFromDeck(skill: ISkillHero): void;
  removeArtifactFromDeck(artifact: IArtifactHero): void;
  resetCooldownBattleDeck(): void;
  useAttack: (enemy: IEnemy) => void;
  useMana: (value: number) => void;
  regenMana: () => void;
  addShardSkill: (amount: number) => void;
  useShardSkill: () => void;
  addShardArtifact: (amount: number) => void;
  useShardArtifact: () => void;
  addGold: (amount: number) => void;
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
  accuracy: number;
}

export interface IAmpifications
  extends Omit<Record<IElementName | keyof HeroStats, number>, "currentHp" | "currentMana"> {
  dotDamage: number;
}

interface IManaRegen {
  value: number;
  insperationValue: number;
  artifactValue: number;
}

export type IDurability = Record<IElementName, number>;
export interface ITakenDamage {
  value: number;
  key: number;
  isHeal?: boolean;
}
