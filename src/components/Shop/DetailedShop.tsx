import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../Skill/SkillCard";
import ShardCard from "./ShardCard";
import { SHOP_PRICE } from "@/constant/shop";
import { IconGold } from "../ui/icons";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { toaster } from "../ui/toaster";
import type { IShopTypeItem } from "./Shop";
import { isSkill } from "@/data/skills/class";
import { isArtifact } from "@/data/artifacts/class";
import ArtifactCard from "../Artifact/ArtifactCard";
import { getPrice } from "@/utils/getPrice";

interface Props {
  item: IShopTypeItem;
}
const DetailedShop = ({ item }: Props) => {
  const hero = useHeroSkillStore((state) => state.hero);
  const heroGold = useHeroSkillStore((state) => state.gold);
  const addNewSkill = useHeroSkillStore((state) => state.addNewSkill);
  const addNewArtifact = useHeroSkillStore((state) => state.addNewArtifact);
  const addGold = useHeroSkillStore((state) => state.addGold);
  const addShardSkill = useHeroSkillStore((state) => state.addShardSkill);
  const addShardArtifact = useHeroSkillStore((state) => state.addShardArtifact);

  const price = getPrice(item);

  const getItemMaxLevel = () => {
    if (isSkill(item)) return hero.skills.find((s) => s.id === item.id)?.level === item.maxLevel;
    if (isArtifact(item)) return hero.artifacts.find((a) => a.id === item.id)?.level === item.maxLevel;
  };

  const isItemMaxLevel = getItemMaxLevel();

  const onBuy = () => {
    if (item === "shardSkill") {
      addShardSkill(1);
      toaster.create({ title: "Покупка", description: "Вы получили кристалл заклинания" });
    } else if (item === "shardArtifact") {
      addShardArtifact(1);
      toaster.create({ title: "Покупка", description: "Вы получили кристалл артефакта" });
    } else if (isSkill(item)) {
      addNewSkill(item);
      toaster.create({ title: "Покупка", description: `Вы купили заклинание: ${item.name}` });
    } else if (isArtifact(item)) {
      addNewArtifact(item);
      toaster.create({ title: "Покупка", description: `Вы купили артефакт: ${item.name}` });
    }
    addGold(-price);
  };

  return (
    <Box w={"450px"}>
      {item === "shardSkill" && (
        <Stack gap={2} position={"relative"}>
          <ShardCard type={"shardSkill"} />
        </Stack>
      )}
      {item === "shardArtifact" && (
        <Stack gap={2} position={"relative"}>
          <ShardCard type={"shardArtifact"} />
        </Stack>
      )}
      {isSkill(item) && (
        <Stack gap={2} position={"relative"}>
          <SkillCard skill={item} isSelected={true} />
        </Stack>
      )}
      {isArtifact(item) && (
        <Stack gap={2} position={"relative"}>
          <ArtifactCard artifact={item} isSelected={true} />
        </Stack>
      )}

      <Button mt={2} onClick={onBuy} disabled={heroGold < price || isItemMaxLevel} w={"100%"}>
        {price} <IconGold /> {heroGold >= price ? `Купить` : "Недостаточно золота"}
      </Button>
      {isItemMaxLevel && (
        <Text textAlign={"center"} mt={2}>
          Уже имеет максимальное уровень
        </Text>
      )}
    </Box>
  );
};

export default DetailedShop;
