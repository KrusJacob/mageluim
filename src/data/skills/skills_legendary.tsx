import { SkillEngine } from "./class";
import { DARK, FIRE, FOREST, LIGHT, WATER, WIND } from "../elements/elements_all";
import { useDmgToElement, useEffectTo } from "./helpers";
import { BURN, DARKNESS, WET } from "../effects/effects_all";

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
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Божественная кара",
      description: <>Наносит {useDmgToElement(1000, LIGHT)} урона одному врагу</>,
      img: "/img/skills/Божественная_кара.png",
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
      img: "/img/skills/Цунами.png",
      element: [WIND, WATER],
      tags: [WET],
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Армагедон",
      description: (
        <>
          Наносит {useDmgToElement(450, FIRE)} урона всем и {useEffectTo(BURN, 2, 2)}
        </>
      ),
      img: "/img/skills/Армагедон.png",
      element: [FIRE],
      tags: [BURN],
    },
    "legendary"
  ).getSkill(),
];
