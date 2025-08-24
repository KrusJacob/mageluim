import { Box, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import type { IBattleFloor } from "@/types/battle";
import BattleInfo from "./BattleInfo";
import BattleFloor from "./BattleFloor";
import BattleStage from "./BattleStage";
import { ALL_FLOOR } from "@/constant/enemies";

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
