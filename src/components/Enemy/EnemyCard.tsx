// import { useEnemyStatStore } from "@/store/enemyStatStore";
import type { IEnemy } from "@/types/enemy";
import { calcWidthHPBar } from "@/utils/getWidthBar";
import { Box, Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { TfiTarget } from "react-icons/tfi";
import FloatDamage from "../ui/floatDamage";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import StatusPanel from "../ui/statusPanel";
import SkillLevel from "../Skill/SkilLevel";
import EnemyLevel from "./EnemyLevel";

const EnemyCard = ({
  enemy,
  isCardSelected,
  index,
}: {
  enemy: IEnemy;
  isCardSelected: boolean;
  index: number;
}) => {
  const enemies = useHeroSkillStore((state) => state.enemies);
  const idAttackerEnemy = useHeroSkillStore((state) => state.idAttackerEnemy);
  const currentHp = enemies[index]?.stats.currentHp!;
  const maxHp = enemies[index]?.stats.maxHp!;
  const takenLastDamage = enemies[index]?.takenLastDamage;

  const isDead = currentHp === 0;

  return (
    <Stack>
      <Text fontSize={20} fontWeight={"bold"}>
        {enemy.label}
      </Text>

      <Box
        data-state={enemy.id === idAttackerEnemy ? "open" : "closed"}
        _open={{
          animationName: "enemy-attack",
          animationDuration: `500ms`,
          animationFillMode: "forwards",
        }}
        opacity={isDead ? 0.5 : 1}
        position={"relative"}
        w={"200px"}
        cursor={"pointer"}
      >
        <EnemyLevel level={enemy.level} />
        <StatusPanel target={enemy} />
        {takenLastDamage && <FloatDamage takenLastDamages={takenLastDamage} />}
        <Image src={enemy.image} />
        {isCardSelected && !isDead && (
          <Center animation={"pulse"} position={"absolute"} top={"45%"} w={"100%"}>
            <TfiTarget size={50} color="red" />
          </Center>
        )}
      </Box>
      <Box
        position={"relative"}
        borderRadius={8}
        h={"32px"}
        border={"1px solid gray"}
        bg={"gray.800"}
        w={"100%"}
        p={1}
      >
        <Box
          h={"100%"}
          w={calcWidthHPBar(currentHp, maxHp)}
          transition={"all 200ms ease-in-out"}
          background="linear-gradient(to bottom right, #5dc09a, #46ad68, #115c21)"
        >
          <Text position={"absolute"} top={"-5%"} left={"50%"} transform={"translateX(-50%)"} fontSize={20}>
            {currentHp}/{maxHp}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default EnemyCard;
