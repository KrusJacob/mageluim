import { ALL_SKILL_LIST } from "@/data/skills/skills_all";
import { Box, Button, Center, Flex, HStack, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillCard from "../Skill/SkillCard";
import type { ISkill } from "@/types/skill";
import DetailedShop from "./DetailedShop";
import { getRandomSkills } from "@/utils/getRandomSkills";
import ShardCard from "./ShardCard";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { IconGold } from "../ui/icons";
import ShopPrice from "./ShopPrice";
import { SHOP_PRICE } from "@/constant/shop";
import { useShopStore } from "@/store/shopStore";

const Shop = () => {
  // const [shopSkills, setShopSkills] = useState<ISkill[]>(getRandomSkills(ALL_SKILL_LIST, 7));
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);
  const heroGold = useHeroSkillStore((state) => state.gold);
  const shopSkills = useShopStore((state) => state.shopSkills);
  return (
    <HStack w={"100%"} alignItems={"start"}>
      <Box flexDir={"column"} maxW={{ base: "8xl" }} w={"100%"}>
        <HStack p={4} justifyContent={"end"}>
          {heroGold} <IconGold />
        </HStack>
        <Box overflow={"auto"} h={"700px"}>
          <Flex flexWrap={"wrap"} gap={1}>
            <Box position={"relative"} w={"260px"} h={"400px"} onClick={() => setSelectedSkill(null)}>
              <ShardCard />
              <ShopPrice price={SHOP_PRICE.shard} />
            </Box>

            {shopSkills?.map((skill, i) => (
              <Box
                position={"relative"}
                key={i + skill.name}
                onClick={() => setSelectedSkill(skill)}
                w={"260px"}
                h={"400px"}
              >
                <SkillCard skill={skill} isSelected={false} />
                <ShopPrice price={SHOP_PRICE.skills[skill.rarity]} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      <DetailedShop skill={selectedSkill} />
    </HStack>
  );
};

export default Shop;
