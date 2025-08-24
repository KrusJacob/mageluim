import type { IArtifact } from "@/types/artifact";
import { getColorRarity } from "@/utils/getColorRarity";
import { Box, Card, HStack, Image, Tag, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
interface Props {
  artifact: IArtifact;
  isSelected: boolean;
}

const ArtifactCard = ({ artifact, isSelected }: Props) => {
  return (
    <Card.Root maxW="sm" h={"100%"} overflow="hidden" cursor={"pointer"}>
      <Image src={artifact.img} alt={artifact.name} />
      <Box position={"relative"} w={"100%"}>
        <Card.Title mt={-9} px={3} py={1} color={"gray.100"}>
          {artifact.name}
        </Card.Title>
        {/* <SkillManaCost value={skill.data.manaCost[skill.level]} />
        <SkillCooldown cooldown={skill.data.cooldown[skill.level]} /> */}
      </Box>
      <Card.Body
        maxH={"280px"}
        minH={"120px"}
        overflowY={"auto"}
        scrollbarWidth={"none"}
        borderTop={`2px solid ${getColorRarity(artifact.rarity)}`}
        gap="1"
        bg={"gray.950"}
        p={3}
      >
        <HStack>
          {artifact.element.map((item, i) => (
            <Tag.Root size="lg" key={i}>
              <Tag.Label color={item.color} title={item.label}>
                {item.Icon}
              </Tag.Label>
            </Tag.Root>
          ))}
        </HStack>
        <Card.Description color={"gray.400"}>{artifact.description}</Card.Description>
        {isSelected && (
          <Box mt={2} data-state="open" _open={{ animationName: "fade-in", animationDuration: "300ms" }}>
            {/* {artifact.tags?.map((item, i) => (
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
            ))} */}
            <Box mt={4}>
              <Text fontWeight={"semibold"} fontSize={16} color={"gray.100"}>
                Пробуждениe:
              </Text>
              {artifact.awakenings?.map((item, i) => (
                <Text
                  display="flex"
                  alignItems="center"
                  my={1}
                  gap={0.5}
                  key={i}
                  fontSize="sm"
                  color={artifact.level > i ? "gray.200" : "gray.500"}
                >
                  {i + 1}
                  <FaStar size={12} style={{ marginRight: 6 }} /> {item}
                </Text>
              ))}
            </Box>
          </Box>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default ArtifactCard;
