import type { IBattleFloor } from "@/types/battle";
import type { IEnemy, IEnemyEngine } from "@/types/enemy";
import { Box, Button, Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { SiCrystal } from "react-icons/si";
import { IconGold, IconShard } from "../ui/icons";
import EnemyLevel from "../Enemy/EnemyLevel";

interface Props {
  item: IBattleFloor;
  onClick: () => void;
}

const BattleFloor = ({ item, onClick }: Props) => {
  return (
    <Center
      opacity={item.isCleared ? 0.3 : 1}
      background="linear-gradient(to bottom right, #898b8f, #52475c, #422729)"
      borderRadius={8}
      h={"180px"}
      justifyContent={"space-between"}
      px={10}
      border={"1px solid gray"}
      gap={10}
      w={"100%"}
    >
      <>
        <Stack>
          <Text fontSize={32} fontWeight={"bold"}>
            Этаж {item.floor}
          </Text>
          <Stack gap={1}>
            <HStack>
              <IconGold /> {item.reward.gold}
            </HStack>
            {item.reward.shards && (
              <HStack>
                <IconShard /> {item.reward.shards}
              </HStack>
            )}
          </Stack>
        </Stack>
        <Button disabled={item.isCleared || !item.isOpen} onClick={onClick} size={"lg"}>
          Битва
        </Button>
        <HStack>
          {item.enemies.map((enemy, i) => (
            <Box position={"relative"} key={i} w={"120px"}>
              <EnemyLevel level={enemy.level} />
              <Image src={enemy.image} />
            </Box>
          ))}
        </HStack>
      </>
      {item.isCleared && (
        <Center position={"absolute"} inset={0} fontSize={40}>
          Зачищено
        </Center>
      )}
    </Center>
  );
};

export default BattleFloor;
