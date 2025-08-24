import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { BLIND, BURN, FREEZE, POISON, WET } from "../effects/effects_all";
import { DARK, FIRE, FOREST, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import {
  DEBUFF_ATTACK_1,
  DEBUFF_BURN_1,
  DEBUFF_PHYSICAL_1,
  DEBUFF_PHYSICAL_2,
  DEBUFF_WIND_1,
  DEBUFF_WIND_2,
} from "../buffs&debuffs/debuffs_all";
import {
  BUFF_ATTACK_1,
  BUFF_BURN_1,
  BUFF_BURN_2,
  BUFF_DARK_1,
  BUFF_DARK_2,
  BUFF_WATER_1,
} from "../buffs&debuffs/buffs_all";
import { actionTarget } from "../dmg/dmg_all";

export const SKILLS_COMMON = [
  new SkillEngine(
    {
      name: "Огненные угли",
      description: (
        <>
          Наносит {useDmgToElement(225, FIRE)} урона всем врагам и {useActionTo(BUFF_BURN_1, 2)}
        </>
      ),
      img: "/img/skills/Огненные_угли.png",
      element: [FIRE],
      tags: [BUFF_BURN_1],
      awakenings: [
        <>Урон увеличен на {useDmgToElement(75, FIRE)}</>,
        <>Урон увеличен на {useDmgToElement(100, FIRE)}</>,
        <>{useActionTo(BUFF_BURN_2, 2)}</>,
      ],
      data: {
        manaCost: [5, 5, 5, 5],
        cooldown: [4, 4, 4, 4],
        useDmgToAOE: {
          fire: [225, 300, 400, 400],
        },
        useActionToSelf: [
          [actionTarget(BUFF_BURN_1, 2)],
          [actionTarget(BUFF_BURN_1, 2)],
          [actionTarget(BUFF_BURN_1, 2)],
          [actionTarget(BUFF_BURN_2, 2)],
        ],
      },
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
      img: "/img/skills/Водная_волна.png",
      element: [WATER],
      tags: [WET, DEBUFF_ATTACK_1],

      awakenings: [
        <>Урон увеличен на {useDmgToElement(75, WATER)}</>,
        <>{useActionTo(DEBUFF_ATTACK_1, 2)}</>,
        <>Урон увеличен на {useDmgToElement(75, WATER)}</>,
      ],
      data: {
        manaCost: [4, 4, 4, 4],
        cooldown: [4, 4, 4, 4],
        useDmgToAOE: {
          wind: [200, 275, 275, 350],
        },
        useActionToAOE: [
          [actionTarget(WET, 2)],
          [actionTarget(WET, 2)],
          [actionTarget(WET, 2), actionTarget(DEBUFF_ATTACK_1, 2)],
          [actionTarget(WET, 2), actionTarget(DEBUFF_ATTACK_1, 2)],
        ],
      },
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Искры молнии",
      description: (
        <>
          Наносит {useDmgToElement(300, WIND)} урона всем врагам и {useActionTo(DEBUFF_WIND_1, 2)}
        </>
      ),
      img: "/img/skills/Искры_молнии.png",
      element: [WIND],
      tags: [DEBUFF_WIND_1],
      awakenings: [
        <>Урон увеличен на {useDmgToElement(100, WIND)}</>,
        <>Урон увеличен на {useDmgToElement(100, WIND)}</>,
        <>{useActionTo(DEBUFF_WIND_2, 2)}</>,
      ],
      data: {
        manaCost: [6, 6, 6, 6],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          wind: [300, 400, 500, 500],
        },
        useActionToAOE: [
          [actionTarget(DEBUFF_WIND_1, 2)],
          [actionTarget(DEBUFF_WIND_1, 2)],
          [actionTarget(DEBUFF_WIND_1, 2)],
          [actionTarget(DEBUFF_WIND_2, 2)],
        ],
      },
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Языки пламени",
      description: <>Наносит {useDmgToElement(275, FIRE)} урона всем врагам</>,
      img: "/img/skills/Языки_пламени.png",
      element: [FIRE],
      tags: [DEBUFF_BURN_1],
      awakenings: [
        <>{useActionTo(DEBUFF_BURN_1, 2)}</>,
        <>Урон увеличен на {useDmgToElement(100, FIRE)}</>,
        <>Урон увеличен на {useDmgToElement(100, FIRE)}</>,
      ],
      data: {
        manaCost: [5, 5, 5, 5],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          fire: [275, 275, 375, 475],
        },
        useActionToAOE: [
          [],
          [actionTarget(DEBUFF_BURN_1, 2)],
          [actionTarget(DEBUFF_BURN_1, 2)],
          [actionTarget(DEBUFF_BURN_1, 2)],
        ],
      },
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Брызги яда",
      description: (
        <>
          Наносит {useDmgToElement(100, FOREST)} урона всем врагам и {useEffectTo(POISON, 2, 1)}
        </>
      ),
      img: "/img/skills/Брызги_яда.png",
      element: [FOREST],
      tags: [POISON],

      awakenings: [
        <>Урон увеличен на {useDmgToElement(75, FOREST)}</>,
        <>{useEffectTo(POISON, 2, 1)}</>,
        <>Урон увеличен на {useDmgToElement(100, FOREST)}</>,
      ],
      data: {
        manaCost: [3, 3, 3, 3],
        cooldown: [4, 4, 4, 4],
        useDmgToAOE: {
          forest: [100, 175, 175, 275],
        },
        useActionToAOE: [
          [actionTarget(POISON, 2, 1)],
          [actionTarget(POISON, 2, 1)],
          [actionTarget(POISON, 2, 2)],
          [actionTarget(POISON, 2, 2)],
        ],
      },
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
      img: "/img/skills/Ледяное_прикосновение.png",
      element: [WATER],
      tags: [FREEZE, BUFF_WATER_1],
      awakenings: [
        <>{useActionTo(BUFF_WATER_1, 2)}</>,
        <>Урон увеличен на {useDmgToElement(125, WATER)}</>,
        <>Расход маны уменьшен на 1</>,
      ],
      data: {
        manaCost: [4, 4, 4, 3],
        cooldown: [4, 4, 4, 4],
        useDmgToTarget: {
          water: [250, 250, 375, 375],
        },
        useActionToTarget: [
          [actionTarget(FREEZE, 1)],
          [actionTarget(FREEZE, 1)],
          [actionTarget(FREEZE, 1)],
          [actionTarget(FREEZE, 1)],
        ],
        useActionToSelf: [
          [],
          [actionTarget(BUFF_WATER_1, 2)],
          [actionTarget(BUFF_WATER_1, 2)],
          [actionTarget(BUFF_WATER_1, 2)],
        ],
      },
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
      img: "/img/skills/Удар_булыжником.png",
      element: [PHYSICAL],
      tags: [DEBUFF_PHYSICAL_1],
      awakenings: [
        <>Урон увеличен на {useDmgToElement(150, PHYSICAL)}</>,
        <>{useActionTo(DEBUFF_PHYSICAL_2, 2)}</>,
        <>Расход маны уменьшен на 1</>,
      ],
      data: {
        manaCost: [5, 5, 5, 4],
        cooldown: [4, 4, 4, 4],
        useDmgToTarget: {
          physical: [550, 700, 700, 700],
        },
        useActionToTarget: [
          [actionTarget(DEBUFF_PHYSICAL_1, 2)],
          [actionTarget(DEBUFF_PHYSICAL_1, 2)],
          [actionTarget(DEBUFF_PHYSICAL_2, 2)],
          [actionTarget(DEBUFF_PHYSICAL_2, 2)],
        ],
      },
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Слепящий песок",
      description: (
        <>
          Наносит {useDmgToElement(225, PHYSICAL)} урона всем врагам и {useEffectTo(BLIND, 1)}
        </>
      ),
      img: "/img/skills/Слепящий_песок.png",
      element: [PHYSICAL],
      tags: [BLIND],
      awakenings: [
        <>Расход маны уменьшен на 1</>,
        <>Урон увеличен на {useDmgToElement(100, PHYSICAL)}</>,
        <>{useEffectTo(BLIND, 2)}</>,
      ],
      data: {
        manaCost: [4, 3, 3, 3],
        cooldown: [4, 4, 4, 4],
        useDmgToAOE: {
          physical: [225, 225, 325, 325],
        },
        useActionToAOE: [
          [actionTarget(BLIND, 1)],
          [actionTarget(BLIND, 1)],
          [actionTarget(BLIND, 1)],
          [actionTarget(BLIND, 2)],
        ],
      },
    },
    "common"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Темная метка",
      description: (
        <>
          Наносит {useDmgToElement(350, DARK)} урона одному врагу и {useActionTo(BUFF_DARK_1, 2)}
        </>
      ),
      img: "/img/skills/Темная_метка.png",
      element: [DARK],
      tags: [BUFF_DARK_1],
      awakenings: [
        <>Перезарядка уменьшена на 1 ход</>,
        <>Урон увеличен на {useDmgToElement(100, DARK)}</>,
        <>{useActionTo(BUFF_DARK_2, 2)}</>,
      ],
      data: {
        manaCost: [2, 2, 2, 2],
        cooldown: [3, 2, 2, 2],
        useDmgToTarget: {
          dark: [350, 450, 450, 450],
        },
        useActionToSelf: [
          [actionTarget(BUFF_DARK_1, 2)],
          [actionTarget(BUFF_DARK_1, 2)],
          [actionTarget(BUFF_DARK_1, 2)],
          [actionTarget(BUFF_DARK_2, 2)],
        ],
      },
    },
    "common"
  ).getSkill(),
];

// 9
