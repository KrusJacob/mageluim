import { Box, Center, HStack } from "@chakra-ui/react";
import EnemyInfo from "../Enemy/EnemyInfo";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { DialogWrapper } from "../ui/dialog";
import type { IBattleFloor } from "@/types/battle";
import HeroInfo from "../Hero/HeroInfo";
import { useHeroSkillStore } from "@/store/heroSkillStore";

const BattleInfo = ({ battleFloor }: { battleFloor: IBattleFloor }) => {
  const hero = useHeroSkillStore((state) => state.hero);
  return (
    <Box position={"absolute"} top={"2px"} right={"-10"}>
      <DialogWrapper
        title=""
        size={"xl"}
        body={
          <Center>
            <HStack mt={2} gap={4} alignItems={"flex-start"}>
              <HeroInfo hero={hero} />
              <Box w={"40px"}></Box>
              {battleFloor.enemies.map((enemy, i) => (
                <EnemyInfo key={i} enemy={enemy} />
              ))}
            </HStack>
          </Center>
        }
        trigger={<IoIosInformationCircleOutline cursor={"pointer"} size={32} />}
      />
    </Box>
  );
};

export default BattleInfo;
