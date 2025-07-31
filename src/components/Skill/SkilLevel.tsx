import { Stack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const SkillLevel = ({ level }: { level: number }) => {
  return (
    <Stack position={"absolute"} zIndex={100} left={4} top={4}>
      {Array.from({ length: level }, (_, index) => (
        <FaStar size={24} key={index} />
      ))}
    </Stack>
  );
};

export default SkillLevel;
