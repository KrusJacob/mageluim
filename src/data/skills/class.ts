import type { IAction, IEffect } from "@/types/effect";
import type { IEnemy } from "@/types/enemy";
import type { IHero, IHeroEngine } from "@/types/hero";
import type {
  IDataAwakenings,
  IElement,
  IElementName,
  ILevelSkill,
  ISkill,
  ISkillEngine,
  ISkillHero,
  ITypeDMG,
  Rarity,
} from "@/types/skill";
import { useBuffs, useDebuffs } from "./helpers";
import { useAmplifyDmg } from "../hero/utils";
type SkillBaseArgs = Omit<ISkillEngine, "rarity" | "level" | "currentCooldown">;

let id_skill_common = 0;
let id_skill_rare = 100;
let id_skill_epic = 200;
let id_skill_legendary = 300;

export class SkillEngine implements ISkillEngine {
  name: string;
  description: string | React.ReactNode;
  img: string;
  element: IElement[];
  rarity: Rarity;
  id: number;
  tags?: Array<IEffect | IAction>;
  level: ILevelSkill;
  // manaCost: number;
  awakenings?: React.ReactNode[];
  data: IDataAwakenings;
  currentCooldown: number;

  // getCurrentAwakeningData(): unknown {
  //   if (this.data && this.level) {
  //     return [this.data];
  //   }
  // }

  setCooldown() {
    this.currentCooldown = this.data.cooldown[this.level];
  }
  resetCooldown() {
    this.currentCooldown = 0;
  }
  tickCooldown() {
    if (this.currentCooldown > 0) {
      this.currentCooldown--;
    }
  }
  upgradeSkill(this: ISkillHero) {
    if (this.copies >= 2) {
      this.copies--;
      this.level++;
    }
  }

  useSkill(enemies: IEnemy[], index: number, hero: IHero) {
    const skillLevel = this.level;
    const aoeDmg = this.data.useDmgToAOE;
    if (aoeDmg) {
      Object.entries(aoeDmg).forEach(([elementName, dmgValues]) => {
        let dmgAmount = dmgValues[skillLevel];
        dmgAmount = useBuffs(hero, dmgAmount, elementName as IElementName);
        dmgAmount = useAmplifyDmg(hero, dmgAmount, elementName as IElementName);
        enemies.forEach((enemy) => {
          enemy.takeDamage({ element: elementName as IElementName, value: dmgAmount });
        });
      });
    }
    const singleDmg = this.data.useDmgToTarget;
    if (singleDmg) {
      Object.entries(singleDmg).forEach(([elementName, dmgValues]) => {
        let dmgAmount = dmgValues[skillLevel];
        dmgAmount = useBuffs(hero, dmgAmount, elementName as IElementName);
        dmgAmount = useAmplifyDmg(hero, dmgAmount, elementName as IElementName);
        enemies[index].takeDamage({ element: elementName as IElementName, value: dmgAmount });
      });
    }
    const actionAoe = this.data.useActionToAOE;
    if (actionAoe) {
      enemies.forEach((enemy) => {
        enemy.takeActions(actionAoe[skillLevel], hero.stats.accuracy);
      });
    }
    const actionSingle = this.data.useActionToTarget;
    if (actionSingle) {
      enemies[index].takeActions(actionSingle[skillLevel], hero.stats.accuracy);
    }
    const actionSelf = this.data.useActionToSelf;
    if (actionSelf) {
      hero.takeActions(actionSelf[skillLevel]);
    }
    const healSelf = this.data.useHealSelf;
    if (healSelf) {
      const healValue = (healSelf[skillLevel] * hero.stats.maxHp) / 100;
      hero.takeHeal(healValue);
    }

    hero.useMana(this.data.manaCost[skillLevel]);
    this.setCooldown();
  }

  constructor(args: SkillBaseArgs, rarity: Rarity) {
    this.name = args.name;
    this.description = args.description;
    this.img = args.img;
    this.element = args.element;
    this.rarity = rarity;
    this.tags = args.tags;
    this.id = SkillEngine.generateId(rarity);
    this.level = 0;
    // this.manaCost = args.manaCost;
    this.awakenings = args.awakenings;
    this.data = args.data;
    this.currentCooldown = 0;
  }

  static generateId(rarity: Rarity) {
    switch (rarity) {
      case "common":
        return id_skill_common++;
      case "rare":
        return id_skill_rare++;
      case "epic":
        return id_skill_epic++;
      case "legendary":
        return id_skill_legendary++;
    }
  }

  getSkill(): ISkill {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      img: this.img,
      tags: this.tags,
      element: this.element,
      rarity: this.rarity,
      level: this.level,
      // manaCost: this.manaCost,
      awakenings: this.awakenings,
      data: this.data,
      currentCooldown: this.currentCooldown,
      setCooldown: this.setCooldown,
      resetCooldown: this.resetCooldown,
      tickCooldown: this.tickCooldown,
      useSkill: this.useSkill,
      upgradeSkill: this.upgradeSkill,
    };
  }
}

export const isSkill = (item: any): item is ISkill => typeof item === "object" && "useSkill" in item;
