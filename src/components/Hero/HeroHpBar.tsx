import { useHeroSkillStore } from "@/store/heroSkillStore";
import { calcWidthHPBar } from "@/utils/getWidthBar";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeroHpBar = () => {
  const currentHp = useHeroSkillStore((state) => state.hero.stats.currentHp);
  const maxHp = useHeroSkillStore((state) => state.hero.stats.maxHp);

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
        w={calcWidthHPBar(currentHp, maxHp)}
        transition={"all 200ms ease-in-out"}
        background="linear-gradient(to bottom right, #5dc09a, #46ad68, #115c21)"
      >
        <Text position={"absolute"} top={"0"} left={"50%"} transform={"translateX(-50%)"} fontSize={24}>
          {currentHp}/{maxHp}
        </Text>
      </Box>
    </Box>
  );
};

export default HeroHpBar;
