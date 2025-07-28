import { FREEZE, POISON } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useActionTo, useDmgToElement, useEffectTo } from "./helpers";
import { DARK, FIRE, FOREST, LIGHT, PHYSICAL, WATER, WIND } from "../elements/elements_all";
import { DEBUFF_FOREST_1 } from "../buffs&debuffs/debuffs_all";
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
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [PHYSICAL, FOREST],
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
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WATER, WIND],
      tags: [FREEZE],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Листья Сакуры",
      description: <>Исцеляет герою 20% здоровья</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FOREST],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ядовитый облако",
      description: (
        <>
          Наносит {useDmgToElement(200, FOREST)} урона всем и {useEffectTo(POISON, 2)}, также{" "}
          {useActionTo(DEBUFF_FOREST_1, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [FOREST],
      tags: [DEBUFF_FOREST_1],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Густой туман",
      description: (
        <>
          Наносит {useDmgToElement(125, WIND)} и {useDmgToElement(125, DARK)} урона всем врагам. Также
          {useActionTo(BUFF_DARK_2, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WIND, DARK],
      tags: [BUFF_DARK_2],
    },
    "epic"
  ).getSkill(),
];
