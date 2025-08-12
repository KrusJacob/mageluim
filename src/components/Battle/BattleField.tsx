import { Box, Center, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HeroCard from "../Hero/HeroCard";
import EnemyCard from "../Enemy/EnemyCard";
import BattleInfo from "./BattleInfo";
import type { IBattleFloor } from "@/types/battle";
import type { ISkillHero } from "@/types/skill";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import { tickAllStatuses } from "@/data/hero/utils";
import { toaster } from "../ui/toaster";

interface Props {
  battleFloor: IBattleFloor;
  selectedSkill: ISkillHero | null;
  isAttack: boolean;
  setSelectedSkill: (skill: ISkillHero | null) => void;
  setIsAttack: (isAttack: boolean) => void;
}

const BattleField = ({ battleFloor, selectedSkill, isAttack, setSelectedSkill, setIsAttack }: Props) => {
  const [battleActions, setBattleActions] = useState(2);
  const tickCooldowns = useHeroSkillStore((state) => state.tickCooldowns);
  const useSkill = useHeroSkillStore((state) => state.useSkill);
  const attackToHero = useHeroSkillStore((state) => state.attackToHero);
  const hero = useHeroSkillStore((state) => state.hero);
  const beforeMoveHero = useHeroSkillStore((state) => state.beforeMoveHero);

  const liveEnemies = battleFloor.enemies.filter((enemy) => enemy.stats.currentHp > 0);
  console.log(battleFloor.enemies);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (battleActions === 0) {
      attackToHero(liveEnemies);
      timer = setTimeout(() => {
        liveEnemies.forEach((enemy) => tickAllStatuses(enemy));
        setBattleActions(2);
        beforeMoveHero();
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [battleActions]);

  const onSelectTarget = (i: number) => {
    if (battleActions <= 0) return;
    if (battleFloor.enemies[i].stats.currentHp <= 0) return;
    if (!selectedSkill && !isAttack) return;
    if (selectedSkill) {
      // проверка на ману
      console.log(selectedSkill?.data.manaCost[selectedSkill.level], hero.stats.currentMana);
      if (selectedSkill?.data.manaCost[selectedSkill.level] > hero.stats.currentMana) {
        toaster.info({ title: "Недостаточно маны" });
        return;
      }
      useSkill(selectedSkill, battleFloor.enemies, i);
    }
    setSelectedSkill(null);
    if (isAttack) {
      // battleFloor.enemies[i].takeDamage({ element: "physical", value: hero.stats.atk });
      hero.useAttack(battleFloor.enemies[i]);
      setIsAttack(false);
    }
    tickCooldowns();
    setBattleActions(battleActions - 1);
  };

  return (
    <Center mb={10}>
      <HeroCard battleActions={battleActions} />
      <Center fontSize={32} w={"200px"}>
        VS
      </Center>
      <HStack position={"relative"} gap={8}>
        {battleFloor.enemies.map((enemy, i) => (
          <Box key={enemy.id} onClick={() => onSelectTarget(i)}>
            <EnemyCard index={i} isCardSelected={!!selectedSkill || !!isAttack} key={i} enemy={enemy} />
          </Box>
        ))}
        <BattleInfo battleFloor={battleFloor} />
      </HStack>
    </Center>
  );
};

export default BattleField;
