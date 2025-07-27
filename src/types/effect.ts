import type { IElement } from "./skill";

export type IEffectName = "breach" | "freeze" | "wet" | "burn" | "poison" | "stun" | "blind";
export type IEffect = {
  name: IEffectName;
  label: string;
};

// export type IDebuff = "water" | "wet" | "burn" | "poison" | "stun";
type Action = "buff" | "debuff";
type level = 1 | 2;

class BuffEngine {
  element: IElement;
  action: Action;
  level: level;
  constructor(element: IElement, action: Action, level: level) {
    this.element = element;
    this.action = action;
    this.level = level;
  }
  getLabel() {
    return `${this.element}_${this.level}`;
  }
}

export class EffectEngine {
  name: IEffectName;
  label: string;
  getLabel() {
    switch (this.name) {
      case "breach":
        return "Разлом";
      case "freeze":
        return "Заморозка";
      case "wet":
        return "Влажность";
      case "burn":
        return "Ожог";
      case "poison":
        return "Яд";
      case "blind":
        return "Ослепление";
      case "stun":
        return "Оглушение";
    }
  }
  constructor(name: IEffectName) {
    this.name = name;
    this.label = this.getLabel();
  }
}
