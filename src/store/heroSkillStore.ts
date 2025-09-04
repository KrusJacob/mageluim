// store/deckStore.ts
import { create } from "zustand";
import type { ISkill, ISkillHero } from "@/types/skill";
import type { IEnemy } from "@/types/enemy";
import type { IHero } from "@/types/hero";
import { HERO, createHero_1 } from "@/data/hero/hero";
import { tickAllStatuses } from "@/data/hero/utils";
import type { IArtifact, IArtifactHero } from "@/types/artifact";
import { getPrice } from "@/utils/getPrice";

interface HeroSkillState {
  hero: IHero;
  enemies: IEnemy[] | null[];
  skills: ISkillHero[];
  battleDeckSkills: ISkillHero[];
  artifacts: IArtifactHero[];
  battleDeckArtifacts: IArtifactHero[];
  shardsSkill: number;
  shardsArtifact: number;
  gold: number;
  idAttackerEnemy: number | null;
  setHero: (hero: IHero) => void;
  setEnemies: (enemies: IEnemy[]) => void;
  addSkillToDeck: (skill: ISkillHero) => void;
  addArtifactToDeck: (artifact: IArtifactHero) => void;
  removeSkillDeck: (skill: ISkillHero) => void;
  removeArtifactDeck: (artifact: IArtifactHero) => void;
  addShardSkill: (amount: number) => void;
  addShardArtifact: (amount: number) => void;
  addGold: (amount: number) => void;
  useShardSkill: () => void;
  useShardArtifact: () => void;
  addNewSkill: (skill: ISkill) => void;
  addNewArtifact: (artifact: IArtifact) => void;
  upgradeSkill: (skill: ISkillHero) => void;
  upgradeArtifact: (artifact: IArtifactHero) => void;
  resetLevel: () => void;
  tickCooldowns: () => void;
  beforeMoveHero: () => void;
  attackToHero: (enemies: IEnemy[]) => void;
  useSkill: (skill: ISkillHero, enemies: IEnemy[], index: number) => void;
  sellSkill: (skill: ISkillHero, gold: number) => void;
  sellArtifact: (artifact: IArtifactHero, gold: number) => void;
}

export const useHeroSkillStore = create<HeroSkillState>((set, get) => ({
  hero: HERO,
  enemies: [null, null, null],
  shardsSkill: 0,
  shardsArtifact: 0,
  gold: 0,
  skills: [],
  battleDeckSkills: [],
  artifacts: [],
  battleDeckArtifacts: [],
  idAttackerEnemy: null,
  setHero: (hero: IHero) => {
    set({ hero, shardsSkill: hero.shardsSkill, gold: hero.gold, shardsArtifact: hero.shardsArtifact });
  },
  setEnemies: (enemies: IEnemy[]) => {
    set({ enemies });
  },
  addShardSkill: (amount: number) => {
    const hero = get().hero;
    hero.addShardSkill(amount);
    set((state) => ({
      shardsSkill: hero.shardsSkill,
    }));
  },
  addShardArtifact: (amount: number) => {
    const hero = get().hero;
    hero.addShardArtifact(amount);
    set((state) => ({
      shardsArtifact: hero.shardsArtifact,
    }));
  },
  addGold: (amount: number) => {
    const hero = get().hero;
    hero.addGold(amount);
    set((state) => ({
      gold: hero.gold,
    }));
  },
  useShardSkill: () => {
    const hero = get().hero;
    hero.useShardSkill();
    set((state) => ({
      shardsSkill: hero.shardsSkill,
    }));
  },
  useShardArtifact: () => {
    const hero = get().hero;
    hero.useShardArtifact();
    set((state) => ({
      shardsArtifact: hero.shardsArtifact,
    }));
  },
  useSkill: (skill, enemies, index) => {
    const hero = get().hero;
    skill.useSkill(enemies, index, hero);
  },
  addSkillToDeck: (skill) => {
    const hero = get().hero;
    hero.addSkillToDeck(skill);
    set((state) => ({ battleDeckSkills: [...hero.battleDeckSkills] }));
  },
  addArtifactToDeck: (artifact) => {
    const hero = get().hero;
    hero.addArtifactToDeck(artifact);
    artifact.useArtifact(hero);
    set((state) => ({ battleDeckArtifacts: [...hero.battleDeckArtifacts] }));
  },
  removeSkillDeck: (skill) => {
    const hero = get().hero;
    hero.removeSkillFromDeck(skill);
    set((state) => ({ battleDeckSkills: [...hero.battleDeckSkills] }));
  },
  removeArtifactDeck: (artifact) => {
    const hero = get().hero;
    hero.removeArtifactFromDeck(artifact);
    artifact.removeArifact(hero);
    set((state) => ({ battleDeckArtifacts: [...hero.battleDeckArtifacts] }));
  },
  addNewSkill: (skill) => {
    const hero = get().hero;
    hero.addNewSkill(skill);
    set((state) => ({
      skills: [...hero.skills],
    }));
  },
  addNewArtifact: (artifact) => {
    const hero = get().hero;
    hero.addNewArtifact(artifact);
    set(() => ({
      artifacts: hero.artifacts,
    }));
  },

  upgradeSkill: (skill) => {
    const hero = get().hero;
    skill.upgradeSkill();
    set((state) => ({
      skills: [...hero.skills],
    }));
  },
  upgradeArtifact: (artifact) => {
    const hero = get().hero;
    artifact.upgradeArtifact(hero);
    set((state) => ({
      artifacts: [...hero.artifacts],
    }));
  },
  sellSkill: (skill, gold) => {
    const hero = get().hero;
    hero.removeSkill(skill.id);
    hero.addGold(gold);
    set((state) => ({
      skills: [...hero.skills],
      gold: hero.gold,
    }));
  },
  sellArtifact: (artifact, gold) => {
    const hero = get().hero;
    hero.removeArtifact(artifact.id);
    hero.addGold(gold);
    set((state) => ({
      artifacts: [...hero.artifacts],
      gold: hero.gold,
    }));
  },
  resetLevel: () => {
    const hero = get().hero;
    const enemies = get().enemies;
    hero.reset();
    enemies.forEach((enemy) => {
      if (!enemy) return;
      enemy.reset();
    });
    set((state) => ({
      battleDeckSkills: [...hero.battleDeckSkills],
      enemies: enemies,
      hero: hero,
      idAttackerEnemy: null,
    }));
  },
  tickCooldowns: () => {
    const hero = get().hero;
    hero.battleDeckSkills.forEach((skill) => skill.tickCooldown());
    set((state) => ({ battleDeckSkills: hero.battleDeckSkills }));
  },
  beforeMoveHero: () => {
    const hero = get().hero;
    tickAllStatuses(hero);
    hero.regenMana();
    set((state) => ({ hero }));
  },

  attackToHero: (enemies) => {
    set((state) => ({ idAttackerEnemy: null }));
    const hero = get().hero;
    enemies.forEach((enemy, i) => {
      setTimeout(() => {
        if (enemy.useSkill) {
          enemy.useSkill(hero, enemies);
        }
        enemy.useAttack(hero);

        set((state) => ({ hero, idAttackerEnemy: enemy.id }));
      }, (i + 1) * 1000);
    });
  },
}));
