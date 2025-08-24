import { Box, Center, HStack } from "@chakra-ui/react";
import SkillCard from "../Skill/SkillCard";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import type { ISkillHero } from "@/types/skill";

interface Props {
  selectedSkill: ISkillHero | null;
  onSelectSkill: (skill: ISkillHero) => void;
}

const BattleDeck = ({ selectedSkill, onSelectSkill }: Props) => {
  const battleDeck = useHeroSkillStore((state) => state.battleDeckSkills);
  const plugCount = 5 - battleDeck.length;

  // console.log("BattleDeck render", battleDeck);

  return (
    <Center>
      <HStack gap={2} alignItems={"start"} mt={2}>
        {battleDeck.map((skill) => (
          <Box
            key={skill.name}
            position={"relative"}
            transition={"all 200ms ease-in-out"}
            transform={selectedSkill?.id === skill.id ? "translateY(-100px)" : ""}
            w={"250px"}
            onClick={() => onSelectSkill(skill)}
          >
            {!!skill.currentCooldown && (
              <Box zIndex={1000} position={"absolute"} top={0} left={0} right={0} bottom={0} bg={"#000000a6"}>
                <Center fontSize={50} h={"100%"}>
                  {skill.currentCooldown}
                </Center>
              </Box>
            )}
            <SkillCard skill={skill} isSelected={selectedSkill?.id === skill.id} />
          </Box>
        ))}
        {Array.from({ length: plugCount }).map((_, index) => (
          <Box bg={"gray.800"} key={index} w={"250px"} h={"350px"} border={"1px solid gray"}></Box>
        ))}
      </HStack>
    </Center>
  );
};

export default BattleDeck;
