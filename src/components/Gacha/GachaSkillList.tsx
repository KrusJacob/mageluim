import type { ISkill } from "@/types/skill";
import { Box, HStack } from "@chakra-ui/react";
import GachaSkillItem from "./GachaSkillItem";

interface Props {
  skills: ISkill[] | null;
  selectedSkill: ISkill | null;
  select: (skill: ISkill) => void;
}

const GachaSkillList = ({ skills, selectedSkill, select }: Props) => {
  return (
    <Box>
      <HStack gap={12} alignItems={"self-start"} minH={"450px"}>
        {skills?.map((skill, i) => (
          <GachaSkillItem
            key={skill.name}
            index={i + 1}
            skill={skill}
            select={(skill: ISkill) => select(skill)}
            isSelected={selectedSkill?.name === skill.name}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default GachaSkillList;
