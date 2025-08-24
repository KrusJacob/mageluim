import { Box, Table } from "@chakra-ui/react";
import { IoList } from "react-icons/io5";
import { DialogWrapper } from "../ui/dialog";
import type { ISkillHistory } from "@/types/skill";
import { getColorRarity } from "@/utils/getColorRarity";
import type { IArtifactHistory } from "@/types/artifact";

const GachaHistory = ({ items }: { items: ISkillHistory[] | IArtifactHistory[] }) => {
  return (
    <DialogWrapper
      title="История получения"
      body={
        <Box maxH="500px" overflowY="auto">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Имя</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Дата</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item, i) => (
                <Table.Row key={i}>
                  <Table.Cell color={getColorRarity(item.rarity)}>{item.name}</Table.Cell>
                  <Table.Cell textAlign="end">{item.dateOfRecipe.toLocaleString()}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      }
      trigger={<IoList size={28} cursor={"pointer"} />}
    />
  );
};

export default GachaHistory;
