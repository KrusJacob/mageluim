import { BLIND, STUN, WET } from "../effects/effects_all";
import { SkillEngine } from "./class";
import { useDmgToElement, useEffectTo } from "./helpers";

export const SKILLS_RARE = [
  new SkillEngine(
    {
      name: "Лютый вихрь",
      description: "Killer",
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["wind"],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Утренний дождик",
      description: (
        <>
          Наносит {useDmgToElement(300, "water")} всем врагам и {useEffectTo(WET, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["water"],
    },
    "rare"
  ).getSkill(),

  new SkillEngine(
    {
      name: "Удар метеорита",
      description: (
        <>
          Наносит {useDmgToElement(400, "fire")} и {useDmgToElement(400, "physical")} урона одному врагу
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["fire"],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Луч света",
      description: (
        <>
          Наносит {useDmgToElement(600, "fire")} урона одному врагу и {useEffectTo(BLIND, 2)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["light"],
    },
    "rare"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Удар молнии",
      description: (
        <>
          Наносит {useDmgToElement(700, "wind")} урона одному врагу и {useEffectTo(STUN, 1)}
        </>
      ),
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["wind"],
    },
    "rare"
  ).getSkill(),
];
