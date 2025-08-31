import type { EnemyStats, IEnemy, IEnemyEngine } from "@/types/enemy";
import type { IHero, IDurability, ITakenDamage } from "@/types/hero";
import type {
  ISkillHero,
  ITypeDMG,
  ITypeTargetAction,
  ITypeTargetBuff,
  ITypeTargetDebuff,
  ITypeTargetEffect,
} from "@/types/skill";
import { getCalculatedDMG } from "@/utils/getCalculatedDMG";
import { applyAllStatus, resetTarget, useDefense } from "../hero/utils";
import {
  isBlindTriggered,
  isControl,
  isInvulnerability,
  useBuffDebuffModifier,
  // useBuffDebuffAttack,
  // useBuffDebuffDeffense,
  useDebuffs,
} from "../skills/helpers";

type EnemyBaseArgs = Omit<EnemyStats, "currentHp">;
let id_enemy = 0;
export class Enemy implements IEnemyEngine {
  id: number;
  name: string;
  level: number;
  image: string;
  stats: EnemyStats;
  takenLastDamage: ITakenDamage[] = [];
  buffs: ITypeTargetBuff[] = [];
  debuffs: ITypeTargetDebuff[] = [];
  effects: ITypeTargetEffect[] = [];
  skill?: (hero: IHero, enemies: IEnemy[]) => void;
  descriptionSkill?: string | undefined;

  useAttack(hero: IHero) {
    if (isControl(this)) return;
    if (isBlindTriggered(this)) return;
    let damage = useBuffDebuffModifier(this, "attack") * this.stats.atk;
    let defense = useBuffDebuffModifier(hero, "def") * hero.stats.def;
    damage = useDefense(damage, defense);
    hero.takeDamage({ element: "physical", value: damage });
  }
  takeHeal(value: number) {
    this.stats.currentHp += Math.floor(value);
    if (this.stats.currentHp > this.stats.maxHp) {
      this.stats.currentHp = this.stats.maxHp;
    }
    this.takenLastDamage.push({
      value: Math.floor(value),
      key: Date.now(),
      isHeal: true,
    });
  }
  useSkill(hero: IHero, enemies: IEnemy[]) {
    if (isControl(this)) return;
    this.skill?.(hero, enemies);
  }
  takeDamage(typeDMG: ITypeDMG) {
    if (this.stats.currentHp <= 0) return;
    let dmgAfterDebuff = useDebuffs(this, typeDMG.value, typeDMG.element);
    let dmgAfterResists = getCalculatedDMG(
      { element: typeDMG.element, value: dmgAfterDebuff },
      this.stats.durability
    );
    if (isInvulnerability(this)) {
      dmgAfterResists = 0;
    }
    this.takenLastDamage.push({
      value: dmgAfterResists,
      key: Date.now(), // уникальный ключ
    });
    if (this.stats.currentHp - dmgAfterResists < 0) {
      this.stats.currentHp = 0;
    } else {
      this.stats.currentHp -= dmgAfterResists;
    }
  }
  takeActions(actions: ITypeTargetAction[], attackerAccuracy: number = 0) {
    applyAllStatus.call(this, actions, attackerAccuracy);
  }
  reset() {
    resetTarget(this);
  }
  constructor(
    name: string,
    level: number,
    image: string,
    stats: EnemyBaseArgs,
    descriptionSkill?: string,
    skill?: (hero: IHero, enemies: IEnemy[]) => void
  ) {
    this.id = id_enemy++;
    this.name = name;
    this.level = level;
    this.image = image;

    this.stats = getEnemyStats(stats, level);
    this.skill = skill;
    this.descriptionSkill = descriptionSkill;
  }
}

function getEnemyStats(stats: EnemyBaseArgs, level: number) {
  const modifier = (level + 1) / 2;
  return {
    ...stats,
    atk: Math.floor(stats.atk * modifier),
    def: Math.floor(stats.def * modifier),
    maxHp: Math.floor(stats.maxHp * modifier),
    currentHp: Math.floor(stats.maxHp * modifier),
  };
}
