import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Header = ({ back, title }: { back: () => void; title: string | null }) => {
  return (
    <Box as="header" bg={"grayColor"} _dark={{ bg: "grayColorDark" }}>
      <Container p={2} bg={"transparent"} maxW={{ base: "8xl" }}>
        {/* <ColorModeButton /> */}
        <HStack>
          <BsArrowLeftSquareFill size={40} cursor={"pointer"} onClick={back} />
          <Text fontSize={30} m={"auto"}>
            {title}
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
