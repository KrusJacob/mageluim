import type { IBattleFloor } from "@/types/battle";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useHeroSkillStore } from "@/store/heroSkillStore";
import type { ISkillHero } from "@/types/skill";
import HeroHpBar from "../Hero/HeroHpBar";
import HeroMpBar from "../Hero/HeroMpBar";
import BattleDeck from "./BattleDeck";
import HeroBtnAttack from "../Hero/HeroBtnAttack";
import BattleField from "./BattleField";
import BattleAlert from "./BattleAlert";

interface Props {
  battleFloor: IBattleFloor;
  setSelectedFloor: (floor: IBattleFloor | null) => void;
}
const BattleStage = ({ battleFloor, setSelectedFloor }: Props) => {
  const resetLevel = useHeroSkillStore((state) => state.resetLevel);
  const setEnemies = useHeroSkillStore((state) => state.setEnemies);
  const [selectedSkill, setSelectedSkill] = useState<ISkillHero | null>(null);
  const [isAttack, setIsAttack] = useState(false);

  // const enemiesIsDead = battleFloor.enemies.every((enemy) => enemy.stats.currentHp <= 0);

  // console.log("render");

  useEffect(() => {
    resetLevel();
    setEnemies(battleFloor.enemies);
  }, []);

  const toggleSelectedSkill = (skill: ISkillHero) => {
    if (selectedSkill?.id === skill.id) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  const onSelectSkill = (skill: ISkillHero) => {
    if (skill.currentCooldown > 0) return;
    toggleSelectedSkill(skill);
    setIsAttack(false);
  };

  const onSelectAttack = (isAttack: boolean) => {
    setSelectedSkill(null);
    setIsAttack(isAttack);
  };

  // Добавить механику смерти

  return (
    <>
      <Stack h={"780px"}>
        <BattleField
          battleFloor={battleFloor}
          isAttack={isAttack}
          setIsAttack={setIsAttack}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
        />
        <Box>
          <HStack alignItems={"end"}>
            <HeroHpBar />
            <HeroBtnAttack isAttack={isAttack} setIsAttack={onSelectAttack} />
            <HeroMpBar />
          </HStack>
          <BattleDeck selectedSkill={selectedSkill} onSelectSkill={onSelectSkill} />
        </Box>
      </Stack>
      <BattleAlert battleFloor={battleFloor} setSelectedFloor={setSelectedFloor} />
    </>
  );
};

export default BattleStage;
