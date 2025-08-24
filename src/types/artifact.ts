import type { ReactNode } from "react";
import type { IElement, Rarity } from "./skill";
import type { IAmpifications, IHero } from "./hero";

export type ILevelArtifact = 0 | 1 | 2 | 3;

export type IStatName = "attack";
export interface IStat {
  name: IStatName;
  color: string;
  label: string;
  Icon: ReactNode;
}
export interface IArtifactEngine {
  name: string;
  img: string;
  description: string;
  level: ILevelArtifact;
  element: IElement[] | IStat[];
  awakenings?: React.ReactNode[];
  data: {
    [K in keyof IAmpifications]?: number[];
  };
}

export interface IArtifact extends IArtifactEngine {
  id: number;
  rarity: Rarity;
  useArtifact: (hero: IHero) => void;
  removeArifact: (hero: IHero) => void;
  upgradeArtifact(hero: IHero): void;
}
export interface IArtifactHero extends IArtifact {
  copies: number;
}

export type IArtifactHistory = Pick<IArtifact, "name" | "rarity"> & {
  dateOfRecipe: Date;
};
