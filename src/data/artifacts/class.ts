import type { IArtifact, IArtifactEngine, IArtifactHero, ILevelArtifact, IStat } from "@/types/artifact";
import type { IAmpifications, IHero } from "@/types/hero";
import type { IElement, Rarity } from "@/types/skill";

let id_artifact_common = 0;
let id_artifact_rare = 100;
let id_artifact_epic = 200;
let id_artifact_legendary = 300;

type ArtifactBaseArgs = Omit<IArtifactEngine, "rarity" | "level">;
export class Artifact implements IArtifactEngine {
  name: string;
  img: string;
  description: string;
  id: number;
  level: ILevelArtifact;
  rarity: Rarity;
  data: {
    [K in keyof IAmpifications]?: number[];
  };
  element: IElement[] | IStat[];
  awakenings?: React.ReactNode[];

  static generateId(rarity: Rarity) {
    switch (rarity) {
      case "common":
        return id_artifact_common++;
      case "rare":
        return id_artifact_rare++;
      case "epic":
        return id_artifact_epic++;
      case "legendary":
        return id_artifact_legendary++;
    }
  }

  useArtifact(hero: IHero) {
    Object.entries(this.data).forEach(([key, value]) => {
      const k = key as keyof IAmpifications;
      hero.amplifications[k] += value[this.level];
      // recalculateStatsFromAmplifications(hero, k, 1);
    });
    recalculateStatsFromAmplifications(hero);
  }
  removeArifact(hero: IHero) {
    Object.entries(this.data).forEach(([key, value]) => {
      const k = key as keyof IAmpifications;
      // recalculateStatsFromAmplifications(hero, k, -1);
      hero.amplifications[k] -= value[this.level];
    });
    recalculateStatsFromAmplifications(hero);
  }
  upgradeArtifact(this: IArtifactHero, hero: IHero) {
    if (this.copies >= 2) {
      this.removeArifact(hero);
      this.copies--;
      this.level++;
      this.useArtifact(hero);
      // перенести метод, и пофиксить прокачку
    }
  }

  constructor(args: ArtifactBaseArgs, rarity: Rarity) {
    this.name = args.name;
    this.img = args.img;
    this.data = args.data;
    this.description = args.description;
    this.awakenings = args.awakenings;
    this.rarity = rarity;
    this.level = 0;
    this.element = args.element;
    this.id = Artifact.generateId(rarity);
  }

  getArtifact(): IArtifact {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      img: this.img,
      element: this.element,
      rarity: this.rarity,
      level: this.level,
      data: this.data,
      awakenings: this.awakenings,
      useArtifact: this.useArtifact,
      removeArifact: this.removeArifact,
      upgradeArtifact: this.upgradeArtifact,
    };
  }
}

// function recalculateStatsFromAmplifications(hero: IHero, stat: keyof IAmpifications, sign: 1 | -1) {
//   switch (stat) {
//     case "atk":
//       hero.stats.atk += sign * hero.amplifications.atk;
//       break;
//     case "def":
//       hero.stats.def += sign * hero.amplifications.def;
//       break;
//     case "maxHp":
//       hero.stats.maxHp += sign * hero.amplifications.maxHp;
//       hero.stats.currentHp = hero.stats.maxHp;
//       break;
//     case "maxMana":
//       hero.stats.maxMana += sign * hero.amplifications.maxMana;
//       hero.stats.currentMana = hero.stats.maxMana;
//       break;
//     case "accuracy":
//       hero.stats.accuracy += sign * hero.amplifications.accuracy;
//       break;
//     case "resistance":
//       hero.stats.resistance += sign * hero.amplifications.resistance;
//       break;
//     case "durability":
//       const amp = hero.amplifications.durability;
//       for (const element in hero.stats.durability) {
//         hero.stats.durability[element as keyof typeof hero.stats.durability] += sign * amp;
//       }
//       break;
//   }
// }
function recalculateStatsFromAmplifications(hero: IHero) {
  const amp = hero.amplifications;

  hero.stats.atk = hero.baseStats.atk + amp.atk;
  hero.stats.def = hero.baseStats.def + amp.def;
  hero.stats.maxHp = hero.baseStats.maxHp + amp.maxHp;
  hero.stats.currentHp = hero.stats.maxHp;

  hero.stats.maxMana = hero.baseStats.maxMana + amp.maxMana;
  hero.stats.currentMana = hero.stats.maxMana;

  hero.stats.accuracy = hero.baseStats.accuracy + amp.accuracy;
  hero.stats.resistance = hero.baseStats.resistance + amp.resistance;

  for (const element in hero.stats.durability) {
    hero.stats.durability[element as keyof typeof hero.stats.durability] =
      hero.baseStats.durability[element as keyof typeof hero.baseStats.durability] + amp.durability;
  }
}

export const isArtifact = (item: any): item is IArtifact => typeof item === "object" && "useArtifact" in item;
