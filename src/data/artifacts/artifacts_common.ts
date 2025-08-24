import type { IArtifact } from "@/types/artifact";
import { Artifact } from "./class";
import { FIRE, FOREST, WIND } from "../elements/elements_all";
import { ATTACK } from "../stat/stats_all";

export const ARTIFACTS_COMMON = [
  new Artifact(
    {
      name: "Эгида Грозового Стража",
      img: "/img/artifacts/Эгида Грозового Стража.png",
      description: "Увеличивает защиту на 10.",
      awakenings: ["Увеличивает защиту на 8", "Увеличивает защиту на 8", "Увеличивает защиту на 8"],
      element: [ATTACK],
      data: {
        def: [10, 18, 26, 34],
      },
    },
    "common"
  ).getArtifact(),
  new Artifact(
    {
      name: "Сфера Шепчущих Звёзд",
      img: "/img/artifacts/Сфера Шепчущих Звёзд.png",
      description: "Увеличивает урон от ветра на 9% и максимальное здоровье на 80",
      element: [WIND],
      awakenings: [
        "Увеличивает урон от ветра на 7%",
        "Увеличивает максимальное здоровье на 60",
        "Увеличивает урон от ветра на 7%",
      ],
      data: {
        wind: [9, 16, 16, 23],
        maxHp: [80, 80, 140, 140],
      },
    },
    "common"
  ).getArtifact(),
  new Artifact(
    {
      name: "Кристалл Дикой Рощи",
      img: "/img/artifacts/Кристалл Дикой Рощи.png",
      description: "Увеличивает урон от природы на 9% и точность на 8.",
      element: [FOREST],
      awakenings: [
        "Увеличивает урон от природы на 7%",
        "Увеличивает точность на 8",
        "Увеличивает урон от природы на 7%",
      ],
      data: {
        forest: [9, 16, 16, 23],
        accuracy: [8, 8, 16, 16],
      },
    },
    "common"
  ).getArtifact(),
  new Artifact(
    {
      name: "Тотем Огненной Коры",
      img: "/img/artifacts/Тотем Огненной Коры.png",
      description: "Увеличивает урон от огня на 9% и максимальное запас маны на 1",
      element: [FIRE],
      awakenings: [
        "Увеличивает урон от огня на 7%",
        "Увеличивает максимальное запас маны на 1",
        "Увеличивает урон от огня на 7%",
      ],
      data: {
        fire: [9, 16, 16, 23],
        maxMana: [1, 1, 2, 2],
      },
    },
    "common"
  ).getArtifact(),
];
