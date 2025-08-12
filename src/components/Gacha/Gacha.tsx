import { Button, ButtonGroup, Center, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GachaSkillList from "./GachaSkillList";
import { SiCrystal } from "react-icons/si";
import GachaHistory from "./GachaHistory";
import { toaster } from "../ui/toaster";
import type { ISkill, ISkillHistory } from "@/types/skill";
import { getThreeRandomSkills } from "@/utils/getRandomSkills";
import GachaInfo from "./GachaInfo";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { IconShard } from "../ui/icons";

const Gacha = () => {
  const [gachaHistory, setGachaHistory] = useState<ISkillHistory[]>([]);
  const heroShards = useHeroSkillStore((state) => state.shards);
  const useShard = useHeroSkillStore((state) => state.useShard);
  const addNewSkill = useHeroSkillStore((state) => state.addNewSkill);
  const [randomedSkills, setRandomedSkills] = useState<ISkill[] | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

  const handleRoll = () => {
    useShard();
    setRandomedSkills(getThreeRandomSkills());
    setSelectedSkill(null);
  };

  const handleSelect = () => {
    if (selectedSkill) {
      addGachaHistory(selectedSkill);
      toaster.create({ title: "Поздравляем", description: `Вы получили карту заклинания: ${selectedSkill.name}` });
      addNewSkill(selectedSkill);
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
        {/* <BsArrowLeftSquareFill size={28} cursor={"pointer"} onClick={back} /> */}
        <GachaHistory skills={gachaHistory} />
        <GachaInfo />
        <HStack ml={"auto"}>
          {heroShards}
          <IconShard />
        </HStack>
      </HStack>
      <HStack minH={"400px"}>
        <GachaSkillList
          skills={randomedSkills}
          selectedSkill={selectedSkill}
          select={(skill: ISkill) => setSelectedSkill(skill)}
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

export default Gacha;
