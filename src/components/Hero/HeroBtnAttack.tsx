import { Center } from "@chakra-ui/react";
import React from "react";

interface Props {
  isAttack: boolean;
  setIsAttack: (isAttack: boolean) => void;
}

const HeroBtnAttack = ({ isAttack, setIsAttack }: Props) => {
  return (
    <Center
      cursor={"pointer"}
      _hover={{ boxShadow: "0px 1px 6px 6px #bcd6ff" }}
      boxShadow={isAttack ? "0px 1px 6px 6px #bcd6ff" : "none"}
      transition={"all 100ms ease-in-out"}
      w={"190px"}
      p={4}
      fontSize={20}
      borderRadius={"10px 10px 0 0"}
      background="linear-gradient(to bottom right, #f54444, #c72b2b, #751919)"
      m={"auto"}
      onClick={() => setIsAttack(!isAttack)}
    >
      {isAttack ? "Отмена" : "Атака"}
    </Center>
  );
};

export default HeroBtnAttack;
