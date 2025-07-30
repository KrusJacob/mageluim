import { Box, Container } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Header = ({ back }: { back: () => void }) => {
  return (
    <Box as="header" bg={"grayColor"} _dark={{ bg: "grayColorDark" }}>
      <Container p={2} bg={"transparent"} maxW={{ base: "8xl" }}>
        {/* <ColorModeButton /> */}
        <BsArrowLeftSquareFill size={40} cursor={"pointer"} onClick={back} />
      </Container>
    </Box>
  );
};

export default Header;
