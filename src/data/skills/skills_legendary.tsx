import { SkillEngine } from "./class";

export const SKILLS_LEGENDARY = [
  new SkillEngine(
    {
      name: "Черная дыра",
      description: "Killer",
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["dark"],
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Божественная кара",
      description: "Killer",
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["light"],
    },
    "legendary"
  ).getSkill(),
  new SkillEngine(
    {
      name: "Цунами",
      description: "Killer",
      url: "https://storage01.sb.by/iblock/f3a/f3a892c7581a0c48efaf62f0abb9a8b6/f04ef9e7572b12d75af4b5090727f691.jpg",
      img: "",
      element: ["wind", "water"],
    },
    "legendary"
  ).getSkill(),
];
