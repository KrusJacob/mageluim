import type { IHeroEngine } from "@/types/hero";
import { Box, Center, DataList, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const HeroInfo = ({ hero }: { hero: IHeroEngine }) => {
  return (
    <Box>
      <Center>{hero.name}</Center>
      <Image w={"160px"} src={hero.image} />
      <Stack gap={1}>
        <Center>
          HP: {hero.stats.currentHp}/{hero.stats.maxHp}
        </Center>
        <DataList.Root gap={0.5} orientation="horizontal">
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
            <DataList.ItemLabel>Сопротивление</DataList.ItemLabel>
            <DataList.ItemValue>{hero.stats.resistance}</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      </Stack>
      <Box mt={2}>
        <Text>Стойкость: </Text>
        <DataList.Root gap={0.5} orientation="horizontal">
          {Object.entries(hero.stats.durability).map(([key, item]) => (
            <DataList.Item key={key}>
              <DataList.ItemLabel>{key}</DataList.ItemLabel>
              <DataList.ItemValue>{item}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Box>
    </Box>
  );
};

export default HeroInfo;
