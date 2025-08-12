import type { IEnemy } from "./enemy";

export interface IBattleFloor {
  floor: number;
  enemies: IEnemy[];
  isCleared: boolean;
  reward: IReward;
}

interface IReward {
  gold: number;
  shards?: number;
}
