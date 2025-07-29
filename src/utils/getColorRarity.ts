import type { Rarity } from "@/types/skill";

export const getColorRarity = (rarity: Rarity) => {
  switch (rarity) {
    case "common":
      return "var(--color-common)";
    case "rare":
      return "var(--color-rare)";
    case "epic":
      return "var(--color-epic)";
    case "legendary":
      return "var(--color-legendary)";
    default:
      return "gray";
  }
};
