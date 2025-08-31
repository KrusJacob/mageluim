import { createHero_1, createHero_2, createHero_3 } from "@/data/hero/hero";
import { Button, Center } from "@chakra-ui/react";
import React from "react";
import ChoiceHeroItem from "./ChoiceHeroItem";
import type { IHero } from "@/types/hero";

const ALL_HEROES = [createHero_1(), createHero_2(), createHero_3()];
const ChoiceHeroList = ({ onSetHero }: { onSetHero: (hero: IHero) => void }) => {
  return (
    <Center gap={8} mt={4}>
      {ALL_HEROES.map((hero, index) => (
        <ChoiceHeroItem
          key={index}
          hero={hero}
          SelectBtn={
            <Button mt={4} w={"100%"} onClick={() => onSetHero(hero)}>
              Выбрать
            </Button>
          }
        />
      ))}
    </Center>
  );
};

export default ChoiceHeroList;
