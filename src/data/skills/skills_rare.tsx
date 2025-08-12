import { BLIND, BURN, HEAL, INSPIRATION, STUN, WET } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { FIRE, FOREST, LIGHT, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import {
  BUFF_DEF_1,
  BUFF_DEF_2,
  BUFF_PHYSICAL_1,
  BUFF_PHYSICAL_2,
  BUFF_WIND_1,
  BUFF_WIND_2,
} from "../buffs&debuffs/buffs_all";
import { actionTarget } from "../dmg/dmg_all";
import { DEBUFF_DEF_2, DEBUFF_LIGHT_1 } from "../buffs&debuffs/debuffs_all";

export const SKILLS_RARE = [
  new SkillEngine(
    {
      name: "Лютый вихрь",
      description: (
        <>
          Наносит {useDmgToElement(400, WIND)} урона всем врагам и {useActionTo(BUFF_WIND_1, 2)}
        </>
      ),
      img: "/img/skills/Лютый_вихрь.png",
      element: [WIND],
      tags: [BUFF_WIND_1],
      awakenings: [
        <>{useActionTo(BUFF_WIND_2, 2)}</>,
        <>Расход маны уменьшен на 1</>,
        <>Урон увеличен на {useDmgToElement(125, WIND)}</>,
      ],
      data: {
        manaCost: [7, 7, 6, 6],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          wind: [400, 400, 400, 525],
        },
        useActionToSelf: [
          [actionTarget(BUFF_WIND_1, 2)],
          [actionTarget(BUFF_WIND_2, 2)],
          [actionTarget(BUFF_WIND_2, 2)],
          [actionTarget(BUFF_WIND_2, 2)],
        ],
      },
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Утренний дождик",
      description: (
        <>
          {useEffectTo(HEAL, 3)} на героя. {useEffectTo(WET, 2)} на всех врагов
        </>
      ),
      img: "/img/skills/Утренний_дождик.png",
      element: [WATER],
      tags: [HEAL, WET],
      awakenings: [
        <>{useEffectTo(HEAL, 3)}</>,
        <>Расход маны уменьшен на 1</>,
        <>{useEffectTo(INSPIRATION, 3)}</>,
      ],
      data: {
        manaCost: [4, 4, 3, 3],
        cooldown: [4, 4, 4, 4],
        useActionToSelf: [
          [actionTarget(HEAL, 3)],
          [actionTarget(HEAL, 3, 2)],
          [actionTarget(HEAL, 3, 2)],
          [actionTarget(HEAL, 3, 2), actionTarget(INSPIRATION, 3)],
        ],
        useActionToAOE: [
          [actionTarget(WET, 2)],
          [actionTarget(WET, 2)],
          [actionTarget(WET, 2)],
          [actionTarget(WET, 2)],
        ],
      },
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
      awakenings: [
        <>Урон увеличен на {useDmgToElement(150, FIRE)}</>,
        <>Урон увеличен на {useDmgToElement(150, PHYSICAL)}</>,
        <>{useActionTo(DEBUFF_DEF_2, 2)}</>,
      ],
      data: {
        manaCost: [6, 6, 6, 6],
        cooldown: [4, 4, 4, 4],
        useDmgToTarget: {
          fire: [400, 550, 550, 550],
          physical: [400, 400, 550, 550],
        },
        useActionToTarget: [[], [], [], [actionTarget(DEBUFF_DEF_2, 2)]],
      },
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
      awakenings: [
        <>{useActionTo(DEBUFF_LIGHT_1, 2)}</>,
        <>Урон увеличен на {useDmgToElement(150, LIGHT)}</>,
        <>Исцеляет герою 10% здоровья</>,
      ],
      data: {
        manaCost: [5, 5, 5, 5],
        cooldown: [4, 4, 4, 4],
        useDmgToTarget: {
          wind: [600, 750, 750, 750],
        },
        useHealSelf: [0, 0, 0, 10],
        useActionToTarget: [
          [actionTarget(BLIND, 1)],
          [actionTarget(BLIND, 1), actionTarget(DEBUFF_LIGHT_1, 2)],
          [actionTarget(BLIND, 1), actionTarget(DEBUFF_LIGHT_1, 2)],
          [actionTarget(BLIND, 1), actionTarget(DEBUFF_LIGHT_1, 2)],
        ],
      },
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Удар молнии",
      description: <>Наносит {useDmgToElement(575, WIND)} урона одному врагу</>,
      img: "/img/skills/Удар_молнии.png",
      element: [WIND],
      tags: [STUN],
      awakenings: [
        <>{useEffectTo(STUN, 1)}</>,
        <>Урон увеличен на {useDmgToElement(125, WIND)}</>,
        <>Урон увеличен на {useDmgToElement(150, WIND)}</>,
      ],
      data: {
        manaCost: [5, 5, 5, 5],
        cooldown: [5, 5, 5, 5],
        useDmgToTarget: {
          wind: [575, 575, 700, 850],
        },
        useActionToTarget: [[], [actionTarget(STUN, 1)], [actionTarget(STUN, 1)], [actionTarget(STUN, 1)]],
      },
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
      element: [PHYSICAL],
      tags: [BUFF_PHYSICAL_1, BUFF_DEF_1],
      awakenings: [
        <>{useActionTo(BUFF_DEF_2, 2)}</>,
        <>Исцеляет герою 10% здоровья</>,
        <>{useActionTo(BUFF_PHYSICAL_2, 2)}</>,
      ],
      data: {
        manaCost: [3, 3, 3, 3],
        cooldown: [4, 4, 4, 4],
        useActionToSelf: [
          [actionTarget(BUFF_PHYSICAL_1, 2), actionTarget(BUFF_DEF_1, 2)],
          [actionTarget(BUFF_PHYSICAL_1, 2), actionTarget(BUFF_DEF_2, 2)],
          [actionTarget(BUFF_PHYSICAL_1, 2), actionTarget(BUFF_DEF_2, 2)],
          [actionTarget(BUFF_PHYSICAL_2, 2), actionTarget(BUFF_DEF_2, 2)],
        ],
      },
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Поджигание",
      description: (
        <>
          Наносит {useDmgToElement(150, FIRE)} урона всем врагам и {useEffectTo(BURN, 2)}
        </>
      ),
      img: "/img/skills/Поджигание.png",
      element: [FIRE],
      tags: [BURN],
      awakenings: [
        <>Урон увеличен на {useDmgToElement(100, FIRE)}</>,
        <>{useEffectTo(BURN, 2)}</>,
        <>Перезарядка уменьшена на 1 ход</>,
      ],
      data: {
        manaCost: [3, 3, 3, 3],
        cooldown: [4, 4, 4, 3],
        useDmgToAOE: {
          fire: [150, 250, 250, 250],
        },
        useActionToAOE: [
          [actionTarget(BURN, 2)],
          [actionTarget(BURN, 2)],
          [actionTarget(BURN, 2, 2)],
          [actionTarget(BURN, 2, 2)],
        ],
      },
    },
    "rare"
  ).getSkill(),
];
