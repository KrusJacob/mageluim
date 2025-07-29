import { getDataElement } from "@/utils/getDataElement";
import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { BURN, FREEZE, POISON, WET } from "../effects/effects_all";
import { FIRE, FOREST, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import { DEBUFF_PHYSICAL_1, DEBUFF_WIND_1 } from "../buffs&debuffs/debuffs_all";
import { BUFF_BURN_1 } from "../buffs&debuffs/buffs_all";

export const SKILLS_COMMON = [
  new SkillEngine(
    {
      name: "Огненные угли",
      description: (
        <>
          Наносит {useDmgToElement(225, FIRE)} урона всем врагам и {useActionTo(BUFF_BURN_1, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FIRE],
      tags: [BUFF_BURN_1],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Водная волна",
      description: (
        <>
          Наносит {useDmgToElement(200, WATER)} урона всем врагам и {useEffectTo(WET, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WATER],
      tags: [WET],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Искры молнии",
      description: (
        <>
          Наносит {useDmgToElement(225, WIND)} урона всем врагам и {useActionTo(DEBUFF_WIND_1, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WIND],
      tags: [DEBUFF_WIND_1],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Языки пламени",
      description: <>Наносит {useDmgToElement(275, FIRE)} урона всем врагам</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FIRE],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Брызги яда",
      description: (
        <>
          Наносит {useDmgToElement(100, FOREST)} урона всем врагам и {useEffectTo(POISON, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FOREST],
      tags: [POISON],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ледяное прикосновение",
      description: (
        <>
          Наносит {useDmgToElement(250, WATER)} урона одному врагу и {useEffectTo(FREEZE, 1)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WATER],
      tags: [FREEZE],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Удар булыжником",
      description: (
        <>
          Наносит {useDmgToElement(550, PHYSICAL)} урона одному врагу и {useActionTo(DEBUFF_PHYSICAL_1, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [PHYSICAL],
      tags: [DEBUFF_PHYSICAL_1],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Поджигание",
      description: (
        <>
          Наносит {useDmgToElement(150, FIRE)} урона всем врагам и {useEffectTo(BURN, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FIRE],
      tags: [BURN],
    },
    "common"
  ).getSkill(),
];
