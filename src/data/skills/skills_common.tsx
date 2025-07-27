import { getIconElement } from "@/utils/getIconElement";
import { SkillEngine } from "./class";
import { useDmgToElement, useEffectTo } from "./helpers";
import { BURN, FREEZE, POISON, WET } from "../effects/effects_all";

export const SKILLS_COMMON = [
  new SkillEngine(
    {
      name: "Огненные угли",
      description: (
        <>
          Наносит {useDmgToElement(225, "fire")} урона всем врагам и {useEffectTo(BURN, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["fire"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Водная волна",
      description: (
        <>
          Наносит {useDmgToElement(200, "water")} урона всем врагам и {useEffectTo(WET, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["water"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Искры молнии",
      description: <>Наносит {useDmgToElement(300, "wind")} урона всем врагам</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["wind"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Языки пламени",
      description: <>Наносит {useDmgToElement(300, "fire")} урона всем врагам</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["fire"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Брызги яда",
      description: (
        <>
          Наносит {useDmgToElement(100, "forest")} урона всем врагам и {useEffectTo(POISON, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["forest"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ледяное прикосновение",
      description: (
        <>
          Наносит {useDmgToElement(250, "water")} урона одному врагу и {useEffectTo(FREEZE, 1)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["water"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Удар булыжником",
      description: <>Наносит {useDmgToElement(600, "physical")} урона одному врагу</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["forest"],
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Поджог",
      description: <>Наносит {useDmgToElement(150, "fire")} урона всем врагам</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["forest"],
    },
    "common"
  ).getSkill(),
];
