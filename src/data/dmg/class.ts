import type { IElementName, ITypeDMG } from "@/types/skill";

export class IDamage implements ITypeDMG {
  value: number;
  isAOE: boolean;
  element: IElementName;

  constructor(value: number, element: IElementName, isAOE: boolean) {
    this.value = value;
    this.isAOE = isAOE;
    this.element = element;
  }
}
