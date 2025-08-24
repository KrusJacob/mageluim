import type { IStatName } from "@/types/artifact";
import { RxAvatar } from "react-icons/rx";

export const getDataStat = (stat: IStatName) => {
  let color = "slategrey";
  let label = "";
  let Icon = null;

  switch (stat) {
    case "attack":
      Icon = <RxAvatar />;
      color = "var(--color-physical)";
      label = "Характеристика";
      break;
    default:
      Icon = <RxAvatar />;
  }

  return { Icon, color, label };
};
