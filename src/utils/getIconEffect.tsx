import type { IEffect } from "@/types/effect";
import { FaBurn, FaRegSnowflake } from "react-icons/fa";
import { GiPoisonBottle } from "react-icons/gi";
import { PiSpiralLight } from "react-icons/pi";
import { IoIosWater } from "react-icons/io";
import { getColorEffect } from "./getColorEffect";
import { GiCrackedShield } from "react-icons/gi";
import { BsEyeSlashFill } from "react-icons/bs";

export const getIconEffect = (effectName: IEffect["name"]) => {
  const color = getColorEffect(effectName);
  let Icon = null;
  switch (effectName) {
    case "breach":
      Icon = <GiCrackedShield />;
      break;
    case "burn":
      Icon = <FaBurn />;
      break;
    case "poison":
      Icon = <GiPoisonBottle />;
      break;
    case "freeze":
      Icon = <FaRegSnowflake />;
      break;
    case "stun":
      Icon = <PiSpiralLight />;
      break;
    case "wet":
      Icon = <IoIosWater />;
      break;
    case "blind":
      Icon = <BsEyeSlashFill />;
      break;
    default:
      Icon = <FaBurn />;
  }

  return { Icon, color };
};
