import { Artifact } from "./class";
import { ATTACK } from "../stat/stats_all";
import { DARK } from "../elements/elements_all";

export const ARTIFACTS_LEGENDARY = [
  new Artifact(
    {
      name: "Осколок Прилива",
      img: "/img/artifacts/Осколок Прилива.png",
      description: "Увеличивает регенерацию маны на 1",
      element: [ATTACK],
      awakenings: [
        "Увеличивает регенерацию маны на 1",
        "Увеличивает регенерацию маны на 1",
        "Увеличивает регенерацию маны на 1",
      ],
      data: {
        manaRegen: [1, 2, 3, 4],
      },
    },
    "legendary"
  ).getArtifact(),
  new Artifact(
    {
      name: "Перстень Войны",
      img: "/img/artifacts/Перстень Войны.png",
      description: "Увеличивает атаку на 20 и защиту на 11.",
      element: [ATTACK],
      awakenings: [
        "Увеличивает атаку на 17 и защиту на 9",
        "Увеличивает атаку на 17 и защиту на 9",
        "Увеличивает атаку на 17 и защиту на 9",
      ],
      data: {
        atk: [20, 37, 54, 71],
        def: [11, 20, 29, 38],
      },
    },
    "legendary"
  ).getArtifact(),
  new Artifact(
    {
      name: "Фонарь Потерянных Душ",
      img: "/img/artifacts/Фонарь Потерянных Душ.png",
      description: "Увеличивает урон от тьмы на 15% и максимальное здоровье на 140",
      element: [DARK],
      awakenings: [
        "Увеличивает урон от тьмы на 12%",
        "максимальное здоровье на 140",
        "Увеличивает урон от тьмы на 12%",
      ],
      data: {
        dark: [15, 27, 27, 39],
        maxHp: [140, 140, 280, 280],
      },
    },
    "legendary"
  ).getArtifact(),
];
