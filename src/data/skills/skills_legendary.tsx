import { SkillEngine } from "./class";
import { DARK, FIRE, FOREST, LIGHT, WATER, WIND } from "../elements/elements_all";
import { useDmgToElement, useEffectTo } from "./helpers";
import { DARKNESS, WET } from "../effects/effects_all";

export const SKILLS_LEGENDARY = [
  new SkillEngine(
    {
      name: "Черная дыра",
      description: (
        <>
          Наносит {useDmgToElement(475, DARK)} урона всем и {useEffectTo(DARKNESS, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [DARK],
      tags: [DARKNESS],
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Божественная кара",
      description: <>Наносит {useDmgToElement(1000, LIGHT)} урона одному врагу</>,
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [LIGHT],
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
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: [WIND, WATER],
      tags: [WET],
    },
    "legendary"
  ).getSkill(),
];
