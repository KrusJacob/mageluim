import { Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
      <Heading textAlign={"center"} fontSize={16} p={2}>
        © KrusJacob
      </Heading>
    </footer>
  );
};

export default Footer;
