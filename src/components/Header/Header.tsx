import { Box, Container } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";
import { ALL_SKILL_LIST } from "@/data/skills/skills_all";

const Header = () => {
  console.log(ALL_SKILL_LIST);
  return (
    <Box as="header" bg={"grayColor"} _dark={{ bg: "grayColorDark" }}>
      <Container p={4} bg={"transparent"} maxW={{ base: "8xl" }}>
        <ColorModeButton />
      </Container>
    </Box>
  );
};

export default Header;
