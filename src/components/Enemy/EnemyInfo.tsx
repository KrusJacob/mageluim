import type { IEnemy } from "@/types/enemy";
import { Box, Center, DataList, Image, Stack, Text } from "@chakra-ui/react";

const EnemyInfo = ({ enemy }: { enemy: IEnemy }) => {
  return (
    <Box w={"160px"}>
      <Center>{enemy.label}</Center>
      <Image w={"160px"} src={enemy.image} />
      <Stack gap={1}>
        <Center>
          HP: {enemy.stats.currentHp}/{enemy.stats.maxHp}
        </Center>
        <DataList.Root gap={0.5} orientation="horizontal">
          <DataList.Item>
            <DataList.ItemLabel>Атака</DataList.ItemLabel>
            <DataList.ItemValue>{enemy.stats.atk}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Защита</DataList.ItemLabel>
            <DataList.ItemValue>{enemy.stats.def}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Шанс крит.удара</DataList.ItemLabel>
            <DataList.ItemValue>{enemy.stats.chanceCrit}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Урон крит.удара</DataList.ItemLabel>
            <DataList.ItemValue>{enemy.stats.critValue}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Точность</DataList.ItemLabel>
            <DataList.ItemValue>{enemy.stats.accuracy}</DataList.ItemValue>
          </DataList.Item>
          <DataList.Item>
            <DataList.ItemLabel>Сопротивление</DataList.ItemLabel>
            <DataList.ItemValue>{enemy.stats.resistance}</DataList.ItemValue>
          </DataList.Item>
        </DataList.Root>
      </Stack>
      <Box mt={2}>
        <Text>Стойкость: </Text>
        <DataList.Root gap={0.5} orientation="horizontal">
          {Object.entries(enemy.stats.durability).map(([key, item]) => (
            <DataList.Item key={key}>
              <DataList.ItemLabel>{key}</DataList.ItemLabel>
              <DataList.ItemValue>{item}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Box>
      <Box mt={2}>
        <Text>Способности: </Text>
        <DataList.Root gap={0.5} orientation="horizontal">
          <DataList.Item>
            <DataList.ItemLabel>{enemy.descriptionSkill}</DataList.ItemLabel>
          </DataList.Item>
        </DataList.Root>
      </Box>
    </Box>
  );
};

export default EnemyInfo;
