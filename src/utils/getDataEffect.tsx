import type { IEffect } from "@/types/effect";
import { FaBurn, FaRegSnowflake } from "react-icons/fa";
import { GiPoisonBottle } from "react-icons/gi";
import { PiSpiralLight } from "react-icons/pi";
import { IoIosWater } from "react-icons/io";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoSkull } from "react-icons/io5";
import { LuCross } from "react-icons/lu";

import {
  BLIND_CHANCE_MISS,
  BURN_DOT_DMG,
  BURN_MAX_LAYERS,
  DARKNESS_DOT_DMG,
  DARKNESS_MAX_LAYERS,
  HEAL_DOT_HEAL,
  HEAL_DOT_LAYERS,
  POSION_DOT_DMG,
  POSION_MAX_LAYERS,
  WET_CHANCE_FREEZE,
} from "@/constant";

export const getDataEffect = (effectName: IEffect["name"]) => {
  let color = "slategrey";
  let Icon = null;
  let label = "";
  let maxLayer = 1;
  let description = "";
  switch (effectName) {
    case "burn":
      Icon = <FaBurn />;
      label = "Поджог"; // DoT урон
      color = "var(--color-fire)";
      maxLayer = BURN_MAX_LAYERS;
      description = `В начале хода получает урон от [Огонь] в размере ${BURN_DOT_DMG}% от максимального здоровья. Максимум ${BURN_MAX_LAYERS} слоев.`;
      break;
    case "poison":
      Icon = <GiPoisonBottle />;
      label = "Яд"; // DoT урон
      color = "var(--color-forest)";
      maxLayer = POSION_DOT_DMG;
      description = `В начале хода получает урон от [Яд] в размере ${POSION_DOT_DMG} ед. Максимум ${POSION_MAX_LAYERS} слоев.`;
      break;
    case "freeze":
      Icon = <FaRegSnowflake />;
      label = "Заморозка"; // контроль
      color = "cyan";
      description = "Обездвиживание. Заставляет пропустить ход";
      break;
    case "stun":
      Icon = <PiSpiralLight />;
      label = "Оглушение"; // контроль
      color = "orange";
      description = "Обездвиживание. Заставляет пропустить ход";
      break;
    case "wet":
      Icon = <IoIosWater />;
      label = "Влажность"; // повышает шанс заморозки
      color = "var(--color-water)";
      description = `Эффект увеличивает шанс быть замороженным на ${WET_CHANCE_FREEZE}%`;
      break;
    case "darkness":
      Icon = <IoSkull />;
      label = "Мрак"; // DoT урон
      color = "var(--color-dark)";
      maxLayer = DARKNESS_MAX_LAYERS;
      description = `В начале хода получает урон от [Тьма] в размере ${DARKNESS_DOT_DMG} ед. Максимум ${DARKNESS_MAX_LAYERS} слоев.`;
      break;
    case "blind":
      Icon = <BsEyeSlashFill />;
      label = "Слепота"; // 50% промахи
      color = "var(--color-light)";
      description = `При атаке есть ${BLIND_CHANCE_MISS}% шанс промахнуться`;
      break;
    case "heal":
      Icon = <LuCross />;
      label = "Лечение"; // лечение
      color = "aquamarine";
      maxLayer = HEAL_DOT_LAYERS;
      description = `Каждый ход исцеляет на ${HEAL_DOT_HEAL}% от максимального здоровья. Максимум ${HEAL_DOT_LAYERS} слоев.`;
      break;
    default:
      Icon = <FaBurn />;
  }

  return { Icon, color, label, maxLayer, description };
};
