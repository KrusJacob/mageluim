import type { IElement, IElementName } from "@/types/skill";
import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { PiSunDimLight } from "react-icons/pi";
import { FaRegCircle } from "react-icons/fa";
import { FaHandFist } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import type { IAction, ITypeAction } from "@/types/effect";
import { ACTION_VALUE_1, ACTION_VALUE_2 } from "@/constant";

export const getDataAction = (action: IAction) => {
  const { typeAction, elementName, level } = action;
  let color = "slategrey";
  let label = "";
  let labelElement = "";
  let Icon = null;
  let description = "";
  function getDescription(labelElement: IAction["labelElement"], reverse = false) {
    let type = typeAction === "buff" ? "Наносимый" : "Получаемый";
    let prefix = "Увеличивает";
    if (reverse) {
      type = typeAction === "buff" ? "Получаемый" : "Наносимый";
      prefix = "Уменьшает";
    }
    let value = level === 1 ? ACTION_VALUE_1 : ACTION_VALUE_2;
    return `${prefix} ${type} урон от [${labelElement}] на ${value}%`;
  }
  switch (elementName) {
    case "physical":
      Icon = <FaHandFist />;
      color = "var(--color-physical)";
      label = typeAction === "buff" ? "Мощь" : "Бессилие";
      labelElement = "Физический";
      description = getDescription(labelElement);
      break;
    case "def":
      Icon = <FaShieldAlt />;
      color = "var(--color-physical)";
      label = typeAction === "buff" ? "Укрепление" : "Разлом";
      labelElement = "Физический";
      description = getDescription(labelElement, true);
      break;
    case "fire":
      Icon = <FaFire />;
      color = "var(--color-fire)";
      label = typeAction === "buff" ? "Жар" : "Ожог";
      labelElement = "Огонь";
      description = getDescription(labelElement);
      break;
    case "water":
      Icon = <IoIosWater />;
      color = "var(--color-water)";
      label = typeAction === "buff" ? "Напор" : "Намокание";
      labelElement = "Вода";
      description = getDescription(labelElement);
      break;
    case "wind":
      Icon = <FaWind />;
      color = "var(--color-wind)";
      label = typeAction === "buff" ? "Ветренность" : "Неустойчивость";
      labelElement = "Ветер";
      description = getDescription(labelElement);
      break;
    case "forest":
      Icon = <LuFlower />;
      color = "var(--color-forest)";
      label = typeAction === "buff" ? "Источник" : "Болезнь";
      labelElement = "Природа";
      description = getDescription(labelElement);
      break;
    case "dark":
      Icon = <MdDarkMode />;
      color = "var(--color-dark)";
      label = typeAction === "buff" ? "Затмение" : "Страх";
      labelElement = "Тьма";
      description = getDescription(labelElement);
      break;
    case "light":
      Icon = <FaSun />;
      color = "var(--color-light)";
      label = typeAction === "buff" ? "Сияние" : "Излучение";
      labelElement = "Свет";
      description = getDescription(labelElement);
      break;
    default:
      Icon = <FaRegCircle />;
  }

  return { Icon, color, label, labelElement, description };
};
