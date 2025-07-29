import type { IEffectName } from "@/types/effect";
import type { IElement, IElementName } from "@/types/skill";
import { getDataElement } from "@/utils/getDataElement";
import type { ReactNode } from "react";

export class ElementEngine implements IElement {
  name: IElementName;
  label: string;
  Icon: ReactNode;
  color: string;
  getData() {
    return getDataElement(this.name);
  }
  constructor(name: IElementName) {
    this.name = name;
    const { Icon, color, label } = this.getData();
    this.Icon = Icon;
    this.color = color;
    this.label = label;
  }
}
