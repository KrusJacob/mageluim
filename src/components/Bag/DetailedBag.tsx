import type { ISkill, ISkillHero } from "@/types/skill";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../Skill/SkillCard";

import SkillLevel from "../Skill/SkilLevel";
import { useHeroSkillStore } from "@/store/heroSkillStore";

interface Props {
  skill: ISkillHero | null;
}
const DetailedBag = ({ skill }: Props) => {
  const addToDeck = useHeroSkillStore((state) => state.addToDeck);
  const battleDeck = useHeroSkillStore((state) => state.battleDeck);
  const upgradeSkill = useHeroSkillStore((state) => state.upgradeSkill);

  const isBattleDeck = battleDeck.some((s) => s.id === skill?.id);

  return (
    <Box w={"450px"}>
      {skill && (
        <Stack gap={2} position={"relative"}>
          <SkillLevel level={skill.level} />
          <SkillCard skill={skill} isSelected={true} />
          <Text lineHeight={1} fontSize={40} fontWeight={"bold"} right={4} top={4} position={"absolute"}>
            x{skill.copies}
          </Text>
          <Button onClick={() => upgradeSkill(skill)} disabled={skill.copies < 2} w={"100%"}>
            {skill.copies < 2 ? "Недостаточно копий" : "Улучшить"}
          </Button>
          <Button disabled={battleDeck.length >= 5 || isBattleDeck} onClick={() => addToDeck(skill)} w={"100%"}>
            {isBattleDeck ? "Уже колоде" : "В колоду"}
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default DetailedBag;
