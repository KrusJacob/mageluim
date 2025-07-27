import GachaSkill from "./components/Gacha/GachaSkill";
import Header from "./components/Header/Header";
import { Center, Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Header />
      <Container p={4} maxW={{ base: "8xl" }} justifyContent="center">
        <Center>
          <GachaSkill />
        </Center>
      </Container>
    </>
  );
}

export default App;
