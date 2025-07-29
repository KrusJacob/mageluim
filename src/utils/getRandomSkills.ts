import { GACHA_CHANCE_SKILL } from "@/constant";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";
import type { ISkill, Rarity } from "@/types/skill";

export function getThreeRandomSkills(skills: ISkill[] = ALL_SKILL_LIST) {
  function pickSkill() {
    const roll = Math.random() * 100;
    let cumulative = 0;

    for (const rarity of Object.keys(GACHA_CHANCE_SKILL) as Rarity[]) {
      cumulative += GACHA_CHANCE_SKILL[rarity];
      if (roll < cumulative) {
        const pool = skills.filter((s) => s.rarity === rarity);
        return pool[Math.floor(Math.random() * pool.length)];
      }
    }

    return skills[0]; // fallback
  }

  const selected: ISkill[] = [];
  while (selected.length < 3) {
    const skill = pickSkill();
    if (!selected.some((s) => s.id === skill.id)) {
      selected.push(skill);
    }
  }

  return selected;
}
