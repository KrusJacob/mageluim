import { useHeroSkillStore } from "@/store/heroSkillStore";
import { Box, Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdRemoveCircle } from "react-icons/md";

const BagDeckArtifact = () => {
  const battleDeck = useHeroSkillStore((state) => state.battleDeckArtifacts);
  const removeFromDeck = useHeroSkillStore((state) => state.removeArtifactDeck);
  const plugCount = 5 - battleDeck.length;

  return (
    <Stack>
      <Center px={2}>
        <Text fontSize={24} fontWeight={"semibold"}>
          Боевые артефакты:
        </Text>
      </Center>
      <HStack my={2} gap={1}>
        {battleDeck.map((artifact) => {
          return (
            <Box
              border={"1px solid gray"}
              title={artifact.description}
              position={"relative"}
              key={artifact.name}
              w={"90px"}
              h={"90px"}
            >
              <MdRemoveCircle
                onClick={() => removeFromDeck(artifact)}
                size={24}
                style={{ position: "absolute", top: "2", right: "2", cursor: "pointer" }}
              />
              <Image src={artifact.img} />
            </Box>
          );
        })}
        {Array.from({ length: plugCount }).map((_, index) => (
          <Box bg={"gray.800"} key={index} w={"90px"} h={"90px"} border={"1px solid gray"}></Box>
        ))}
      </HStack>
    </Stack>
  );
};

export default BagDeckArtifact;
