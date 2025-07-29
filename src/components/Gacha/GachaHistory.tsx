import { Box, Table } from "@chakra-ui/react";
import { IoList } from "react-icons/io5";
import { DialogWrapper } from "../ui/dialog";
import type { ISkillHistory } from "@/types/skill";
import { getColorRarity } from "@/utils/getColorRarity";

const GachaHistory = ({ skills }: { skills: ISkillHistory[] }) => {
  return (
    <DialogWrapper
      title="История получения навыков"
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
              {skills.map((item, i) => (
                <Table.Row key={i}>
                  <Table.Cell color={getColorRarity(item.rarity)}>{item.name}</Table.Cell>
                  <Table.Cell textAlign="end">{item.dateOfRecipe.toLocaleString()}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      }
      trigger={<IoList size={24} cursor={"pointer"} />}
    />
  );
};

export default GachaHistory;
