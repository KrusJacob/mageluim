export type Rarity = "common" | "rare" | "epic" | "legendary";
export type IElement = "physical" | "fire" | "water" | "wind" | "forest" | "light" | "dark";

export interface ISkillEngine {
  name: string;
  description: string | React.ReactNode;
  url: string;
  img?: string;
  // rarity: Rarity;
  element: IElement[];
}
export interface ISkill extends ISkillEngine {
  id: number;
  rarity: Rarity;
}
export type ISkillHistory = Pick<ISkill, "name" | "rarity"> & {
  dateOfRecipe: Date;
};
