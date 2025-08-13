import { HERO } from "@/data/hero/hero";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";
import type { IEnemy } from "@/types/enemy";
import type { IHero } from "@/types/hero";
import type { ISkill, ISkillHero } from "@/types/skill";
import { getRandomSkills } from "@/utils/getRandomSkills";
import { create } from "zustand";

interface ShopStatState {
  shopSkills: ISkill[] | null;
  updateShopSkills: () => void;
}

export const useShopStore = create<ShopStatState>((set) => ({
  shopSkills: getRandomSkills(ALL_SKILL_LIST, 7),
  updateShopSkills: () => {
    const newSkills = getRandomSkills(ALL_SKILL_LIST, 7);
    set({ shopSkills: newSkills });
  },
}));
