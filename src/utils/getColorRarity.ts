import type { Rarity } from "@/types/skill";

export const getColorRarity = (rarity: Rarity) => {
  switch (rarity) {
    case "common":
      return "green";
    case "rare":
      return "blue";
    case "epic":
      return "blueviolet";
    case "legendary":
      return "gold";
    default:
      return "gray";
  }
};
