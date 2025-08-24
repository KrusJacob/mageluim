import { ALL_ARTIFACT_LIST } from "@/data/artifacts/artifacts_all";
import { HERO } from "@/data/hero/hero";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";
import type { IArtifact } from "@/types/artifact";
import type { IEnemy } from "@/types/enemy";
import type { IHero } from "@/types/hero";
import type { ISkill, ISkillHero } from "@/types/skill";
import { getRandomGacha } from "@/utils/getRandomSkills";
import { create } from "zustand";

interface ShopStatState {
  shopSkills: ISkill[] | null;
  shopArtifacts: IArtifact[] | null;
  updateShopSkills: () => void;
  updateShopArtifacts: () => void;
}

export const useShopStore = create<ShopStatState>((set) => ({
  shopSkills: getRandomGacha(ALL_SKILL_LIST, 6),
  shopArtifacts: getRandomGacha(ALL_ARTIFACT_LIST, 4),
  updateShopSkills: () => {
    const newSkills = getRandomGacha(ALL_SKILL_LIST, 6);
    set({ shopSkills: newSkills });
  },
  updateShopArtifacts: () => {
    const newArtifacts = getRandomGacha(ALL_ARTIFACT_LIST, 4);
    set({ shopArtifacts: newArtifacts });
  },
}));
