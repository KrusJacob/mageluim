import { FREEZE, POISON } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { DARK, FIRE, FOREST, LIGHT, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import { DEBUFF_DARK_2, DEBUFF_FOREST_1, DEBUFF_PHYSICAL_1 } from "../buffs&debuffs/debuffs_all";
import { BUFF_DARK_1, BUFF_DARK_2 } from "../buffs&debuffs/buffs_all";

export const SKILLS_EPIC = [
  new SkillEngine(
    {
      name: "Гнев земли",
      description: (
        <>
          Наносит {useDmgToElement(250, PHYSICAL)} и {useDmgToElement(200, FOREST)} урона всем врагам
        </>
      ),
      img: "/img/skills/Гнев_земли.png",
      element: [PHYSICAL, FOREST],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Сокрушительный удар",
      description: (
        <>
          Наносит {useDmgToElement(700, PHYSICAL)} урона одному врагу и {useActionTo(DEBUFF_PHYSICAL_1, 2)}
        </>
      ),
      img: "/img/skills/Сокрушительный_удар.png",
      element: [PHYSICAL, FOREST],
      tags: [DEBUFF_PHYSICAL_1],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Замораживающее дыхание",
      description: (
        <>
          Наносит {useDmgToElement(175, WATER)} и {useDmgToElement(175, WIND)} урона одному врагу и{" "}
          {useEffectTo(FREEZE, 1)}
        </>
      ),
      img: "/img/skills/Замораживающее_дыхание.png",
      element: [WATER, WIND],
      tags: [FREEZE],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Цветок жизни",
      description: <>Исцеляет герою 20% здоровья</>,
      img: "/img/skills/Цветок_жизни.png",
      element: [FOREST],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ядовитое облако",
      description: (
        <>
          Наносит {useDmgToElement(150, FOREST)} урона всем и {useEffectTo(POISON, 2, 2)}, также{" "}
          {useActionTo(DEBUFF_FOREST_1, 2)}
        </>
      ),
      img: "/img/skills/Ядовитое_облако.png",
      element: [FOREST],
      tags: [POISON, DEBUFF_FOREST_1],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Туман ужаса",
      description: (
        <>
          Наносит {useDmgToElement(125, WIND)} и {useDmgToElement(200, DARK)} урона всем врагам.{" "}
          {useActionTo(DEBUFF_DARK_2, 2)}
        </>
      ),
      img: "/img/skills/Туман_ужаса.png",
      element: [WIND, DARK],
      tags: [DEBUFF_DARK_2],
    },
    "epic"
  ).getSkill(),
];
