import { FREEZE, HEAL, POISON } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { DARK, FIRE, FOREST, LIGHT, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import {
  DEBUFF_ATTACK_2,
  DEBUFF_DARK_1,
  DEBUFF_DARK_2,
  DEBUFF_DEF_2,
  DEBUFF_FOREST_1,
  DEBUFF_FOREST_2,
  DEBUFF_PHYSICAL_1,
  DEBUFF_PHYSICAL_2,
} from "../buffs&debuffs/debuffs_all";
import {
  BUFF_ATTACK_2,
  BUFF_DARK_1,
  BUFF_DARK_2,
  BUFF_FOREST_2,
  BUFF_PHYSICAL_1,
  BUFF_PHYSICAL_2,
} from "../buffs&debuffs/buffs_all";
import { actionTarget } from "../dmg/dmg_all";

export const SKILLS_EPIC = [
  new SkillEngine(
    {
      name: "Гнев земли",
      description: (
        <>
          Наносит {useDmgToElement(250, PHYSICAL)} и {useDmgToElement(250, FOREST)} урона всем врагам
        </>
      ),
      img: "/img/skills/Гнев_земли.png",
      element: [PHYSICAL, FOREST],
      awakenings: [
        <>{useActionTo(BUFF_ATTACK_2, 2)}</>,
        <>Урон увеличен на {useDmgToElement(125, PHYSICAL)}</>,
        <>Урон увеличен на {useDmgToElement(125, FOREST)}</>,
      ],
      data: {
        manaCost: [7, 7, 7, 7],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          physical: [250, 250, 375, 375],
          forest: [250, 250, 250, 375],
        },
        useActionToSelf: [
          [],
          [actionTarget(BUFF_ATTACK_2, 2)],
          [actionTarget(BUFF_ATTACK_2, 2)],
          [actionTarget(BUFF_ATTACK_2, 2)],
        ],
      },
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Сокрушительный удар",
      description: (
        <>
          Наносит {useDmgToElement(800, PHYSICAL)} урона одному врагу и {useActionTo(BUFF_PHYSICAL_1, 2)}
        </>
      ),
      img: "/img/skills/Сокрушительный_удар.png",
      element: [PHYSICAL, FOREST],
      tags: [BUFF_PHYSICAL_1],
      awakenings: [
        <>{useActionTo(BUFF_PHYSICAL_2, 2)}</>,
        <>Урон увеличен на {useDmgToElement(200, PHYSICAL)}</>,
        <>Урон увеличен на {useDmgToElement(200, PHYSICAL)}</>,
      ],
      data: {
        manaCost: [7, 7, 7, 7],
        cooldown: [4, 4, 4, 4],
        useDmgToTarget: {
          physical: [800, 800, 1000, 1200],
        },
        useActionToSelf: [
          [actionTarget(BUFF_PHYSICAL_1, 2)],
          [actionTarget(BUFF_PHYSICAL_2, 2)],
          [actionTarget(BUFF_PHYSICAL_2, 2)],
          [actionTarget(BUFF_PHYSICAL_2, 2)],
        ],
      },
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Замораживающее дыхание",
      description: (
        <>
          Наносит {useDmgToElement(125, WATER)} и {useDmgToElement(125, WIND)} всем врагам и{" "}
          {useEffectTo(FREEZE, 1)}
        </>
      ),
      img: "/img/skills/Замораживающее_дыхание.png",
      element: [WATER, WIND],
      tags: [FREEZE],
      awakenings: [
        <>Расход маны уменьшен на 1</>,
        <>Урон увеличен на {useDmgToElement(125, WATER)}</>,
        <>Урон увеличен на {useDmgToElement(125, WIND)}</>,
      ],
      data: {
        manaCost: [7, 6, 6, 6],
        cooldown: [5, 5, 5, 5],
        useDmgToAOE: {
          water: [125, 125, 250, 250],
          wind: [125, 125, 125, 250],
        },
        useActionToAOE: [
          [actionTarget(FREEZE, 1)],
          [actionTarget(FREEZE, 1)],
          [actionTarget(FREEZE, 1)],
          [actionTarget(FREEZE, 1)],
        ],
      },
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Цветок жизни",
      description: <>Исцеляет герою 20% здоровья</>,
      img: "/img/skills/Цветок_жизни.png",
      element: [FOREST],
      awakenings: [
        <>Исцеляет герою 10% здоровья</>,
        <>{useActionTo(BUFF_FOREST_2, 2)}</>,
        <>{useEffectTo(HEAL, 2, 2)}</>,
      ],
      data: {
        manaCost: [4, 4, 4, 4],
        cooldown: [4, 4, 4, 4],
        useHealSelf: [20, 30, 30, 30],
        useActionToSelf: [
          [],
          [],
          [actionTarget(BUFF_FOREST_2, 2)],
          [actionTarget(BUFF_FOREST_2, 2), actionTarget(HEAL, 2, 2)],
        ],
      },
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ядовитое облако",
      description: (
        <>
          Наносит {useDmgToElement(150, FOREST)} урона всем врагам и {useEffectTo(POISON, 3, 2)}, также{" "}
          {useActionTo(DEBUFF_FOREST_1, 2)}
        </>
      ),
      img: "/img/skills/Ядовитое_облако.png",
      element: [FOREST],
      tags: [POISON, DEBUFF_FOREST_1],
      awakenings: [
        <>{useActionTo(DEBUFF_FOREST_2, 2)}</>,
        <>{useEffectTo(POISON, 3, 1)}</>,
        <>Расход маны уменьшен на 1</>,
      ],
      data: {
        manaCost: [6, 6, 6, 5],
        cooldown: [4, 4, 4, 4],
        useDmgToAOE: {
          forest: [150, 150, 150, 150],
        },
        useActionToAOE: [
          [actionTarget(POISON, 3, 2), actionTarget(DEBUFF_FOREST_1, 2)],
          [actionTarget(POISON, 3, 2), actionTarget(DEBUFF_FOREST_2, 2)],
          [actionTarget(POISON, 3, 3), actionTarget(DEBUFF_FOREST_2, 2)],
          [actionTarget(POISON, 3, 3), actionTarget(DEBUFF_FOREST_2, 2)],
        ],
      },
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Туман ужаса",
      description: (
        <>
          Наносит {useDmgToElement(175, WIND)} и {useDmgToElement(175, DARK)} урона всем врагам.{" "}
          {useActionTo(DEBUFF_DARK_1, 2)}
        </>
      ),
      img: "/img/skills/Туман_ужаса.png",
      element: [WIND, DARK],
      tags: [DEBUFF_DARK_2],
      awakenings: [
        <>{useActionTo(DEBUFF_DARK_2, 2)}</>,
        <>{useActionTo(DEBUFF_ATTACK_2, 2)}</>,
        <>{useActionTo(DEBUFF_DEF_2, 2)}</>,
      ],
      data: {
        manaCost: [5, 5, 5, 5],
        cooldown: [4, 4, 4, 4],
        useDmgToAOE: {
          wind: [175, 175, 175, 175],
          dark: [175, 175, 175, 175],
        },
        useActionToAOE: [
          [actionTarget(DEBUFF_DARK_1, 2)],
          [actionTarget(DEBUFF_DARK_2, 2)],
          [actionTarget(DEBUFF_DARK_2, 2), actionTarget(DEBUFF_ATTACK_2, 2)],
          [actionTarget(DEBUFF_DARK_2, 2), actionTarget(DEBUFF_ATTACK_2, 2), actionTarget(DEBUFF_DEF_2, 2)],
        ],
      },
    },
    "epic"
  ).getSkill(),
];
