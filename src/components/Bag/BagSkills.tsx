import type { ISkillHero } from "@/types/skill";
import { Box, Flex } from "@chakra-ui/react";
import LevelItem from "../Skill/SkilLevel";
import SkillCard from "../Skill/SkillCard";

const BagSkills = ({ skills, setSelectedSkill }: { skills: ISkillHero[]; setSelectedSkill: Function }) => {
  return (
    <Box overflow={"auto"} h={"600px"}>
      <Flex w={"100%"} justifyContent={"start"} alignItems={"start"} flexWrap={"wrap"} gap={1}>
        {skills?.map((skill, i) => (
          <Box
            position={"relative"}
            key={i + skill.name}
            onClick={() => setSelectedSkill(skill)}
            w={"260px"}
            h={"400px"}
          >
            <LevelItem level={skill.level} />
            <SkillCard key={i + skill.name} skill={skill} isSelected={false} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BagSkills;
