import { Box, Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { MdRemoveCircle } from "react-icons/md";
import { useHeroSkillStore } from "@/store/heroSkillStore";

const BagDeckSkill = () => {
  const battleDeck = useHeroSkillStore((state) => state.battleDeckSkills);
  const removeFromDeck = useHeroSkillStore((state) => state.removeSkillDeck);
  const plugCount = 5 - battleDeck.length;

  return (
    <Stack>
      <Center px={2}>
        <Text fontSize={24} fontWeight={"semibold"}>
          Боевая колода:
        </Text>
      </Center>
      <HStack my={2} gap={1}>
        {battleDeck.map((skill) => {
          return (
            <Box border={"1px solid gray"} position={"relative"} key={skill.name} w={"90px"} h={"90px"}>
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
          <Box bg={"gray.800"} key={index} w={"90px"} h={"90px"} border={"1px solid gray"}></Box>
        ))}
      </HStack>
    </Stack>
  );
};

export default BagDeckSkill;
