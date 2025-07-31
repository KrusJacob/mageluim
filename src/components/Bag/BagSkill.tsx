import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SkillLevel from "../Skill/SkilLevel";
import SkillCard from "../Skill/SkillCard";
import type { ISkill } from "@/types/skill";

const BagSkill = ({ skill, quantity }: { skill: ISkill; quantity: number }) => {
  return (
    <Box gap={2} position={"relative"} h={"400px"}>
      <SkillLevel level={skill.level} />
      <SkillCard skill={skill} isSelected={false} />
      <Text lineHeight={1} fontSize={32} fontWeight={"bold"} right={4} top={4} position={"absolute"}>
        x{quantity}
      </Text>
    </Box>
  );
};

export default BagSkill;
