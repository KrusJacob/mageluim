import { useHeroSkillStore } from "@/store/heroSkillStore";
import { HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { IconGold, IconSkillShard, IconArtifactShard } from "../ui/icons";

const BagResources = () => {
  const shardsSkill = useHeroSkillStore((state) => state.shardsSkill);
  const shardsArtifact = useHeroSkillStore((state) => state.shardsArtifact);
  const gold = useHeroSkillStore((state) => state.gold);
  return (
    <Stack>
      <HStack>
        <IconGold /> {gold}
      </HStack>
      <HStack>
        <IconSkillShard /> {shardsSkill}
      </HStack>
      <HStack>
        <IconArtifactShard /> {shardsArtifact}
      </HStack>
    </Stack>
  );
};

export default BagResources;
