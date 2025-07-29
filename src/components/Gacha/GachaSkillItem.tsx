import { Box, Card, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import type { ISkill } from "@/types/skill";
import { getColorRarity } from "@/utils/getColorRarity";
import { getDataElement } from "@/utils/getDataElement";

interface Props {
  skill: ISkill;
  index: number;
  select: (skill: ISkill) => void;
  isSelected: boolean;
}

const GachaSkillItem = ({ skill, index, select, isSelected }: Props) => {
  console.log(skill.tags);
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
      cursor={"pointer"}
      transition={"all 200ms ease-in-out"}
      border={`2px solid ${getColorRarity(skill.rarity)}`}
      borderRadius={8}
      _hover={{ scale: 1.025 }}
    >
      <Card.Root
        animation={skill.rarity === "legendary" ? "glow 2s ease-in-out infinite" : "none"}
        maxW="sm"
        overflow="hidden"
      >
        <Image src={skill.img} alt={skill.name} />
        <Card.Title mt={-9} px={3} py={1} color={"gray.100"}>
          {skill.name}
        </Card.Title>
        <Card.Body borderTop={`2px solid ${getColorRarity(skill.rarity)}`} gap="1" bg={"gray.950"} p={3}>
          {/* <Card.Title mt={-10} color={"gray.200"} bg={getColorRarity(skill.rarity)}>
            {skill.name}
          </Card.Title> */}
          <HStack>
            {skill.element.map((item, i) => (
              <Tag.Root size="lg" key={i}>
                <Tag.Label color={item.color} title={item.label}>
                  {item.Icon}
                </Tag.Label>
              </Tag.Root>
            ))}
          </HStack>
          <Card.Description color={"gray.400"}>{skill.description}</Card.Description>
          {isSelected && (
            <Box mt={2}>
              {skill.tags?.map((item, i) => (
                <Box key={i} my={2}>
                  <Tag.Root size="lg" key={i}>
                    <Tag.Label display="flex" alignItems="center" gap={1} color={item.color} title={item.label}>
                      {item.label} {item.Icon}
                    </Tag.Label>
                  </Tag.Root>
                  <Text fontSize="sm" color={"gray.400"}>
                    {item.description}
                  </Text>
                </Box>
              ))}
            </Box>
          )}
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default GachaSkillItem;
