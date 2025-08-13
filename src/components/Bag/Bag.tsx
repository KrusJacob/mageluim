import { Box, Center, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillCard from "../Skill/SkillCard";
import DetailedBag from "./DetailedBag";
import type { ISkillHero } from "@/types/skill";
import SkillLevel from "../Skill/SkilLevel";
import BagDeck from "./BagDeck";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { IconGold, IconShard } from "../ui/icons";

const Bag = () => {
  const [selectedSkill, setSelectedSkill] = useState<ISkillHero | null>(null);
  const skills = useHeroSkillStore((state) => state.skills);
  const shards = useHeroSkillStore((state) => state.shards);
  const gold = useHeroSkillStore((state) => state.gold);

  return (
    <HStack w={"100%"} alignItems={"start"}>
      <Box flexDir={"column"} maxW={{ base: "8xl" }} w={"100%"}>
        <HStack gap={4}>
          <BagDeck />
          <Stack>
            <HStack>
              <IconGold /> {gold}
            </HStack>
            <HStack>
              <IconShard /> {shards}
            </HStack>
          </Stack>
        </HStack>
        <Box overflow={"auto"} h={"700px"}>
          <Flex w={"100%"} justifyContent={"start"} alignItems={"start"} flexWrap={"wrap"} gap={1}>
            {skills?.map((skill, i) => (
              <Box
                position={"relative"}
                key={i + skill.name}
                onClick={() => setSelectedSkill(skill)}
                w={"260px"}
                h={"400px"}
              >
                <SkillLevel level={skill.level} />

                <SkillCard key={i + skill.name} skill={skill} isSelected={false} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      <DetailedBag skill={selectedSkill} />
    </HStack>
  );
};

export default Bag;
