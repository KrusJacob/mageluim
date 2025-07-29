import { Box, Dialog, Table } from "@chakra-ui/react";
import React from "react";
import { DialogWrapper } from "../ui/dialog";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GACHA_CHANCE_SKILL } from "@/constant";
import { getColorRarity } from "@/utils/getColorRarity";
import type { Rarity } from "@/types/skill";

const GachaInfo = () => {
  return (
    <DialogWrapper
      title="Шанс получения навыков"
      body={
        <Box>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Редкость</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Шанс</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {(Object.keys(GACHA_CHANCE_SKILL) as Rarity[]).map((rarity, i) => (
                <Table.Row key={i}>
                  <Table.Cell fontWeight={"bold"} color={getColorRarity(rarity)}>
                    {rarity}
                  </Table.Cell>
                  <Table.Cell textAlign="end">{GACHA_CHANCE_SKILL[rarity]}%</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      }
      trigger={<IoIosInformationCircleOutline size={24} cursor={"pointer"} />}
    />
  );
};

export default GachaInfo;
