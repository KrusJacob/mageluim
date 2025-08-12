import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { PiClockClockwiseFill } from "react-icons/pi";

const SkillCooldown = ({ cooldown }: { cooldown: number }) => {
  return (
    <Center
      title={`Перезарядка: ${cooldown} хода`}
      borderRadius={"100%"}
      bg={"red.800"}
      boxShadow="1px 1px 5px 1px red"
      position={"absolute"}
      zIndex={100}
      bottom={50}
      right={2}
      w={"30px"}
      h={"30px"}
    >
      <PiClockClockwiseFill /> {cooldown}
    </Center>
  );
};

export default SkillCooldown;
