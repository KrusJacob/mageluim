import type { IArtifact } from "@/types/artifact";
import { Artifact } from "./class";
import { ATTACK } from "../stat/stats_all";
import { PHYSICAL } from "../elements/elements_all";

export const ARTIFACTS_RARE = [
  new Artifact(
    {
      name: "Кристалл Мощи",
      img: "/img/artifacts/Кристалл Мощи.png",
      description: "Увеличивает наносимый физический урон на 10% и атаку на 15",
      element: [PHYSICAL],
      awakenings: [
        "Увеличивает наносимый физический урон на 10%",
        "Увеличивает атаку на 15",
        "Увеличивает наносимый физический урон на 10%",
      ],
      data: {
        physical: [10, 20, 20, 30],
        atk: [15, 15, 30, 30],
      },
    },
    "rare"
  ).getArtifact(),
  new Artifact(
    {
      name: "Корона Хранителя",
      img: "/img/artifacts/Корона Хранителя.png",
      description: "Увеличивает максимальное здоровье на 140.",
      element: [ATTACK],
      awakenings: [
        "Увеличивает максимальное здоровье на 120.",
        "Увеличивает максимальное здоровье на 120.",
        "Увеличивает максимальное здоровье на 120.",
      ],
      data: {
        maxHp: [140, 260, 380, 500],
      },
    },
    "rare"
  ).getArtifact(),
  new Artifact(
    {
      name: "Браслет Песни Войны",
      img: "/img/artifacts/Браслет Песни Войны.png",
      description: "Увеличивает атаку на 24.",
      element: [ATTACK],
      awakenings: ["Увеличивает атаку на 16", "Увеличивает атаку на 16", "Увеличивает атаку на 16"],
      data: {
        atk: [24, 40, 56, 72],
      },
    },
    "rare"
  ).getArtifact(),
  new Artifact(
    {
      name: "Магический амулет маны",
      img: "/img/artifacts/Магический амулет маны.png",
      description: "Увеличивает максимальное запас маны на 2",
      element: [ATTACK],
      awakenings: [
        "Увеличивает максимальное запас маны на 2",
        "Увеличивает максимальное запас маны на 2",
        "Увеличивает максимальное запас маны на 2",
      ],
      data: {
        maxMana: [2, 4, 6, 8],
      },
    },
    "rare"
  ).getArtifact(),
];
