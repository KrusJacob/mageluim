import type { ISkillHero } from "@/types/skill";
import { Button, Stack, Text } from "@chakra-ui/react";
import SkillCard from "../Skill/SkillCard";
import LevelItem from "../Skill/SkilLevel";
import { useHeroSkillStore } from "@/store/heroSkillStore";

interface Props {
  skill: ISkillHero;
}
const DetailedSkillBag = ({ skill }: Props) => {
  const addSkillToDeck = useHeroSkillStore((state) => state.addSkillToDeck);
  const battleDeckSkills = useHeroSkillStore((state) => state.battleDeckSkills);
  const upgradeSkill = useHeroSkillStore((state) => state.upgradeSkill);

  const isBattleDeck = battleDeckSkills.some((s) => s.id === skill?.id);

  return (
    <Stack gap={2} position={"relative"}>
      <LevelItem level={skill.level} />
      <SkillCard skill={skill} isSelected={true} />
      <Text lineHeight={1} fontSize={40} fontWeight={"bold"} right={4} top={4} position={"absolute"}>
        x{skill.copies}
      </Text>
      <Button onClick={() => upgradeSkill(skill)} disabled={skill.copies < 2} w={"100%"}>
        {skill.copies < 2 ? "Недостаточно копий" : "Улучшить"}
      </Button>
      <Button
        disabled={battleDeckSkills.length >= 5 || isBattleDeck}
        onClick={() => addSkillToDeck(skill)}
        w={"100%"}
      >
        {!isBattleDeck ? "Взять с собой" : "Уже исользуется"}
      </Button>
    </Stack>
  );
};

export default DetailedSkillBag;
