import { Box, Card, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IconShard } from "../ui/icons";

const img =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ddc3689c-92d0-4237-9beb-a628b8aacb3d/dfypsbe-d687327d-1704-411a-9d57-c5dc9ad48352.png/v1/fill/w_768,h_768,q_80,strp/1685569032_magic_crystal_cell__shaded_01_by_krogher22_dfypsbe-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvZGRjMzY4OWMtOTJkMC00MjM3LTliZWItYTYyOGI4YWFjYjNkXC9kZnlwc2JlLWQ2ODczMjdkLTE3MDQtNDExYS05ZDU3LWM1ZGM5YWQ0ODM1Mi5wbmciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fanp6KPzGHvgC-qbFIYCg-R1TXBhJMH0_T_rhfGAxlA";
const ShardCard = () => {
  return (
    <Card.Root maxW="sm" h={"100%"} overflow="hidden" cursor={"pointer"}>
      <Image src={img} alt="Крисстал призыва" />
      <Box position={"relative"} w={"100%"}>
        <Card.Title mt={-9} px={3} py={1} color={"gray.100"}>
          Крисстал призыва
        </Card.Title>
      </Box>
      <Card.Body
        maxH={"280px"}
        minH={"120px"}
        overflowY={"auto"}
        scrollbarWidth={"none"}
        borderTop={`2px solid violet`}
        gap="1"
        bg={"gray.950"}
        p={3}
      >
        <Card.Description color={"gray.400"}>
          <IconShard size={20} />
          <Text as={"span"} mt={2} display={"block"}>
            Исользуется для призыва карт способностей
          </Text>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ShardCard;
