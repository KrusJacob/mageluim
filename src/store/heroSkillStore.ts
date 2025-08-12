// store/deckStore.ts
import { create } from "zustand";
import type { ISkill, ISkillHero } from "@/types/skill";
import type { IEnemy } from "@/types/enemy";
import type { IHero } from "@/types/hero";
import { HERO, createHero } from "@/data/hero/hero";
import { tickAllStatuses } from "@/data/hero/utils";

interface HeroSkillState {
  hero: IHero;
  enemies: IEnemy[] | null[];
  battleDeck: ISkillHero[];
  skills: ISkillHero[];
  shards: number;
  gold: number;
  idAttackerEnemy: number | null;
  setHero: (hero: IHero) => void;
  setEnemies: (enemies: IEnemy[]) => void;
  addToDeck: (skill: ISkillHero) => void;
  removeFromDeck: (skill: ISkillHero) => void;
  addShards: (amount: number) => void;
  addGold: (amount: number) => void;
  useShard: () => void;
  addNewSkill: (skill: ISkill) => void;
  upgradeSkill: (skill: ISkillHero) => void;
  syncFromHero: () => void;
  resetLevel: () => void;
  tickCooldowns: () => void;
  beforeMoveHero: () => void;
  attackToHero: (enemies: IEnemy[]) => void;
  useSkill: (skill: ISkillHero, enemies: IEnemy[], index: number) => void;
}

export const useHeroSkillStore = create<HeroSkillState>((set, get) => ({
  hero: HERO,
  enemies: [null, null, null],
  battleDeck: [],
  shards: 0,
  gold: 0,
  skills: [],
  idAttackerEnemy: null,
  setHero: (hero: IHero) => {
    set({ hero, shards: hero.shards, gold: hero.gold });
  },
  setEnemies: (enemies: IEnemy[]) => {
    set({ enemies });
  },
  addShards: (amount: number) => {
    const hero = get().hero;
    hero.addShards(amount);
    set((state) => ({
      shards: hero.shards,
    }));
  },
  addGold: (amount: number) => {
    const hero = get().hero;
    hero.addGold(amount);
    set((state) => ({
      gold: hero.gold,
    }));
  },
  useShard: () => {
    const hero = get().hero;
    hero.useShard();
    set((state) => ({
      shards: hero.shards,
    }));
  },
  useSkill: (skill, enemies, index) => {
    const hero = get().hero;
    skill.useSkill(enemies, index, hero);
  },
  addToDeck: (skill) => {
    const hero = get().hero;
    hero.addSkillToDeck(skill);
    set((state) => ({ battleDeck: [...hero.battleDeck] }));
  },
  removeFromDeck: (skill) => {
    const hero = get().hero;
    hero.removeSkillFromDeck(skill);
    set((state) => ({ battleDeck: [...hero.battleDeck] }));
  },
  addNewSkill: (skill) => {
    const hero = get().hero;
    hero.addNewSkill(skill);
    set((state) => ({
      skills: [...hero.skills],
    }));
  },
  upgradeSkill: (skill) => {
    const hero = get().hero;
    hero.upgradeSkill(skill);
    set((state) => ({
      skills: [...hero.skills],
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
    set((state) => ({ battleDeck: [...hero.battleDeck], enemies: enemies, hero: hero, idAttackerEnemy: null }));
  },
  tickCooldowns: () => {
    const hero = get().hero;
    hero.battleDeck.forEach((skill) => skill.tickCooldown());
    set((state) => ({ battleDeck: hero.battleDeck }));
  },
  beforeMoveHero: () => {
    const hero = get().hero;
    tickAllStatuses(hero);
    hero.regenMana();
    set((state) => ({ hero }));
  },
  syncFromHero: () => {
    // set({ battleDeck: [...HERO.battleDeck] }); // полезно при инициализации
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
