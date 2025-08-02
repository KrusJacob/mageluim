import type { IAction, IEffect } from "@/types/effect";
import type {
  IDataAwakenings,
  IElement,
  IElementName,
  ILevelSkill,
  ISkill,
  ISkillEngine,
  ITypeDMG,
  Rarity,
} from "@/types/skill";
type SkillBaseArgs = Omit<ISkillEngine, "rarity" | "level">;

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

  getCurrentAwakeningData(): unknown {
    if (this.data && this.level) {
      return [this.data];
    }
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
      getCurrentAwakeningData: this.getCurrentAwakeningData,
    };
  }
}
