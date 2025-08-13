import { createBlueGoblin, createGoldGobin, createGreenGoblin, createRedGoblin } from "@/data/enemy/enemy_all";
import type { IBattleFloor } from "@/types/battle";

export const ALL_FLOOR: IBattleFloor[] = [
  {
    floor: 1,
    enemies: [createGreenGoblin(), createGreenGoblin(), createGreenGoblin()],
    isCleared: false,
    reward: { gold: 100 },
    isOpen: true,
  },
  {
    floor: 2,
    enemies: [createGreenGoblin(), createBlueGoblin(), createGreenGoblin()],
    isCleared: false,
    reward: { gold: 105, shards: 1 },
    isOpen: false,
  },
  {
    floor: 3,
    enemies: [createBlueGoblin(), createBlueGoblin(), createBlueGoblin()],
    isCleared: false,
    reward: { gold: 110 },
    isOpen: false,
  },
  {
    floor: 4,
    enemies: [createBlueGoblin(), createGreenGoblin(2), createBlueGoblin()],
    isCleared: false,
    reward: { gold: 115, shards: 1 },
    isOpen: false,
  },
  {
    floor: 5,
    enemies: [createBlueGoblin(), createGreenGoblin(2), createGoldGobin()],
    isCleared: false,
    reward: { gold: 120 },
    isOpen: false,
  },
  {
    floor: 6,
    enemies: [createBlueGoblin(), createRedGoblin(), createGoldGobin()],
    isCleared: false,
    reward: { gold: 125, shards: 1 },
    isOpen: false,
  },
  {
    floor: 7,
    enemies: [createGreenGoblin(2), createBlueGoblin(2), createGreenGoblin(2)],
    isCleared: false,
    reward: { gold: 130 },
    isOpen: false,
  },
  {
    floor: 8,
    enemies: [createGoldGobin(), createBlueGoblin(3), createGoldGobin()],
    isCleared: false,
    reward: { gold: 135, shards: 1 },
    isOpen: false,
  },
  {
    floor: 9,
    enemies: [createBlueGoblin(2), createBlueGoblin(2), createGoldGobin(2)],
    isCleared: false,
    reward: { gold: 140 },
    isOpen: false,
  },
  {
    floor: 10,
    enemies: [createGreenGoblin(2), createRedGoblin(2), createGoldGobin(2)],
    isCleared: false,
    reward: { gold: 145, shards: 1 },
    isOpen: false,
  },
];
