import type { IHero } from "@/types/hero";
import { Box, Button, Center, DataList, Image, Stack } from "@chakra-ui/react";
import React, { type ReactNode } from "react";
import HeroInfo from "../HeroInfo";

const ChoiceHeroItem = ({ hero, SelectBtn }: { hero: IHero; SelectBtn: ReactNode }) => {
  return (
    <Stack w={"180px"} gap={2}>
      {/* <HeroInfo hero={hero} /> */}
      <Center fontSize={"xl"}>{hero.name}</Center>
      <Image w={"180px"} src={hero.image} />
      <Stack gap={1}>
        <DataList.Root size={"lg"} gap={0.5} orientation="horizontal">
          <DataList.Item>
            <DataList.ItemLabel>Здоровье</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.maxHp}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Мана</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.maxMana}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Атака</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.atk}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Защита</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.def}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Шанс крит.удара</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.chanceCrit}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Урон крит.удара</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.critValue}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Точность</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.accuracy}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Сопротивление</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.resistance}</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      </Stack>

      <Box fontSize={"sm"}>{hero.description}</Box>
      {SelectBtn}
    </Stack>
  );
};

export default ChoiceHeroItem;
