import { GACHA_CHANCE_SKILL } from "@/constant";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";
import type { IArtifact } from "@/types/artifact";
import type { ISkill, Rarity } from "@/types/skill";

export function getRandomGacha<T extends ISkill | IArtifact>(list: T[], count: number = 3): T[] {
  function pickSkill() {
    const roll = Math.random() * 100;
    let cumulative = 0;

    for (const rarity of Object.keys(GACHA_CHANCE_SKILL) as Rarity[]) {
      cumulative += GACHA_CHANCE_SKILL[rarity];
      if (roll < cumulative) {
        const pool = list.filter((s) => s.rarity === rarity);
        return pool[Math.floor(Math.random() * pool.length)];
      }
    }

    return list[0]; // fallback
  }

  const selected: T[] = [];
  while (selected.length < count) {
    const item = pickSkill();
    if (!selected.some((s) => s.id === item.id)) {
      selected.push(item);
    }
  }

  return selected;
}
