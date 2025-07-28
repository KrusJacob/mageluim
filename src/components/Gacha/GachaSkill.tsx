import { Box, Button, ButtonGroup, Center, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GachaSkillList from "./GachaSkillList";
import { CHANCE_TABLE } from "./data";
import { SiCrystal } from "react-icons/si";
import GachaHistory from "./GachaHistory";
import { toaster } from "../ui/toaster";
import type { ISkill, ISkillHistory, Rarity } from "@/types/skill";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";

function getThreeRandomSkills(skills: ISkill[] = ALL_SKILL_LIST) {
  function pickSkill() {
    const roll = Math.random() * 100;
    let cumulative = 0;

    for (const rarity of Object.keys(CHANCE_TABLE) as Rarity[]) {
      cumulative += CHANCE_TABLE[rarity];
      if (roll < cumulative) {
        const pool = skills.filter((s) => s.rarity === rarity);
        return pool[Math.floor(Math.random() * pool.length)];
      }
    }

    return skills[0]; // fallback
  }

  const selected: ISkill[] = [];
  while (selected.length < 3) {
    const skill = pickSkill();
    if (!selected.some((s) => s.id === skill.id)) {
      selected.push(skill);
    }
  }

  return selected;
}

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
