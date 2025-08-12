import { HERO } from "@/data/hero/hero";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { useHeroStatStore } from "@/store/heroStatStore";
import { calcWidthHPBar } from "@/utils/getWidthBar";
import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";

const HeroMpBar = () => {
  // const mana = useHeroStatStore((state) => state.mana);
  // const maxMana = useHeroStatStore((state) => state.maxMana);
  const currentMana = useHeroSkillStore((state) => state.hero.stats.currentMana);
  const maxMana = useHeroSkillStore((state) => state.hero.stats.maxMana);
  // const hero = useHeroSkillStore((state) => state.hero);

  // console.log(hero, currentMana);
  return (
    <Box
      position={"relative"}
      borderRadius={8}
      h={"42px"}
      border={"1px solid gray"}
      bg={"gray.800"}
      w={"100%"}
      p={1}
    >
      <Box
        h={"100%"}
        w={calcWidthHPBar(currentMana, maxMana)}
        transition={"all 200ms ease-in-out"}
        background="linear-gradient(to bottom right, #5db4c0, #467fad, #113f69)"
      >
        <Text position={"absolute"} top={"0"} left={"50%"} transform={"translateX(-50%)"} fontSize={24}>
          {currentMana}/{maxMana}
        </Text>
      </Box>
    </Box>
  );
};

export default HeroMpBar;
