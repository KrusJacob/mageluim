import { Box, Container, HStack, Span, Stack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import GuideInfo from "../Guide/GuideInfo";

const Header = ({ back, title }: { back: () => void; title: string | null }) => {
  return (
    <Box as="header" bg={"whiteAlpha.300"}>
      <Container p={2} bg={"transparent"} maxW={{ base: "8xl" }}>
        {/* <ColorModeButton /> */}
        <HStack>
          <BsArrowLeftSquareFill size={40} cursor={"pointer"} onClick={back} />
          <HStack m={"auto"} fontSize={30}>
            <Text>Mageluim</Text>
            <Text>{title && <span>| {title}</span>}</Text>
            <GuideInfo />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
