import type { HeroStats } from "@/types/hero";
import { Hero } from "./class";

// const url = "https://masterpiecer-images.s3.yandex.net/7ae49ce76a0511ee8e2992669a1675b3:upscaled";

export const createHero_1 = () => {
  return new Hero(
    "Боевой маг",
    "/img/heroes/hero_1.png",
    {
      maxHp: 1150,
      atk: 210,
      def: 50,
      currentMana: 13,
      maxMana: 13,
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
    },
    {
      description: "Обладает повышенной живучостью и физической силой",
    }
  );
};
export const createHero_2 = () => {
  return new Hero(
    "Чернокнижник",
    "/img/heroes/hero_2.png",
    {
      maxHp: 1025,
      atk: 170,
      def: 40,
      currentMana: 15,
      maxMana: 15,
      manaRegen: {
        value: 4,
        insperationValue: 0,
        artifactValue: 0,
      },
      accuracy: 5,
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
    },
    {
      amplifications: {
        dotDamage: 10,
        dark: 10,
      },
      description: "Обладает повышенным уроном от тьмы и повышен переодический урон",
    }
  );
};
export const createHero_3 = () => {
  return new Hero(
    "Чародей",
    "/img/heroes/hero_3.png",
    {
      maxHp: 950,
      atk: 180,
      def: 45,
      currentMana: 16,
      maxMana: 16,
      manaRegen: {
        value: 5,
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
    },
    {
      description: "Обладает повышенным запасом маны и ее регенерацией",
    }
  );
};
export const HERO = new Hero(
  "Hero",
  "/img/heroes/hero_1.png",
  {
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
  },
  {
    description: "Обладает повышенной живучостью и физической силой",
  }
);
