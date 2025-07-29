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
      color = "red";
      maxLayer = BURN_MAX_LAYERS;
      description = `В начале хода наносит урон от [Огонь] в размере ${BURN_DOT_DMG}% от максимального здоровья. Максимум ${BURN_MAX_LAYERS} слоев.`;
      break;
    case "poison":
      Icon = <GiPoisonBottle />;
      label = "Яд"; // DoT урон
      color = "green";
      maxLayer = POSION_DOT_DMG;
      description = `В начале хода наносит урон от [Яд] в размере ${POSION_DOT_DMG} ед. Максимум ${POSION_MAX_LAYERS} слоев.`;
      break;
    case "freeze":
      Icon = <FaRegSnowflake />;
      label = "Заморозка"; // контроль
      color = "cyan";
      description = "Обездвиживает и заставляет пропустить ход";
      break;
    case "stun":
      Icon = <PiSpiralLight />;
      label = "Оглушение"; // контроль
      color = "gold";
      description = "Обездвиживает и заставляет пропустить ход";
      break;
    case "wet":
      Icon = <IoIosWater />;
      label = "Влажность"; // повышает шанс заморозки
      color = "blue";
      description = `При наличии увеличивает шанс быть замороженным на ${WET_CHANCE_FREEZE}%`;
      break;
    case "darkness":
      Icon = <IoSkull />;
      label = "Мрак"; // DoT урон
      color = "blue";
      maxLayer = DARKNESS_MAX_LAYERS;
      description = `В начале хода наносит урон от [Тьма] в размере ${DARKNESS_DOT_DMG} ед. Максимум ${DARKNESS_MAX_LAYERS} слоев.`;
      break;
    case "blind":
      Icon = <BsEyeSlashFill />;
      label = "Слепота"; // 50% промахи
      color = "orange";
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
