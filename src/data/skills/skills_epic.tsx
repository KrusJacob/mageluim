import { FREEZE, POISON } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useDmgToElement, useEffectTo } from "./helpers";

export const SKILLS_EPIC = [
  new SkillEngine(
    {
      name: "Гнев земли",
      description: "Killer",
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["forest"],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Замораживающее дыхание",
      description: (
        <>
          Наносит {useDmgToElement(200, "water")} урона одному врагу и {useEffectTo(FREEZE, 1)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["water"],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Листья Сакуры",
      description: "Killer",
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["forest"],
    },
    "epic"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Ядовитый облако",
      description: (
        <>
          Наносит {useDmgToElement(200, "forest")} урона всем и {useEffectTo(POISON, 3)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["forest"],
    },
    "epic"
  ).getSkill(),
];
