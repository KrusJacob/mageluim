// import { HERO } from "@/data/hero/hero";
// import type { IEnemy } from "@/types/enemy";
// import type { IHero } from "@/types/hero";
// import type { ISkillHero } from "@/types/skill";
// import { create } from "zustand";

// interface EnemyStatState {
//   enemies: IEnemy[] | null[];
//   setEnemies: (enemies: IEnemy[]) => void;
// }

// export const useEnemyStatStore = create<EnemyStatState>((set) => ({
//   enemies: [null, null, null],
//   setEnemies: (enemies: IEnemy[]) => {
//     enemies.forEach((enemy) => (enemy.takenLastDamage = []));
//     set({ enemies });
//   },
// }));
