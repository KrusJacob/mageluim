import type { IAction, IActionElement, ITypeAction, LevelAction } from "@/types/effect";
import type { IElementName } from "@/types/skill";
import { getDataAction } from "@/utils/getDataAction";
import type { ReactNode } from "react";

export class ActionEngine implements IAction {
  elementName: IActionElement;
  Icon: ReactNode;
  color: string;
  label: string;
  labelElement: string;
  type: ITypeAction;
  level: LevelAction;
  description?: string;
  getData() {
    return getDataAction(this);
  }
  getLabel(labelElement: string) {
    return `${labelElement} ${this.level === 1 ? "I" : "II"}`;
  }
  constructor(element: IActionElement, action: ITypeAction, level: LevelAction) {
    this.elementName = element;
    this.type = action;
    this.level = level;
    const { Icon, color, label, labelElement, description } = this.getData();
    this.Icon = Icon;
    this.color = color;
    this.labelElement = labelElement;
    this.label = this.getLabel(label);
    this.description = description;
  }
}
