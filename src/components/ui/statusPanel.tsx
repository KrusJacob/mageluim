import type { IEnemy } from "@/types/enemy";
import type { IHero } from "@/types/hero";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const StatusPanel = ({ target }: { target: IHero | IEnemy }) => {
  return (
    <HStack position={"absolute"} bg={"blackAlpha.600"}>
      {target.effects.map((effect, i) => (
        <Box
          p={1}
          key={i}
          title={`${effect.action.label}. Осталось ходов: ${effect.duration}`}
          position={"relative"}
        >
          <Box fontSize={24} color={effect.action.color}>
            {effect.action.Icon}
          </Box>
          {effect.action.maxLayer > 1 && (
            <Box position={"absolute"} top={-2} right={0}>
              {effect.layer}
            </Box>
          )}
        </Box>
      ))}
      {target.debuffs.map((debuff, i) => (
        <Box
          p={1}
          key={i}
          title={`${debuff.action.label}. Осталось ходов: ${debuff.duration}`}
          position={"relative"}
        >
          <Box fontSize={24} color={debuff.action.color}>
            {debuff.action.Icon}
          </Box>

          <Box position={"absolute"} top={-2} right={0}>
            {debuff.action.level === 1 ? "I" : "II"}
          </Box>
        </Box>
      ))}
      {target.buffs.map((buff, i) => (
        <Box p={1} key={i} title={`${buff.action.label}. Осталось ходов: ${buff.duration}`} position={"relative"}>
          <Box fontSize={24} color={buff.action.color}>
            {buff.action.Icon}
          </Box>

          <Box position={"absolute"} top={-2} right={0}>
            {buff.action.level === 1 ? "I" : "II"}
          </Box>
        </Box>
      ))}
    </HStack>
  );
};

export default StatusPanel;
