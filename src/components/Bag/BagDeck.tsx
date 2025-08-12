import { Box, Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../Skill/SkillCard";
import { MdRemoveCircle } from "react-icons/md";
import { useHeroSkillStore } from "@/store/heroSkillStore";

const BagDeck = () => {
  const battleDeck = useHeroSkillStore((state) => state.battleDeck);
  const removeFromDeck = useHeroSkillStore((state) => state.removeFromDeck);
  const plugCount = 5 - battleDeck.length;

  return (
    <HStack>
      <Center px={2}>
        <Text fontSize={24} fontWeight={"semibold"}>
          Боевая колода:
        </Text>
      </Center>
      <HStack my={4}>
        {battleDeck.map((skill) => {
          return (
            <Box position={"relative"} key={skill.name} w={"100px"} h={"100px"}>
              <MdRemoveCircle
                onClick={() => removeFromDeck(skill)}
                size={24}
                style={{ position: "absolute", top: "2", right: "2", cursor: "pointer" }}
              />
              <Image src={skill.img} />
            </Box>
          );
        })}
        {Array.from({ length: plugCount }).map((_, index) => (
          <Box bg={"gray.800"} key={index} w={"100px"} h={"100px"} border={"1px solid gray"}></Box>
        ))}
      </HStack>
    </HStack>
  );
};

export default BagDeck;
