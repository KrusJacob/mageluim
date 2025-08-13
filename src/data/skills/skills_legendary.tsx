import { SkillEngine } from "./class";
import { DARK, FIRE, FOREST, LIGHT, WATER, WIND } from "../elements/elements_all";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { BURN, DARKNESS, HEAL, INSPIRATION, INVULNERABILITY, WET } from "../effects/effects_all";
import { actionTarget } from "../dmg/dmg_all";
import { BUFF_LIGHT_2 } from "../buffs&debuffs/buffs_all";
import { DEBUFF_WATER_2 } from "../buffs&debuffs/debuffs_all";

export const SKILLS_LEGENDARY = [
  new SkillEngine(
    {
      name: "Черная дыра",
      description: (
        <>
          Наносит {useDmgToElement(475, DARK)} урона всем и {useEffectTo(DARKNESS, 2)}
        </>
      ),
      img: "/img/skills/Черная_дыра.png",
      element: [DARK],
      tags: [DARKNESS],
      awakenings: [
        <>Урон увеличен на {useDmgToElement(150, DARK)}</>,
        <>{useEffectTo(DARKNESS, 2)}</>,
        <>Урон увеличен на {useDmgToElement(150, DARK)}</>,
      ],
      data: {
        manaCost: [7, 7, 7, 7],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          dark: [475, 625, 625, 775],
        },
        useActionToAOE: [
          [actionTarget(DARKNESS, 2)],
          [actionTarget(DARKNESS, 2)],
          [actionTarget(DARKNESS, 2, 2)],
          [actionTarget(DARKNESS, 4, 2)],
        ],
      },
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Божественная кара",
      description: <>Наносит {useDmgToElement(1200, LIGHT)} урона одному врагу</>,
      img: "/img/skills/Божественная_кара.png",
      element: [LIGHT],
      awakenings: [
        <>{useActionTo(BUFF_LIGHT_2, 2)}</>,
        <>Урон увеличен на {useDmgToElement(300, LIGHT)}</>,
        <>Урон увеличен на {useDmgToElement(300, LIGHT)}</>,
      ],
      data: {
        manaCost: [8, 8, 8, 8],
        cooldown: [5, 5, 5, 5],
        useDmgToTarget: {
          light: [1200, 1200, 1500, 1800],
        },
        useActionToSelf: [
          [],
          [actionTarget(BUFF_LIGHT_2, 2)],
          [actionTarget(BUFF_LIGHT_2, 2)],
          [actionTarget(BUFF_LIGHT_2, 2)],
        ],
      },
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Цунами",
      description: (
        <>
          Наносит {useDmgToElement(250, WIND)} и {useDmgToElement(250, WATER)} урона всем и {useEffectTo(WET, 2)}
        </>
      ),
      img: "/img/skills/Цунами.png",
      element: [WIND, WATER],
      tags: [WET],
      awakenings: [
        <>{useActionTo(DEBUFF_WATER_2, 2)}</>,
        <>Урон увеличен на {useDmgToElement(150, WATER)}</>,
        <>Урон увеличен на {useDmgToElement(150, WATER)}</>,
      ],
      data: {
        manaCost: [6, 6, 6, 6],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          wind: [250, 250, 250, 250],
          water: [250, 250, 400, 550],
        },
        useActionToAOE: [
          [actionTarget(WET, 2)],
          [actionTarget(WET, 2), actionTarget(DEBUFF_WATER_2, 2)],
          [actionTarget(WET, 2), actionTarget(DEBUFF_WATER_2, 2)],
          [actionTarget(WET, 2), actionTarget(DEBUFF_WATER_2, 2)],
        ],
      },
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Армагедон",
      description: (
        <>
          Наносит {useDmgToElement(600, FIRE)} урона всем врагам и {useEffectTo(BURN, 2, 2)}
        </>
      ),
      img: "/img/skills/Армагедон.png",
      element: [FIRE],
      tags: [BURN],
      awakenings: [
        <>Урон увеличен на {useDmgToElement(175, FIRE)}</>,
        <>{useEffectTo(BURN, 2, 2)}</>,
        <>Урон увеличен на {useDmgToElement(175, FIRE)}</>,
      ],
      data: {
        manaCost: [9, 9, 9, 9],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          fire: [600, 775, 775, 950],
        },
        useActionToAOE: [
          [actionTarget(BURN, 2, 2)],
          [actionTarget(BURN, 2, 2)],
          [actionTarget(BURN, 2, 4)],
          [actionTarget(BURN, 2, 4)],
        ],
      },
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ледяной панцирь",
      description: (
        <>
          Наносит {useDmgToElement(300, WATER)} урона всем и {useEffectTo(INVULNERABILITY, 2, 2)} на героя.
        </>
      ),
      img: "/img/skills/Ледяной_панцирь.png",
      element: [WATER],
      tags: [HEAL],
      awakenings: [
        <>{useEffectTo(HEAL, 2, 2)}</>,
        <>{useEffectTo(INSPIRATION, 2)}</>,
        <>Расход маны уменьшен на 1</>,
      ],
      data: {
        manaCost: [6, 6, 6, 5],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          water: [300, 300, 300, 300],
        },
        useActionToSelf: [
          [actionTarget(INVULNERABILITY, 2, 2)],
          [actionTarget(INVULNERABILITY, 2, 2), actionTarget(HEAL, 2, 2)],
          [actionTarget(INVULNERABILITY, 2, 2), actionTarget(HEAL, 2, 2), actionTarget(INSPIRATION, 2)],
          [actionTarget(INVULNERABILITY, 2, 2), actionTarget(HEAL, 2, 2), actionTarget(INSPIRATION, 2)],
        ],
      },
    },
    "legendary"
  ).getSkill(),
];

// 5
