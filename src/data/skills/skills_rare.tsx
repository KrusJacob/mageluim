import { BLIND, STUN, WET } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { FIRE, FOREST, LIGHT, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import { BUFF_DEF_1, BUFF_PHYSICAL_1, BUFF_WIND_1 } from "../buffs&debuffs/buffs_all";

export const SKILLS_RARE = [
  new SkillEngine(
    {
      name: "Лютый вихрь",
      description: (
        <>
          Наносит {useDmgToElement(350, WIND)} урона всем врагам и {useActionTo(BUFF_WIND_1, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WIND],
      tags: [BUFF_WIND_1],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Утренний дождик",
      description: (
        <>
          Наносит {useDmgToElement(300, WATER)} всем врагам и {useEffectTo(WET, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WATER],
      tags: [WET],
    },
    "rare"
  ).getSkill(),

  new SkillEngine(
    {
      name: "Удар метеорита",
      description: (
        <>
          Наносит {useDmgToElement(400, FIRE)} и {useDmgToElement(400, PHYSICAL)} урона одному врагу
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FIRE, PHYSICAL],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Луч света",
      description: (
        <>
          Наносит {useDmgToElement(600, LIGHT)} урона одному врагу и {useEffectTo(BLIND, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [LIGHT],
      tags: [BLIND],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Удар молнии",
      description: (
        <>
          Наносит {useDmgToElement(700, WIND)} урона одному врагу и {useEffectTo(STUN, 1)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WIND],
      tags: [STUN],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Каменная кожа",
      description: (
        <>
          {useActionTo(BUFF_PHYSICAL_1, 2)} и {useActionTo(BUFF_DEF_1, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WIND],
      tags: [BUFF_PHYSICAL_1, BUFF_DEF_1],
    },
    "rare"
  ).getSkill(),
];
