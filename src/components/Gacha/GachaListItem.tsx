import { Box } from "@chakra-ui/react";
import React from "react";
import type { Rarity } from "@/types/skill";
import { getColorRarity } from "@/utils/getColorRarity";

interface Props<T> {
  item: T;
  index: number;
  select: (item: T) => void;
  isSelected: boolean;
  Card: React.ComponentType<{ item: T; isSelected: boolean }>;
}

const GachaListItem = <T extends { rarity: Rarity }>({ item, index, select, isSelected, Card }: Props<T>) => {
  return (
    <Box
      onClick={() => select(item)}
      data-state="open"
      _open={{
        animationName: "skill-fade-in",
        animationDuration: `{${index * 750}}ms`,
      }}
      w={"280px"}
      boxShadow={isSelected ? "0px 1px 10px 8px #bcd6ff" : "none"}
      transition={"all 200ms ease-in-out"}
      border={`2px solid ${getColorRarity(item.rarity)}`}
      borderRadius={8}
      _hover={{ scale: 1.025 }}
    >
      <Box animation={item.rarity === "legendary" ? "glow 2s ease-in-out infinite" : "none"}>
        <Card item={item} isSelected={isSelected} />
      </Box>
    </Box>
  );
};

export default GachaListItem;
