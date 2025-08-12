import { HERO } from "@/data/hero/hero";
import { create } from "zustand";

interface HeroStatState {
  hp: number;
  maxHp: number;
  mana: number;
  maxMana: number;
  useMana: (value: number) => void;
  regenMana: () => void;
  damage: (value: number) => void;
}

export const useHeroStatStore = create<HeroStatState>((set) => ({
  hp: HERO.stats.currentHp,
  maxHp: HERO.stats.maxHp,
  mana: HERO.stats.currentMana,
  maxMana: HERO.stats.maxMana,
  useMana: (value: number) => {
    HERO.useMana(value);
    set((state) => ({ mana: HERO.stats.currentMana }));
  },
  regenMana: () => {
    HERO.regenMana();
    set((state) => ({ mana: HERO.stats.currentMana }));
  },
  damage: (value: number) => {
    HERO.stats.currentHp -= value;
    set((state) => ({ hp: HERO.stats.currentHp }));
  },
}));
