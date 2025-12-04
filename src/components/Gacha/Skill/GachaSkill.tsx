import { Button, Center, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import GachaHistory from "../GachaHistory";
import { toaster } from "../../ui/toaster";
import type { ISkill, ISkillHistory } from "@/types/skill";
import { getRandomGacha } from "@/utils/getRandomSkills";
import GachaInfo from "../GachaInfo";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { IconSkillShard } from "../../ui/icons";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";
import GachaList from "../GachaList";
import SkillCard from "@/components/Skill/SkillCard";

const GachaSkill = () => {
  const [gachaHistory, setGachaHistory] = useState<ISkillHistory[]>([]);
  const heroShards = useHeroSkillStore((state) => state.shardsSkill);
  const sellMaxLevelSkill = useHeroSkillStore((state) => state.sellMaxLevelItem);
  const useShard = useHeroSkillStore((state) => state.useShardSkill);
  const addNewSkill = useHeroSkillStore((state) => state.addNewSkill);
  const [randomedSkills, setRandomedSkills] = useState<ISkill[] | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

  const handleRoll = () => {
    useShard();
    setRandomedSkills(getRandomGacha(ALL_SKILL_LIST));
    setSelectedSkill(null);
  };

  const handleSelect = () => {
    if (selectedSkill) {
      const selledGold = sellMaxLevelSkill(selectedSkill);
      if (selledGold > 0) {
        toaster.create({
          title: "Поздравляем",
          description: `Вы получили ${selledGold} золота, так как карта заклинания: ${selectedSkill.name} уже максимального уровня`,
        });
      } else {
        addNewSkill(selectedSkill);
        toaster.create({
          title: "Поздравляем",
          description: `Вы получили карту заклинания: ${selectedSkill.name}`,
        });
      }
      addGachaHistory(selectedSkill);
    }
    setRandomedSkills(null);
    setSelectedSkill(null);
  };

  const addGachaHistory = (newSkill: ISkill) => {
    setGachaHistory((prev) => [
      ...prev,
      { name: newSkill.name, rarity: newSkill.rarity, dateOfRecipe: new Date() },
    ]);
  };

  return (
    <Center flexDir={"column"} maxW={{ base: "6xl" }} w={"100%"}>
      <HStack mb={4} w={"100%"} gap={4}>
        <GachaHistory items={gachaHistory} />
        <GachaInfo />
        <HStack ml={"auto"}>
          {heroShards}
          <IconSkillShard />
        </HStack>
      </HStack>
      <HStack minH={"600px"} bg={"whiteAlpha.100"} rounded={"md"} w={"100%"}>
        <GachaList
          items={randomedSkills}
          selected={selectedSkill}
          select={(item: ISkill) => setSelectedSkill(item)}
          Card={({ item, isSelected }) => <SkillCard skill={item} isSelected={isSelected} />}
        />
        {!randomedSkills && (
          <Center w={"100%"} flexDir={"column"} gap={2}>
            <Text>У вас имеются {heroShards} кристаллов</Text>
            <Button disabled={heroShards === 0} onClick={handleRoll}>
              Использовать
            </Button>
          </Center>
        )}
      </HStack>

      {randomedSkills && (
        <Button mt={4} disabled={!selectedSkill} onClick={handleSelect}>
          Выбрать
        </Button>
      )}
    </Center>
  );
};

export default GachaSkill;
