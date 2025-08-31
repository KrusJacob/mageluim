import { useHeroSkillStore } from "@/store/heroSkillStore";
import type { IHero } from "@/types/hero";
import { Center, Box } from "@chakra-ui/react";
import { useState } from "react";
import ChoiceHeroList from "./ChoiceHeroList";

function ChoiceHeroDialog() {
  const [isHeroSelected, setIsHeroSelected] = useState(false);
  const setHero = useHeroSkillStore((state) => state.setHero);

  const onSetHero = (hero: IHero) => {
    setHero(hero);
    setIsHeroSelected(true);
  };

  if (isHeroSelected) return null;

  return (
    <Center bg={"#000000a6"} zIndex={2000} position={"absolute"} inset={0}>
      <Box bg={"#000000cc"} p={6}>
        <Center fontSize={24}>Выберите героя</Center>
        <ChoiceHeroList onSetHero={onSetHero} />
      </Box>
    </Center>
  );
}

export default ChoiceHeroDialog;
