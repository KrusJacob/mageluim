import { Box, Button, Center, Flex, HStack, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import SkillCard from "../Skill/SkillCard";
import type { ISkill } from "@/types/skill";
import DetailedShop from "./DetailedShop";
import ShardCard from "./ShardCard";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { IconGold } from "../ui/icons";
import ShopPrice from "./ShopPrice";
import { SHOP_PRICE } from "@/constant/shop";
import { useShopStore } from "@/store/shopStore";
import ArtifactCard from "../Artifact/ArtifactCard";
import type { IArtifact } from "@/types/artifact";

export type IShopTypeItem = ISkill | IArtifact | "shardSkill" | "shardArtifact";

const Shop = () => {
  const [selectedSkill, setSelectedSkill] = useState<IShopTypeItem>("shardSkill");
  const heroGold = useHeroSkillStore((state) => state.gold);
  const shopSkills = useShopStore((state) => state.shopSkills);
  const shopArtifacts = useShopStore((state) => state.shopArtifacts);
  return (
    <HStack w={"100%"} alignItems={"start"}>
      <Box flexDir={"column"} maxW={{ base: "8xl" }} w={"100%"}>
        <HStack p={4} justifyContent={"end"}>
          {heroGold} <IconGold />
        </HStack>
        <Box overflow={"auto"} h={"700px"}>
          <Flex flexWrap={"wrap"} gap={1}>
            <Box position={"relative"} w={"260px"} h={"400px"} onClick={() => setSelectedSkill("shardSkill")}>
              <ShardCard type={"shardSkill"} />
              <ShopPrice price={SHOP_PRICE.shardSkill} />
            </Box>
            <Box position={"relative"} w={"260px"} h={"400px"} onClick={() => setSelectedSkill("shardArtifact")}>
              <ShardCard type={"shardArtifact"} />
              <ShopPrice price={SHOP_PRICE.shardsArtifact} />
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
            {shopArtifacts?.map((artifact, i) => (
              <Box
                position={"relative"}
                key={i + artifact.name}
                onClick={() => setSelectedSkill(artifact)}
                w={"260px"}
                h={"400px"}
              >
                <ArtifactCard artifact={artifact} isSelected={false} />
                <ShopPrice price={SHOP_PRICE.artifacts[artifact.rarity]} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
      <DetailedShop item={selectedSkill} />
    </HStack>
  );
};

export default Shop;
