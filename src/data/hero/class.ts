import type { HeroStats, IHeroEngine, ITakenDamage } from "@/types/hero";
import type {
  ISkill,
  ISkillHero,
  ITypeDMG,
  ITypeTargetAction,
  ITypeTargetBuff,
  ITypeTargetDebuff,
  ITypeTargetEffect,
} from "@/types/skill";
import { getCalculatedDMG } from "@/utils/getCalculatedDMG";
import { applyAllStatus, resetTarget, useDefense } from "./utils";
import {
  isInvulnerability,
  useBuffDebuffAttack,
  useBuffDebuffDeffense,
  useDebuffs,
  useInspiration,
} from "../skills/helpers";
import type { IEnemy } from "@/types/enemy";

type HeroBaseArgs = Omit<HeroStats, "currentHp">;
export class Hero implements IHeroEngine {
  name: string;
  image: string;
  skills: ISkillHero[];
  battleDeck: ISkillHero[];
  shards: number;
  gold: number;
  stats: HeroStats;
  takenLastDamage: ITakenDamage[] = [];
  buffs: ITypeTargetBuff[] = [];
  debuffs: ITypeTargetDebuff[] = [];
  effects: ITypeTargetEffect[] = [];
  addNewSkill(newSkill: ISkill) {
    const existingSkill = this.skills.find((skill) => skill.id === newSkill.id);
    if (existingSkill) {
      existingSkill.copies += 1;
    } else {
      this.skills.unshift({ ...newSkill, copies: 1, currentCooldown: 0 });
    }
  }
  upgradeSkill(upgradedSkill: ISkillHero) {
    if (upgradedSkill.copies >= 2) {
      upgradedSkill.copies--;
      upgradedSkill.level++;
    }
  }
  addSkillToDeck(skill: ISkillHero) {
    if (this.battleDeck.length < 5) {
      this.battleDeck.push(skill);
    }
  }
  addShards(amount: number) {
    this.shards += amount;
  }
  addGold(amount: number) {
    this.gold += amount;
  }
  useShard() {
    if (this.shards <= 0) return;
    this.shards -= 1;
  }
  useMana(value: number) {
    if (this.stats.currentMana >= value) {
      this.stats.currentMana -= value;
    }
  }
  regenMana() {
    this.stats.currentMana += this.stats.manaRegen.value;
    this.stats.currentMana += useInspiration(this);
    if (this.stats.currentMana > this.stats.maxMana) {
      this.stats.currentMana = this.stats.maxMana;
    }
  }
  removeSkillFromDeck(skill: ISkillHero) {
    this.battleDeck = this.battleDeck.filter((s) => s.id !== skill.id);
  }
  resetCooldownBattleDeck() {
    this.battleDeck.forEach((skill) => (skill.currentCooldown = 0));
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
  useAttack(enemy: IEnemy) {
    let damage = useBuffDebuffAttack(this) * this.stats.atk;
    let defense = useBuffDebuffDeffense(this) * enemy.stats.def;
    damage = useDefense(damage, defense);
    enemy.takeDamage({ element: "physical", value: damage });
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
  takeActions(actions: ITypeTargetAction[]) {
    applyAllStatus.call(this, actions);
  }
  reset() {
    resetTarget(this);
  }

  constructor(name: string, image: string, stats: HeroBaseArgs) {
    this.name = name;
    this.image = image;
    this.skills = [];
    this.battleDeck = [];
    this.shards = 3;
    this.gold = 0;
    this.stats = { ...stats, currentHp: stats.maxHp };
  }
}
