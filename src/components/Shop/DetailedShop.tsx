import type { ISkill } from "@/types/skill";
import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../Skill/SkillCard";
import ShardCard from "./ShardCard";
import { SHOP_PRICE } from "@/constant/shop";
import { IconGold } from "../ui/icons";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { toaster } from "../ui/toaster";

interface Props {
  skill: ISkill | null;
}
const DetailedShop = ({ skill }: Props) => {
  const heroGold = useHeroSkillStore((state) => state.gold);
  const addNewSkill = useHeroSkillStore((state) => state.addNewSkill);
  const addGold = useHeroSkillStore((state) => state.addGold);
  const addShards = useHeroSkillStore((state) => state.addShards);
  const price = skill ? SHOP_PRICE.skills[skill.rarity] : SHOP_PRICE.shard;

  const onBye = () => {
    if (skill) {
      addNewSkill(skill);
    } else {
      addShards(1);
    }
    addGold(-price);
    toaster.create({
      title: "Поздравляем",
      description: `Вы купили карту заклинания: ${skill ? skill.name : "Кристалл призыва"}`,
    });
  };

  return (
    <Box w={"450px"}>
      {skill && (
        <Stack gap={2} position={"relative"}>
          <SkillCard skill={skill} isSelected={true} />
        </Stack>
      )}
      {!skill && (
        <Stack gap={2} position={"relative"}>
          <ShardCard />
        </Stack>
      )}
      <Button onClick={onBye} disabled={heroGold < price} w={"100%"}>
        {price} <IconGold /> {heroGold >= price ? `Купить` : "Недостаточно золота"}
      </Button>
    </Box>
  );
};

export default DetailedShop;
