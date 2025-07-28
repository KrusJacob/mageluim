import type { IAction, ITypeAction, LevelAction } from "@/types/effect";
import type { IElementName } from "@/types/skill";
import { getDataAction } from "@/utils/getDataAction";
import type { ReactNode } from "react";

export class ActionEngine implements IAction {
  element: IElementName;
  Icon: ReactNode;
  color: string;
  label: string;
  labelElement: string;
  typeAction: ITypeAction;
  level: LevelAction;
  description?: string;
  getData() {
    return getDataAction(this.element, this.typeAction);
  }
  getLabel(labelElement: string) {
    return `${labelElement} ${this.level === 1 ? "I" : "II"}`;
  }
  getDescription() {
    const type = this.typeAction === "buff" ? "Наносимый" : "Получаемый";
    const value = this.level === 1 ? "20%" : "40%";
    return `Увеличивает ${type} урон от [${this.labelElement}] на ${value}`;
  }
  constructor(element: IElementName, action: ITypeAction, level: LevelAction) {
    this.element = element;
    this.typeAction = action;
    this.level = level;
    const { Icon, color, label, labelElement } = this.getData();
    this.Icon = Icon;
    this.color = color;
    this.labelElement = labelElement;
    this.label = this.getLabel(label);
    this.description = this.getDescription();
  }
}
