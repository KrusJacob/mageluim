import usePluralizationEffect from "@/hooks/usePluralizationEffect";
import type { IEffect } from "@/types/effect";
import type { IElement, Rarity } from "@/types/skill";
import { getColorElement } from "@/utils/getColorElement";
import { getIconEffect } from "@/utils/getIconEffect";
import { getIconElement } from "@/utils/getIconElement";
import { Text } from "@chakra-ui/react";
import { MdBolt } from "react-icons/md";

export const useDmgToElement = (value: number, element: IElement) => {
  const { Icon, color } = getIconElement(element);
  //   const color = getColorElement(element);

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color, fontWeight: "bold" }}>
      {value} {Icon}{" "}
    </span>
  );
};

export const useEffectTo = (effect: IEffect, duration: number) => {
  const { Icon, color } = getIconEffect(effect.name);
  const plural = usePluralizationEffect(duration);

  return (
    <span style={{ fontWeight: "bold" }}>
      накладывает{" "}
      <span style={{ color, display: "inline-flex", alignItems: "center", gap: "2px" }}>
        {effect.label} {Icon}
      </span>{" "}
      на {duration} {plural}
    </span>
  );
};
