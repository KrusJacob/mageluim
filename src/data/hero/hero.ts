import type { HeroStats } from "@/types/hero";
import { Hero } from "./class";

const url = "https://masterpiecer-images.s3.yandex.net/7ae49ce76a0511ee8e2992669a1675b3:upscaled";

export const createHero = () => {
  return new Hero("Hero", url, {
    maxHp: 1000,
    atk: 180,
    def: 40,
    currentMana: 15,
    maxMana: 15,
    manaRegen: {
      value: 4,
      insperationValue: 0,
      artifactValue: 0,
    },
    accuracy: 0,
    chanceCrit: 10,
    critValue: 150,
    resistance: 0,
    durability: {
      fire: 0,
      physical: 0,
      dark: 0,
      light: 0,
      forest: 0,
      water: 0,
      wind: 0,
    },
  });
};
export const HERO = new Hero("Hero", url, {
  maxHp: 1000,
  atk: 100,
  def: 10,
  currentMana: 15,
  maxMana: 15,
  manaRegen: {
    value: 1,
    insperationValue: 0,
    artifactValue: 0,
  },
  accuracy: 0,
  chanceCrit: 10,
  critValue: 150,
  resistance: 0,
  durability: {
    fire: 0.5,
    physical: 0.5,
    dark: 0.5,
    light: 0.5,
    forest: 0.5,
    water: 0.5,
    wind: 0.5,
  },
});
