import type { IStat, IStatName } from "@/types/artifact";
import { getDataStat } from "@/utils/getDataStat";
import type { ReactNode } from "react";

export class Stat implements IStat {
  name: IStatName;
  label: string;
  Icon: ReactNode;
  color: string;
  getData() {
    return getDataStat(this.name);
  }
  constructor(name: IStatName) {
    this.name = name;
    const { Icon, color, label } = this.getData();
    this.Icon = Icon;
    this.color = color;
    this.label = label;
  }
}
