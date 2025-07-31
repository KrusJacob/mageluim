import type { IHero } from "@/types/hero";
import type { ISkill, ISkillHero } from "@/types/skill";

export class Hero implements IHero {
  name: string;
  image: string;
  skills: ISkillHero[];
  shards: number;
  getNewSkill(newSkill: ISkill) {
    const existingSkill = this.skills.find((skill) => skill.id === newSkill.id);

    if (existingSkill) {
      existingSkill.copies += 1;
    } else {
      this.skills.unshift({ ...newSkill, copies: 1 });
    }
  }
  upgradeSkill(upgradedSkill: ISkillHero) {
    // Ищем навык по id
    // const index = this.skills.findIndex((skill) => skill.id === upgradedSkill.id);
    // if (index === -1) return;

    // const existingSkill = this.skills[index];

    // Проверяем, достаточно ли копий для апгрейда
    if (upgradedSkill.copies >= 2) {
      upgradedSkill.copies--;
      upgradedSkill.level++;
    }
  }
  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
    this.skills = [];
    this.shards = 20;
  }
}
