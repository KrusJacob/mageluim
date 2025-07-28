import type { IEffect } from "@/types/effect";
import { FaBurn, FaRegSnowflake } from "react-icons/fa";
import { GiPoisonBottle } from "react-icons/gi";
import { PiSpiralLight } from "react-icons/pi";
import { IoIosWater } from "react-icons/io";
import { GiCrackedShield } from "react-icons/gi";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoSkull } from "react-icons/io5";

export const getDataEffect = (effectName: IEffect["name"]) => {
  let color = "slategrey";
  let Icon = null;
  let label = "";
  switch (effectName) {
    // case "breach":
    //   Icon = <GiCrackedShield />;
    //   label = "Разлом"; // снижение защиты
    //   color = "slategrey";
    //   break;
    case "burn":
      Icon = <FaBurn />;
      label = "Поджог"; // DoT урон
      color = "red";
      break;
    case "poison":
      Icon = <GiPoisonBottle />;
      label = "Яд"; // DoT урон
      color = "green";
      break;
    case "freeze":
      Icon = <FaRegSnowflake />;
      label = "Заморозка"; // контроль
      color = "cyan";
      break;
    case "stun":
      Icon = <PiSpiralLight />;
      label = "Оглушение"; // контроль
      color = "gold";
      break;
    case "wet":
      Icon = <IoIosWater />;
      label = "Влажность"; // повышает шанс заморозки
      color = "blue";
      break;
    case "fear":
      Icon = <IoSkull />;
      label = "Страх"; // DoT урон
      color = "blue";
      break;
    case "blind":
      Icon = <BsEyeSlashFill />;
      label = "Слепота"; // 50% промахи
      color = "orange";
      break;
    default:
      Icon = <FaBurn />;
  }

  return { Icon, color, label };
};
