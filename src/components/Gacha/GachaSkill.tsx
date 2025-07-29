import { Button, ButtonGroup, Center, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GachaSkillList from "./GachaSkillList";
import { SiCrystal } from "react-icons/si";
import GachaHistory from "./GachaHistory";
import { toaster } from "../ui/toaster";
import type { ISkill, ISkillHistory } from "@/types/skill";
import { getThreeRandomSkills } from "@/utils/getRandomSkills";
import { IoIosInformationCircleOutline } from "react-icons/io";
import GachaInfo from "./GachaInfo";

const GachaSkill = () => {
  const [gachaHistory, setGachaHistory] = useState<ISkillHistory[]>([]);
  const [totalShards, setTotalShards] = useState(10);
  const [randomedSkills, setRandomedSkills] = useState<ISkill[] | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);

  const useShard = () => {
    setTotalShards((prev) => prev - 1);
  };

  const handleRoll = () => {
    useShard();
    setRandomedSkills(getThreeRandomSkills());
    setSelectedSkill(null);
  };

  const handleSelect = () => {
    if (selectedSkill) {
      addGachaHistory(selectedSkill);
      toaster.create({ title: "Congratulation", description: `You got skill: ${selectedSkill.name}` });
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
    <Center flexDir={"column"} maxW={{ base: "8xl" }} w={"100%"}>
      <HStack mb={8} w={"100%"} gap={4} px={4}>
        <GachaHistory skills={gachaHistory} />
        <GachaInfo />
        <HStack ml={"auto"}>
          {totalShards}
          <SiCrystal color="violet" title="Кристалл призыва" size={20} />
        </HStack>
      </HStack>
      <HStack minH={"380px"}>
        <GachaSkillList
          skills={randomedSkills}
          selectedSkill={selectedSkill}
          select={(skill: ISkill) => setSelectedSkill(skill)}
        />
        {!randomedSkills && (
          <Center w={"100%"} flexDir={"column"} gap={2}>
            <Text>У вас имеются {totalShards} кристаллов</Text>
            <Button disabled={totalShards === 0} onClick={handleRoll}>
              Использовать
            </Button>
          </Center>
        )}
      </HStack>
      <ButtonGroup mt={4}>
        <Button disabled={!selectedSkill} onClick={handleSelect}>
          Выбрать
        </Button>
      </ButtonGroup>
    </Center>
  );
};

export default GachaSkill;
