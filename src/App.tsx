import GachaSkill from "./components/Gacha/Skill/GachaSkill";
import Header from "./components/Header/Header";
import { Center, Container } from "@chakra-ui/react";
import Menu from "./components/Menu/Menu";
import { Toaster } from "./components/ui/toaster";
import { useHeroSkillStore } from "./store/heroSkillStore";
import { useEffect } from "react";
import { HERO, createHero } from "./data/hero/hero";

function App() {
  const setHero = useHeroSkillStore((state) => state.setHero);

  useEffect(() => {
    const hero = createHero();
    setHero(hero);
  }, []);

  return (
    <>
      <Menu />
      <Toaster />
    </>
  );
}

export default App;
