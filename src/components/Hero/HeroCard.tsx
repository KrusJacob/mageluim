import type { IEnemy } from "@/types/enemy";
import type { IHero, IHeroEngine } from "@/types/hero";
import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import FloatDamage from "../ui/floatDamage";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import StatusPanel from "../ui/statusPanel";

const HeroCard = ({ battleActions }: { battleActions: number }) => {
  const currentHp = useHeroSkillStore((state) => state.hero.stats.currentHp);
  const hero = useHeroSkillStore((state) => state.hero);
  const { takenLastDamage } = hero;
  console.log(hero);
  return (
    <Stack>
      <Text fontSize={20} fontWeight={"bold"}>
        {hero.name}
      </Text>
      <Box position={"relative"} w={"200px"}>
        <StatusPanel target={hero} />
        {takenLastDamage && <FloatDamage takenLastDamages={takenLastDamage} />}
        <Image w={"200px"} h={"200px"} src={hero.image} />
      </Box>
      <Center fontSize={20}>{battleActions} действия</Center>
    </Stack>
  );
};

export default HeroCard;
