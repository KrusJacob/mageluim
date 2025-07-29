import type { IElementName } from "@/types/skill";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";

export const getDataElement = (elementName: IElementName) => {
  let color = "slategrey";
  let label = "";
  let Icon = null;

  switch (elementName) {
    case "physical":
      Icon = <FaHandFist />;
      color = "var(--color-physical)";
      label = "Физический";
      break;
    case "fire":
      Icon = <FaFire />;
      color = "var(--color-fire)";
      label = "Огонь";
      break;
    case "water":
      Icon = <IoIosWater />;
      color = "var(--color-water)";
      label = "Вода";
      break;
    case "wind":
      Icon = <FaWind />;
      color = "var(--color-wind)";
      label = "Ветер";
      break;
    case "forest":
      Icon = <LuFlower />;
      color = "var(--color-forest)";
      label = "Природа";
      break;
    case "dark":
      Icon = <MdDarkMode />;
      color = "var(--color-dark)";
      label = "Тьма";
      break;
    case "light":
      Icon = <FaSun />;
      color = "var(--color-light)";
      label = "Свет";
      break;
    default:
      Icon = <FaRegCircle />;
  }

  return { Icon, color, label };
};
