import type { IAction, IEffect } from "@/types/effect";
import type { IElement, IElementName, ISkill, ISkillEngine, Rarity } from "@/types/skill";
type SkillBaseArgs = Omit<ISkillEngine, "rarity">;

let id_skill_common = 0;
let id_skill_rare = 100;
let id_skill_epic = 200;
let id_skill_legendary = 300;

export class SkillEngine implements ISkillEngine {
  name: string;
  description: string | React.ReactNode;
  url: string;
  img?: string;
  element: IElement[];
  rarity: Rarity;
  id: number;
  tags?: IEffect[] | IAction[];

  constructor(args: SkillBaseArgs, rarity: Rarity) {
    this.name = args.name;
    this.description = args.description;
    this.url = args.url;
    this.img = args.img;
    this.element = args.element;
    this.rarity = rarity;
    this.tags = args.tags;
    this.id = SkillEngine.generateId(rarity);
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
      url: this.url,
      img: this.img,
      tags: this.tags,
      element: this.element,
      rarity: this.rarity,
    };
  }
}
