import type { IElement, ISkill, ISkillEngine, Rarity } from "@/types/skill";
type SkillBaseArgs = Omit<ISkillEngine, "rarity">;

let id_skill_common = 0;
let id_skill_rare = 100;
let id_skill_epic = 200;
let id_skill_legendary = 300;

export class SkillEngine {
  name: string;
  description: string | React.ReactNode;
  url: string;
  img?: string;
  element: IElement[];
  rarity: Rarity;
  id: number;

  constructor(args: SkillBaseArgs, rarity: Rarity) {
    this.name = args.name;
    this.description = args.description;
    this.url = args.url;
    this.img = args.img;
    this.element = args.element;
    this.rarity = rarity;

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
      element: this.element,
      rarity: this.rarity,
    };
  }
}
// class SkillEngine {
//   constructor(skill: ISkillEngine) {
//     this.name = skill.name;
//     this.description = skill.description;
//     this.url = skill.url;
//     this.img = skill.img;
//     this.element = skill.element;
//   }
// }

// export class SkillCommon extends SkillEngine {
//   constructor(public skill: ISkillEngine) {
//     super(skill);
//   }
//   rarity = "common";
//   id = id_skill_common++;
// }

// class SkillRare extends SkillEngine {
//   constructor(public skill: ISkill) {
//     super(skill);
//     this.skill.rarity = "rare";
//   }
// }

// class SkillEpic extends SkillEngine {
//   constructor(public skill: ISkill) {
//     super(skill);
//     this.skill.rarity = "epic";
//   }
// }

// class SkillLegendary extends SkillEngine {
//   constructor(public skill: ISkill) {
//     super(skill);
//     this.skill.rarity = "legendary";
//   }
// }

// class SkillHero extends SkillEngine {
//   constructor(public skill: ISkill) {
//     super(skill);
//   }
//   private level = 1;
//   increaseLevel() {
//     this.level++;
//   }
//   getLevel() {
//     return this.level;
//   }
// }
