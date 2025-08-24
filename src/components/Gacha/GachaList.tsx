import { Box, HStack } from "@chakra-ui/react";
import type { ISkill } from "@/types/skill";
import type { IArtifact } from "@/types/artifact";

import GachaListItem from "./GachaListItem";

interface Props<T extends ISkill | IArtifact> {
  items: T[] | null;
  selected: T | null;
  select: (item: T) => void;
  Card: React.ComponentType<{ item: T; isSelected: boolean }>;
}

const GachaList = <T extends ISkill | IArtifact>({ items, selected, select, Card }: Props<T>) => {
  return (
    <Box>
      <HStack gap={12} alignItems={"self-start"} minH={"450px"}>
        {items?.map((item, i) => {
          const isSelected = selected?.id === item.id;
          return (
            <GachaListItem
              key={item.id}
              item={item}
              index={i + 1}
              select={select}
              isSelected={isSelected}
              Card={Card}
            />
          );
        })}
      </HStack>
    </Box>
  );
};

export default GachaList;
