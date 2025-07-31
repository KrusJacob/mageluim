import type { ISkill } from "@/types/skill";
import { getColorRarity } from "@/utils/getColorRarity";
import { Box, Card, HStack, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  skill: ISkill;
  isSelected: boolean;
}

const SkillCard = ({ skill, isSelected }: Props) => {
  return (
    <Card.Root
      animation={skill.rarity === "legendary" ? "glow 2s ease-in-out infinite" : "none"}
      maxW="sm"
      h={"100%"}
      overflow="hidden"
      cursor={"pointer"}
    >
      <Image src={skill.img} alt={skill.name} />
      <Card.Title mt={-9} px={3} py={1} color={"gray.100"}>
        {skill.name}
      </Card.Title>
      <Card.Body borderTop={`2px solid ${getColorRarity(skill.rarity)}`} gap="1" bg={"gray.950"} p={3}>
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
        {isSelected && skill.tags && (
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
  );
};

export default SkillCard;
