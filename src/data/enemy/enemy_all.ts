import { actionTarget } from "../dmg/dmg_all";
import { BURN, POISON } from "../effects/effects_all";
import { Enemy } from "./class";

export function createGreenGoblin(level: number = 1): Enemy {
  return new Enemy("Гоблин-разбойник", level, "/img/enemies/greenGoblin.png", {
    atk: 100,
    def: 30,
    maxHp: 1100,
    chanceCrit: 10,
    critValue: 150,
    resistance: 5,
    accuracy: 0,
    durability: {
      fire: 5,
      physical: 5,
      dark: 5,
      light: 5,
      forest: 5,
      water: 5,
      wind: 5,
    },
  });
}
export function createBlueGoblin(level: number = 1): Enemy {
  return new Enemy("Гоблин-воин", level, "/img/enemies/blueGoblin.png", {
    atk: 115,
    def: 40,
    maxHp: 1300,
    chanceCrit: 15,
    critValue: 150,
    resistance: 10,
    accuracy: 0,
    durability: {
      fire: 5,
      physical: 5,
      dark: 5,
      light: 5,
      forest: 5,
      water: 15,
      wind: 10,
    },
  });
}

export function createGoldGobin(level: number = 1): Enemy {
  return new Enemy(
    "Гоблин-заклинатель",
    level,
    "/img/enemies/goldGoblin.png",
    {
      atk: 60,
      def: 25,
      maxHp: 1250,
      chanceCrit: 0,
      critValue: 150,
      resistance: 20,
      accuracy: 0,
      durability: {
        fire: 10,
        physical: 0,
        dark: 10,
        light: 10,
        forest: 10,
        water: 10,
        wind: 10,
      },
    },
    "Исцеляет союзников каждый свой ход",
    function (hero, enemies) {
      enemies.forEach((enemy) => {
        const heal = Math.floor((200 * (level + 1)) / 2);
        enemy.takeHeal(heal);
      });
    }
  );
}

export function createRedGoblin(level: number = 1): Enemy {
  return new Enemy("Главарь гоблинов", level, "/img/enemies/redGoblin.png", {
    atk: 150,
    def: 40,
    maxHp: 2500,
    chanceCrit: 15,
    critValue: 150,
    resistance: 50,
    accuracy: 0,
    durability: {
      fire: 25,
      physical: 15,
      dark: 15,
      light: 15,
      forest: 15,
      water: 15,
      wind: 15,
    },
  });
}

export function createPirpleGoblin(level: number = 1): Enemy {
  return new Enemy(
    "Маг гоблинов",
    level,
    "/img/enemies/pirpleGoblin.png",
    {
      atk: 165,
      def: 30,
      maxHp: 1600,
      chanceCrit: 15,
      critValue: 150,
      resistance: 30,
      accuracy: 0,
      durability: {
        fire: 20,
        physical: 10,
        dark: 10,
        light: 10,
        forest: 20,
        water: 20,
        wind: 20,
      },
    },
    "Крадет ману при атаке",
    function (hero, enemies) {
      hero.useMana(1);
    }
  );
}
export function createGreenTroll(level: number = 1): Enemy {
  return new Enemy("Лесный тролль", level, "/img/enemies/greenTroll.png", {
    atk: 170,
    def: 50,
    maxHp: 2600,
    chanceCrit: 0,
    critValue: 150,
    resistance: 15,
    accuracy: 0,
    durability: {
      fire: 15,
      physical: 15,
      dark: 10,
      light: 10,
      forest: 15,
      water: 15,
      wind: 15,
    },
  });
}
export function createGrayTroll(level: number = 1): Enemy {
  return new Enemy(
    "Каменный тролль",
    level,
    "/img/enemies/grayTroll.png",
    {
      atk: 185,
      def: 100,
      maxHp: 2800,
      chanceCrit: 0,
      critValue: 150,
      resistance: 30,
      accuracy: 0,
      durability: {
        fire: 20,
        physical: 30,
        dark: 10,
        light: 10,
        forest: 50,
        water: 30,
        wind: 10,
      },
    },
    "Обладает повышеннной защитой и стойкостью"
  );
}
export function createRedTroll(level: number = 1): Enemy {
  return new Enemy(
    "Огненный тролль",
    level,
    "/img/enemies/redTroll.png",
    {
      atk: 180,
      def: 55,
      maxHp: 3100,
      chanceCrit: 15,
      critValue: 150,
      resistance: 25,
      accuracy: 0,
      durability: {
        fire: 100,
        physical: 10,
        dark: 10,
        light: 10,
        forest: 10,
        water: 0,
        wind: 10,
      },
    },
    "Накладывает поджог при атаке. Иммунитет к огню",
    function (hero, enemies) {
      hero.takeActions([actionTarget(BURN, 1, 1)]);
    }
  );
}
