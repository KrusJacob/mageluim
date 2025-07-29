import type { IElementName } from "@/types/skill";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { PiSunDimLight } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import type { ITypeAction } from "@/types/effect";

export const getDataAction = (elementName: IElementName, typeAction: ITypeAction) => {
  let color = "slategrey";
  let label = "";
  let labelElement = "";
  let Icon = null;
  switch (elementName) {
    case "physical":
      Icon = <FaHandFist />;
      color = "slategrey";
      label = typeAction === "buff" ? "Мощь" : "Бессилие";
      labelElement = "Физический";
      break;
    case "def":
      Icon = <FaShieldAlt />;
      color = "slategrey";
      label = typeAction === "buff" ? "Укрепление" : "Разлом";
      labelElement = "Физический";
      break;
    case "fire":
      Icon = <FaFire />;
      color = "red";
      label = typeAction === "buff" ? "Жар" : "Ожог";
      labelElement = "Огонь";
      break;
    case "water":
      Icon = <IoIosWater />;
      color = "blue";
      label = typeAction === "buff" ? "Напор" : "Намокание";
      labelElement = "Вода";
      break;
    case "wind":
      Icon = <FaWind />;
      color = "turquoise";
      label = typeAction === "buff" ? "Ветренность" : "Неустойчивость";
      labelElement = "Ветер";
      break;
    case "forest":
      Icon = <LuFlower />;
      color = "green";
      label = typeAction === "buff" ? "Источник" : "Болезнь";
      labelElement = "Природа";
      break;
    case "dark":
      Icon = <MdDarkMode />;
      color = "slateblue";
      label = typeAction === "buff" ? "Затмение" : "Страх";
      labelElement = "Тьма";
      break;
    case "light":
      Icon = <PiSunDimLight />;
      color = "gold";
      label = typeAction === "buff" ? "Сияние" : "Излучение";
      labelElement = "Свет";
      break;
    default:
      Icon = <FaRegCircle />;
  }

  return { Icon, color, label, labelElement };
};
