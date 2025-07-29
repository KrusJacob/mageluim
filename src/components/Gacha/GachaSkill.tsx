import { Button, ButtonGroup, Center, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GachaSkillList from "./GachaSkillList";
import { SiCrystal } from "react-icons/si";
import GachaHistory from "./GachaHistory";
import { toaster } from "../ui/toaster";
import type { ISkill, ISkillHistory } from "@/types/skill";
import { getThreeRandomSkills } from "@/utils/getRandomSkills";

const GachaSkill = () => {
  const [gachaHistory, setGachaHistory] = useState<ISkillHistory[]>([]);
  const [totalShards, setTotalShards] = useState(10);
  const [randomedSkills, setRandomedSkills] = useState<ISkill[] | null>(getThreeRandomSkills());
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
      <HStack mb={8} justify={"space-between"} w={"100%"} px={4}>
        <GachaHistory skills={gachaHistory} />
        <HStack>
          {totalShards}
          <SiCrystal />
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
            <Text>You have {totalShards} shards</Text>
            <Button disabled={totalShards === 0} onClick={handleRoll}>
              Roll
            </Button>
          </Center>
        )}
      </HStack>
      <ButtonGroup mt={4}>
        <Button disabled={!selectedSkill} onClick={handleSelect}>
          Select
        </Button>
      </ButtonGroup>
    </Center>
  );
};

export default GachaSkill;
