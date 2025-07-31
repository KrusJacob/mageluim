import type { ISkill, ISkillHero } from "./skill";

export interface IHero {
  name: string;
  image: string;
  shards: number;
  skills: ISkillHero[];
}
