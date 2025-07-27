import type { IElement } from "@/types/skill";

export const getColorElement = (element: IElement) => {
  switch (element) {
    case "physical":
      return "slategrey";
    case "fire":
      return "red";
    case "water":
      return "blue";
    case "wind":
      return "turquoise";
    case "forest":
      return "green";
    case "dark":
      return "slateblue";
    case "light":
      return "gold";
    default:
      return "gray";
  }
};
