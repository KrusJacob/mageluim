import type { IElementName } from "@/types/skill";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { PiSunDimLight } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";

export const getDataElement = (elementName: IElementName) => {
  let color = "slategrey";
  let label = "";
  let Icon = null;

  switch (elementName) {
    case "physical":
      Icon = <FaHandFist />;
      color = "slategrey";
      label = "Физический";
      break;
    case "fire":
      Icon = <FaFire />;
      color = "red";
      label = "Огонь";
      break;
    case "water":
      Icon = <IoIosWater />;
      color = "blue";
      label = "Вода";
      break;
    case "wind":
      Icon = <FaWind />;
      color = "turquoise";
      label = "Ветер";
      break;
    case "forest":
      Icon = <LuFlower />;
      color = "green";
      label = "Природа";
      break;
    case "dark":
      Icon = <MdDarkMode />;
      color = "slateblue";
      label = "Тьма";
      break;
    case "light":
      Icon = <PiSunDimLight />;
      color = "gold";
      label = "Свет";
      break;
    default:
      Icon = <FaRegCircle />;
  }

  return { Icon, color, label };
};
