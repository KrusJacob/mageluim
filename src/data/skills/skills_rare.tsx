import { BLIND, HEAL, STUN, WET } from "../effects/effects_all";
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
      img: "/img/skills/Лютый_вихрь.png",
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
          {useEffectTo(HEAL, 2)} на героя. {useEffectTo(WET, 2)} на всех врагов
        </>
      ),
      img: "/img/skills/Утренний_дождик.png",
      element: [WATER],
      tags: [HEAL, WET],
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
      img: "/img/skills/Удар_метеорита.png",
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
      img: "/img/skills/Луч_света.png",
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
          Наносит {useDmgToElement(650, WIND)} урона одному врагу и {useEffectTo(STUN, 1)}
        </>
      ),
      img: "/img/skills/Удар_молнии.png",
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
      img: "/img/skills/Каменная_кожа.png",
      element: [WIND],
      tags: [BUFF_PHYSICAL_1, BUFF_DEF_1],
    },
    "rare"
  ).getSkill(),
];
