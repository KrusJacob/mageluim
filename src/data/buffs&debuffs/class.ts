import type { IAction, ITypeAction, LevelAction } from "@/types/effect";
import type { IElementName } from "@/types/skill";
import { getDataAction } from "@/utils/getDataAction";
import type { ReactNode } from "react";

export class ActionEngine implements IAction {
  elementName: IElementName;
  Icon: ReactNode;
  color: string;
  label: string;
  labelElement: string;
  typeAction: ITypeAction;
  level: LevelAction;
  description?: string;
  getData() {
    return getDataAction(this);
  }
  getLabel(labelElement: string) {
    return `${labelElement} ${this.level === 1 ? "I" : "II"}`;
  }
  constructor(element: IElementName, action: ITypeAction, level: LevelAction) {
    this.elementName = element;
    this.typeAction = action;
    this.level = level;
    const { Icon, color, label, labelElement, description } = this.getData();
    this.Icon = Icon;
    this.color = color;
    this.labelElement = labelElement;
    this.label = this.getLabel(label);
    this.description = description;
  }
}
