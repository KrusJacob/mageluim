import type { IElement } from "@/types/skill";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { PiSunDimLight } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import { getColorElement } from "./getColorElement";

export const getIconElement = (element: IElement) => {
  const color = getColorElement(element);
  let Icon = null;
  switch (element) {
    case "physical":
      Icon = <FaHandFist color={color} />;
      break;
    case "fire":
      Icon = <FaFire color={color} />;
      break;
    case "water":
      Icon = <IoIosWater color={color} />;
      break;
    case "wind":
      Icon = <FaWind color={color} />;
      break;
    case "forest":
      Icon = <LuFlower color={color} />;
      break;
    case "dark":
      Icon = <MdDarkMode color={color} />;
      break;
    case "light":
      Icon = <PiSunDimLight color={color} />;
      break;
    default:
      Icon = <FaRegCircle color={color} />;
  }

  return { Icon, color };
};
