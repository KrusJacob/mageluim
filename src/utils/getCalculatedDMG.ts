import type { IDurability } from "@/types/hero";
import type { ITypeDMG } from "@/types/skill";

export function getCalculatedDMG(typeDMG: ITypeDMG, resistance: IDurability) {
  const { element, value } = typeDMG;
  const resistanceElement = resistance[element];
  return Math.round(value * (1 - resistanceElement / 100));
}
