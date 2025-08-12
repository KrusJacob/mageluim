import { Center } from "@chakra-ui/react";
import React from "react";

const SkillManaCost = ({ value }: { value: number }) => {
  return (
    <Center
      background="linear-gradient(to bottom right, #7ec8e6, #2d66bb, #204097)"
      position={"absolute"}
      bottom={2}
      right={2}
      w={"30px"}
      h={"30px"}
      borderRadius={"100%"}
      zIndex={100}
      boxShadow="1px 1px 5px 1px skyblue"
      fontWeight={"bold"}
      fontSize={18}
      title={`Стоимость маны: ${value}`}
    >
      {value}
    </Center>
  );
};

export default SkillManaCost;
