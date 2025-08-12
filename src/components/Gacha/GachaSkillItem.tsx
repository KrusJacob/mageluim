import { Box, Card, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import type { ISkill } from "@/types/skill";
import { getColorRarity } from "@/utils/getColorRarity";
import { getDataElement } from "@/utils/getDataElement";
import SkillCard from "../Skill/SkillCard";

interface Props {
  skill: ISkill;
  index: number;
  select: (skill: ISkill) => void;
  isSelected: boolean;
}

const GachaSkillItem = ({ skill, index, select, isSelected }: Props) => {
  return (
    <Box
      onClick={() => select(skill)}
      data-state="open"
      _open={{
        animationName: "skill-fade-in",
        animationDuration: `{${index * 750}}ms`,
      }}
      w={"280px"}
      boxShadow={isSelected ? "0px 1px 10px 8px #bcd6ff" : "none"}
      transition={"all 200ms ease-in-out"}
      border={`2px solid ${getColorRarity(skill.rarity)}`}
      borderRadius={8}
      _hover={{ scale: 1.025 }}
    >
      <Box animation={skill.rarity === "legendary" ? "glow 2s ease-in-out infinite" : "none"}>
        <SkillCard skill={skill} isSelected={isSelected} />
      </Box>
    </Box>
  );
};

export default GachaSkillItem;
