import { Enemy } from "./class";

const src1 =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f3fed49-4124-4f0b-bbe4-fa97b88afb29/dg5hqo0-2a4bb6b2-ff75-41e6-9cea-348d74d9f002.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmM2ZlZDQ5LTQxMjQtNGYwYi1iYmU0LWZhOTdiODhhZmIyOVwvZGc1aHFvMC0yYTRiYjZiMi1mZjc1LTQxZTYtOWNlYS0zNDhkNzRkOWYwMDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HzZjib_h9DkdrjdZpZ1wqCz0yklRbJ--cH032HI60HY";

const src2 = "https://images.playground.com/2193de56ef404f7a867a4f60c285709d.jpeg";
export function createGreenGoblin(level: number = 1): Enemy {
  return new Enemy("Green Goblin", level, "Гоблин-разбойник", "/img/enemies/greenGoblin.png", {
    atk: 100,
    def: 30,
    maxHp: 1100,
    chanceCrit: 10,
    critValue: 150,
    resistance: 5,
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
  return new Enemy(
    "Blue Goblin",
    level,
    "Гоблин-воин",
    "/img/enemies/blueGoblin.png",
    {
      atk: 115,
      def: 40,
      maxHp: 1300,
      chanceCrit: 15,
      critValue: 150,
      resistance: 10,
      durability: {
        fire: 5,
        physical: 5,
        dark: 5,
        light: 5,
        forest: 5,
        water: 15,
        wind: 10,
      },
    },
    function (hero) {}
  );
}

export function createGoldGobin(level: number = 1): Enemy {
  return new Enemy(
    "Gold Goblin",
    level,
    "Гоблин-заклинатель",
    "/img/enemies/goldGoblin.png",
    {
      atk: 80,
      def: 25,
      maxHp: 1250,
      chanceCrit: 0,
      critValue: 150,
      resistance: 20,
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
    function (hero, enemies) {
      enemies.forEach((enemy) => {
        const heal = Math.floor((200 * (level + 1)) / 2);
        enemy.takeHeal(heal);
      });
    }
  );
}

export function createRedGoblin(level: number = 1): Enemy {
  return new Enemy("Red Goblin", level, "Главарь гоблинов", "/img/enemies/redGoblin.png", {
    atk: 160,
    def: 40,
    maxHp: 2500,
    chanceCrit: 15,
    critValue: 150,
    resistance: 50,
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
