import usePluralizationEffect from "@/hooks/usePluralizationEffect";
import type { IAction, IEffect } from "@/types/effect";
import type { IElement, IElementName, Rarity } from "@/types/skill";
import { getDataElement } from "@/utils/getDataElement";

export const useDmgToElement = (value: number, element: IElement) => {
  const { Icon, color } = element;

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color, fontWeight: "bold" }}>
      {value} {Icon}{" "}
    </span>
  );
};

export const useEffectTo = (effect: IEffect, duration: number) => {
  const { Icon, color, label } = effect;
  const plural = usePluralizationEffect(duration);

  return (
    <span style={{ fontWeight: "bold" }}>
      Накладывает{" "}
      <span style={{ color, display: "inline-flex", alignItems: "center", gap: "2px" }}>
        {label} {Icon}
      </span>{" "}
      на {duration} {plural}
    </span>
  );
};

export const useActionTo = (action: IAction, duration: number) => {
  const { Icon, color, level, typeAction, label } = action;
  const target = typeAction === "buff" ? "Дает герою" : "Накладывает";
  const plural = usePluralizationEffect(duration);

  return (
    <span title={label} style={{ fontWeight: "bold" }}>
      {target} <span style={{ color, display: "inline-flex", alignItems: "center", gap: "2px" }}>{label}</span> на{" "}
      {duration} {plural}
    </span>
  );

  // return (
  //   <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color, fontWeight: "bold" }}>
  //     {target} {label} {Icon}
  //   </span>
  // );
};
