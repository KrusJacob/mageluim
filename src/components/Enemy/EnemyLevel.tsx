import { HStack, Stack } from "@chakra-ui/react";
import { IoSkull } from "react-icons/io5";
import { GiDaemonSkull } from "react-icons/gi";
import { GiCrownedSkull } from "react-icons/gi";

const EnemyLevel = ({ level }: { level: number }) => {
  return (
    <HStack position={"absolute"} zIndex={100} left={"50%"} transform={"translateX(-50%)"} bottom={2}>
      {level === 2 && <IoSkull size={20} title="Средний" color="green" />}
      {level === 3 && <GiDaemonSkull size={20} title="Высший" color="blue" />}
      {level === 4 && <GiCrownedSkull size={20} title="Королевский" color="red" />}
    </HStack>
  );
};

export default EnemyLevel;
