import type { IEnemy } from "./enemy";

export interface IBattleFloor {
  floor: number;
  enemies: IEnemy[];
  isCleared: boolean;
  reward: IReward;
  isOpen: boolean;
}

interface IReward {
  gold: number;
  shardSkill?: number;
  shardArtifact?: number;
}
