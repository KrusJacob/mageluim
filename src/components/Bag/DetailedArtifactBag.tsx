import { Button, Stack, Text } from "@chakra-ui/react";

import LevelItem from "../Skill/SkilLevel";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import ArtifactCard from "../Artifact/ArtifactCard";
import type { IArtifactHero } from "@/types/artifact";

interface Props {
  artifact: IArtifactHero;
}
const DetailedArtifactBag = ({ artifact }: Props) => {
  const addArtifactToDeck = useHeroSkillStore((state) => state.addArtifactToDeck);
  const battleDeckArtifacts = useHeroSkillStore((state) => state.battleDeckArtifacts);
  const upgradeArtifact = useHeroSkillStore((state) => state.upgradeArtifact);

  const isBattleDeck = battleDeckArtifacts.some((s) => s.id === artifact?.id);

  return (
    <Stack gap={2} position={"relative"}>
      <LevelItem level={artifact.level} />
      <ArtifactCard artifact={artifact} isSelected={true} />
      <Text lineHeight={1} fontSize={40} fontWeight={"bold"} right={4} top={4} position={"absolute"}>
        x{artifact.copies}
      </Text>
      <Button onClick={() => upgradeArtifact(artifact)} disabled={artifact.copies < 2} w={"100%"}>
        {artifact.copies < 2 ? "Недостаточно копий" : "Улучшить"}
      </Button>
      <Button
        disabled={battleDeckArtifacts.length >= 5 || isBattleDeck}
        onClick={() => addArtifactToDeck(artifact)}
        w={"100%"}
      >
        {!isBattleDeck ? "Взять с собой" : "Уже исользуется"}
      </Button>
    </Stack>
  );
};

export default DetailedArtifactBag;
