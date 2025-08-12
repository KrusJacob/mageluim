import type { ReactNode } from "react";
import type { IHero, IDurability, ITakenDamage } from "./hero";
import type {
  IElementName,
  ITypeDMG,
  ITypeTargetAction,
  ITypeTargetBuff,
  ITypeTargetDebuff,
  ITypeTargetEffect,
} from "./skill";

export interface IEnemyEngine {
  name: string;
  level: number;
  label: string;
  image: string;
  stats: EnemyStats;
  skill?: (hero: IHero, enemies: IEnemy[]) => void;
  useSkill?: (hero: IHero, enemies: IEnemy[]) => void;
}

export interface IEnemy extends IEnemyEngine {
  id: number;
  buffs: ITypeTargetBuff[];
  debuffs: ITypeTargetDebuff[];
  effects: ITypeTargetEffect[];
  takeHeal: (value: number) => void;
  takeDamage: (type: ITypeDMG) => void;
  takeActions: (actions: ITypeTargetAction[]) => void;
  useAttack: (hero: IHero) => void;
  reset: () => void;

  takenLastDamage: ITakenDamage[];
}

export interface EnemyStats {
  currentHp: number;
  maxHp: number;
  atk: number;
  def: number;
  chanceCrit: number;
  critValue: number;
  resistance: number;
  durability: IDurability;
}
