import { Box, Center, Container, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import BattleFloor from "./BattleFloor";

import BattleStage from "./BattleStage";
import type { IBattleFloor } from "@/types/battle";
import BattleInfo from "./BattleInfo";
import { createBlueGoblin, createGoldGobin, createGreenGoblin, createRedGoblin } from "@/data/enemy/enemy_all";

const ALL_FLOOR: IBattleFloor[] = [
  {
    floor: 1,
    enemies: [createGreenGoblin(), createGreenGoblin(), createGreenGoblin()],
    isCleared: false,
    reward: { gold: 100 },
  },
  {
    floor: 2,
    enemies: [createGreenGoblin(), createBlueGoblin(), createGreenGoblin()],
    isCleared: false,
    reward: { gold: 105, shards: 1 },
  },
  {
    floor: 3,
    enemies: [createBlueGoblin(), createBlueGoblin(), createBlueGoblin()],
    isCleared: false,
    reward: { gold: 110 },
  },
  {
    floor: 4,
    enemies: [createBlueGoblin(), createGreenGoblin(2), createBlueGoblin()],
    isCleared: false,
    reward: { gold: 115, shards: 1 },
  },
  {
    floor: 5,
    enemies: [createBlueGoblin(), createGreenGoblin(2), createGoldGobin()],
    isCleared: false,
    reward: { gold: 120 },
  },
  {
    floor: 6,
    enemies: [createBlueGoblin(), createRedGoblin(), createGoldGobin(0)],
    isCleared: false,
    reward: { gold: 125, shards: 1 },
  },
  {
    floor: 7,
    enemies: [createGreenGoblin(2), createBlueGoblin(2), createGreenGoblin(2)],
    isCleared: false,
    reward: { gold: 130 },
  },
  {
    floor: 8,
    enemies: [createGoldGobin(), createBlueGoblin(3), createGoldGobin(0)],
    isCleared: false,
    reward: { gold: 135, shards: 1 },
  },
  {
    floor: 9,
    enemies: [createBlueGoblin(2), createBlueGoblin(2), createGoldGobin(2)],
    isCleared: false,
    reward: { gold: 140 },
  },
  {
    floor: 10,
    enemies: [createGreenGoblin(2), createRedGoblin(2), createGoldGobin(2)],
    isCleared: false,
    reward: { gold: 145, shards: 1 },
  },
];

const Battle = () => {
  const [selectedFloor, setSelectedFloor] = useState<IBattleFloor | null>(null);
  return (
    <Center w={"100%"} maxW={{ base: "4xl" }}>
      {!selectedFloor && (
        <Center h={"800px"} overflowY={"auto"} w={"100%"}>
          <Stack gap={4} maxW={"900px"} m={"auto"}>
            {ALL_FLOOR.map((floor, i) => (
              <Box key={i} position={"relative"}>
                <BattleFloor key={floor.floor} item={floor} onClick={() => setSelectedFloor(floor)} />
                <BattleInfo battleFloor={floor} />
              </Box>
            ))}
          </Stack>
        </Center>
      )}

      {selectedFloor && <BattleStage battleFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />}
    </Center>
  );
};

export default Battle;
