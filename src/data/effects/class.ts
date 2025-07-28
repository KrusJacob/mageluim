import type { IEffect, IEffectName } from "@/types/effect";
import { getDataEffect } from "@/utils/getDataEffect";
import type { ReactNode } from "react";

export class EffectEngine implements IEffect {
  name: IEffectName;
  label: string;
  Icon: ReactNode;
  color: string;
  getData() {
    return getDataEffect(this.name);
  }
  constructor(name: IEffectName) {
    this.name = name;
    const { Icon, color, label } = this.getData();
    this.Icon = Icon;
    this.color = color;
    this.label = label;
  }
}
