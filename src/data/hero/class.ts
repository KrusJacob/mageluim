import type { HeroStats, IAmpifications, IHeroEngine, ITakenDamage } from "@/types/hero";
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
import { applyAllStatus, resetTarget, useAmplifyDmg, useDefense } from "./utils";
import {
  isInvulnerability,
  useBuffDebuffModifier,
  useBuffs,
  // useBuffDebuffAttack,
  // useBuffDebuffDeffense,
  useDebuffs,
  useInspiration,
} from "../skills/helpers";
import type { IEnemy } from "@/types/enemy";
import { START_GOLD, START_SHARD_SKILL, START_SHARD_ARTIFACT } from "@/constant/hero";
import type { IArtifact, IArtifactHero } from "@/types/artifact";

type HeroBaseArgs = Omit<HeroStats, "currentHp">;
export class Hero implements IHeroEngine {
  name: string;
  image: string;
  skills: ISkillHero[];
  battleDeckSkills: ISkillHero[];
  artifacts: IArtifactHero[];
  battleDeckArtifacts: IArtifactHero[];
  shardsSkill: number;
  shardsArtifact: number;
  gold: number;
  baseStats: HeroStats;
  stats: HeroStats;
  amplifications: IAmpifications;
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
  addNewArtifact(newArtifact: IArtifact) {
    const existingArtifact = this.artifacts.find((artifact) => artifact.id === newArtifact.id);
    if (existingArtifact) {
      existingArtifact.copies += 1;
    } else {
      this.artifacts.unshift({ ...newArtifact, copies: 1 });
    }
  }
  // upgradeSkill(upgradedSkill: ISkillHero) {
  //   if (upgradedSkill.copies >= 2) {
  //     upgradedSkill.copies--;
  //     upgradedSkill.level++;
  //   }
  // }
  // upgradeArtifact(upgradedArtifact: IArtifactHero) {
  //   if (upgradedArtifact.copies >= 2) {
  //     upgradedArtifact.copies--;
  //     upgradedArtifact.level++;
  //     // перенести метод, и пофиксить прокачку
  //   }
  // }
  addSkillToDeck(skill: ISkillHero) {
    if (this.battleDeckSkills.length < 5) {
      this.battleDeckSkills.push(skill);
    }
  }
  addArtifactToDeck(artifact: IArtifactHero) {
    if (this.battleDeckArtifacts.length < 5) {
      this.battleDeckArtifacts.push(artifact);
    }
  }
  addShardSkill(amount: number) {
    this.shardsSkill += amount;
  }
  addShardArtifact(amount: number) {
    this.shardsArtifact += amount;
  }
  addGold(amount: number) {
    this.gold += amount;
  }
  useShardSkill() {
    if (this.shardsSkill <= 0) return;
    this.shardsSkill -= 1;
  }
  useShardArtifact() {
    if (this.shardsArtifact <= 0) return;
    this.shardsArtifact -= 1;
  }
  useMana(value: number) {
    if (this.stats.currentMana >= value) {
      this.stats.currentMana -= value;
    }
  }
  regenMana() {
    this.stats.currentMana += this.stats.manaRegen.value;
    this.stats.currentMana += useInspiration(this);
    this.stats.currentMana += this.amplifications.manaRegen;
    if (this.stats.currentMana > this.stats.maxMana) {
      this.stats.currentMana = this.stats.maxMana;
    }
  }
  removeSkillFromDeck(skill: ISkillHero) {
    this.battleDeckSkills = this.battleDeckSkills.filter((s) => s.id !== skill.id);
  }
  removeArtifactFromDeck(artifact: IArtifactHero) {
    this.battleDeckArtifacts = this.battleDeckArtifacts.filter((a) => a.id !== artifact.id);
  }
  resetCooldownBattleDeck() {
    this.battleDeckSkills.forEach((skill) => (skill.currentCooldown = 0));
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
    let damage = useBuffDebuffModifier(this, "attack") * this.stats.atk;
    let defense = useBuffDebuffModifier(enemy, "def") * enemy.stats.def;
    damage = useAmplifyDmg(this, damage, "physical");
    damage = useBuffs(this, damage, "physical");
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
  takeActions(actions: ITypeTargetAction[], attackerAccuracy: number = 0) {
    applyAllStatus.call(this, actions, attackerAccuracy);
  }
  reset() {
    resetTarget(this);
  }

  constructor(name: string, image: string, stats: HeroBaseArgs) {
    this.name = name;
    this.image = image;
    this.skills = [];
    this.battleDeckSkills = [];
    this.artifacts = [];
    this.battleDeckArtifacts = [];
    this.shardsSkill = START_SHARD_SKILL;
    this.shardsArtifact = START_SHARD_ARTIFACT;
    this.gold = START_GOLD;
    this.stats = { ...stats, currentHp: stats.maxHp };
    this.baseStats = { ...this.stats };
    this.amplifications = getStartAmplification();
  }
}

function getStartAmplification(): IAmpifications {
  return {
    atk: 0,
    def: 0,
    maxHp: 0,
    maxMana: 0,
    manaRegen: 0,
    dark: 0,
    fire: 0,
    forest: 0,
    light: 0,
    physical: 0,
    water: 0,
    wind: 0,
    dotDamage: 0,
    durability: 0,
    chanceCrit: 0,
    critValue: 0,
    resistance: 0,
    accuracy: 0,
  };
}
