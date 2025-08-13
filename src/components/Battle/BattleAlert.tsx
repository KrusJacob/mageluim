import { Box, Button, Center, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IconGold, IconShard } from "../ui/icons";
import type { IBattleFloor } from "@/types/battle";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { useShopStore } from "@/store/shopStore";
import { toaster } from "../ui/toaster";
import { ALL_FLOOR } from "@/constant/enemies";

interface Props {
  battleFloor: IBattleFloor;
  setSelectedFloor: (floor: IBattleFloor | null) => void;
}
const BattleAlert = ({ battleFloor, setSelectedFloor }: Props) => {
  const addShards = useHeroSkillStore((state) => state.addShards);
  const addGold = useHeroSkillStore((state) => state.addGold);
  const enemiesIsDead = battleFloor.enemies.every((enemy) => enemy.stats.currentHp <= 0);
  const currentHp = useHeroSkillStore((state) => state.hero.stats.currentHp);
  const updateShopSkills = useShopStore((state) => state.updateShopSkills);

  if (!enemiesIsDead && currentHp > 0) return null;

  return (
    <Center bg={"#000000a6"} zIndex={2000} position={"absolute"} inset={0}>
      {enemiesIsDead && (
        <Center flexDirection={"column"} gap={4} bg={"gray.500"} p={4} borderRadius={8}>
          <Text fontSize={32}>Вы победили</Text>
          <Box>
            <HStack>
              +{battleFloor.reward.gold} <IconGold />
            </HStack>
          </Box>
          {battleFloor.reward.shards && (
            <HStack>
              +{battleFloor.reward.shards} <IconShard />
            </HStack>
          )}
          <Button
            onClick={() => {
              battleFloor.isCleared = true;
              setSelectedFloor(null);
              addGold(battleFloor.reward.gold);
              addShards(battleFloor.reward.shards || 0);
              if (battleFloor.floor % 3 === 0) {
                updateShopSkills();
                toaster.create({ title: "Внимание", description: "Ассортимент магазина обновлен" });
              }
              if (ALL_FLOOR[battleFloor.floor]) {
                ALL_FLOOR[battleFloor.floor].isOpen = true;
              }
            }}
          >
            Закрыть
          </Button>
        </Center>
      )}
      {currentHp <= 0 && (
        <Center flexDirection={"column"} gap={4} bg={"gray.500"} p={4} borderRadius={8}>
          <Text fontSize={32}>Вы проиграли</Text>
          <Button onClick={() => setSelectedFloor(null)}>Закрыть</Button>
        </Center>
      )}
    </Center>
  );
};

export default BattleAlert;
