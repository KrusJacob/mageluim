import { Tag } from "@chakra-ui/react";
import React from "react";

const ShopPrice = ({ price }: { price: number }) => {
  return (
    <Tag.Root size={"xl"} position={"absolute"} top={1} right={1}>
      <Tag.Label color={"gold"} fontWeight={"bold"}>
        {price}
      </Tag.Label>
    </Tag.Root>
  );
};

export default ShopPrice;
