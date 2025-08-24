import type { IArtifact } from "@/types/artifact";
import { Artifact } from "./class";
import { ATTACK } from "../stat/stats_all";
import { LIGHT } from "../elements/elements_all";

export const ARTIFACTS_EPIC = [
  new Artifact(
    {
      name: "Лучистый Камень",
      img: "/img/artifacts/Лучистый Камень.png",
      description: "Увеличивает урон от света на 13% и сопротивление на 10",
      element: [LIGHT],
      awakenings: [
        "Увеличивает урон от света на 11%",
        "Увеличивает сопротивление на 10",
        "Увеличивает урон от света на 11%",
      ],
      data: {
        light: [13, 24, 24, 35],
        resistance: [10, 10, 20, 20],
      },
    },
    "epic"
  ).getArtifact(),
  new Artifact(
    {
      name: "Кольцо Тысячи Глаз",
      img: "/img/artifacts/Кольцо Тысячи Глаз.png",
      description: "Увеличивает все виды стойокости на 8.",
      element: [ATTACK],
      awakenings: [
        "Увеличивает все виды стойокости на 5.",
        "Увеличивает все виды стойокости на 5.",
        "Увеличивает все виды стойокости на 5.",
      ],
      data: {
        durability: [8, 13, 18, 23],
      },
    },
    "epic"
  ).getArtifact(),

  new Artifact(
    {
      name: "Проклятый череп",
      img: "/img/artifacts/Проклятый череп.png",
      description: "Увеличивает весь периодический урон на 12%.",
      element: [ATTACK],
      awakenings: [
        "Увеличивает весь периодический урон на 9%",
        "Увеличивает весь периодический урон на 9%",
        "Увеличивает весь периодический урон на 9%",
      ],
      data: {
        dotDamage: [12, 21, 30, 39],
      },
    },
    "epic"
  ).getArtifact(),
];
