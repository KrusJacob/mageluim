import { HERO } from "@/data/hero/hero";
import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillCard from "../Skill/SkillCard";
import DetailedBag from "./DetailedBag";
import type { ISkillHero } from "@/types/skill";
import { FaStar } from "react-icons/fa";
import SkillLevel from "../Skill/SkilLevel";

const Bag = () => {
  const [selectedSkill, setSelectedSkill] = useState<ISkillHero | null>(null);
  const [skills, setSkills] = useState<ISkillHero[]>(HERO.skills);

  const upgradeSkill = () => {
    if (!selectedSkill) return;

    HERO.upgradeSkill(selectedSkill);
    setSkills([...HERO.skills]);
  };

  return (
    <HStack w={"100%"} alignItems={"start"}>
      <Box flexDir={"column"} maxW={{ base: "8xl" }} w={"100%"}>
        <Flex w={"100%"} justifyContent={"start"} alignItems={"start"} flexWrap={"wrap"} gap={2}>
          {skills.map((skill, i) => (
            <Box position={"relative"} onClick={() => setSelectedSkill(skill)} w={"250px"} h={"400px"}>
              <SkillLevel level={skill.level} />
              <SkillCard key={i + skill.name} skill={skill} isSelected={false} />
            </Box>
          ))}
        </Flex>
      </Box>
      <DetailedBag upgradeSkill={upgradeSkill} skill={selectedSkill} />
    </HStack>
  );
};

export default Bag;
