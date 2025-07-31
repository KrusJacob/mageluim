import type { ISkill, ISkillHero } from "@/types/skill";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../Skill/SkillCard";
import { HERO } from "@/data/hero/hero";
import SkillLevel from "../Skill/SkilLevel";

interface Props {
  skill: ISkillHero | null;
  upgradeSkill: () => void;
}
const DetailedBag = ({ skill, upgradeSkill }: Props) => {
  return (
    <Box w={"380px"}>
      {skill && (
        <Stack w={"380px"} gap={2} position={"relative"}>
          <SkillLevel level={skill.level} />
          <SkillCard skill={skill} isSelected={true} />
          <Text fontSize={40} fontWeight={"bold"} right={4} top={4} position={"absolute"}>
            x{skill.copies}
          </Text>
          <Button onClick={upgradeSkill} disabled={skill.copies < 2} w={"100%"}>
            Улучшить
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default DetailedBag;
