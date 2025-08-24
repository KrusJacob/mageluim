import { ALL_ARTIFACT_LIST } from "@/data/artifacts/artifacts_all";
import type { IArtifact, IArtifactHistory } from "@/types/artifact";
import { getRandomGacha } from "@/utils/getRandomSkills";
import { Button, Center, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import GachaHistory from "../GachaHistory";
import GachaInfo from "../GachaInfo";
import { IconArtifactShard } from "@/components/ui/icons";
import GachaList from "../GachaList";
import ArtifactCard from "@/components/Artifact/ArtifactCard";
import { toaster } from "@/components/ui/toaster";
import { useHeroSkillStore } from "@/store/heroSkillStore";

const GachaArtifact = () => {
  const [gachaHistory, setGachaHistory] = useState<IArtifactHistory[]>([]);
  const shardsArtifact = useHeroSkillStore((state) => state.shardsArtifact);
  const useShardArtifact = useHeroSkillStore((state) => state.useShardArtifact);
  const addNewArtifact = useHeroSkillStore((state) => state.addNewArtifact);
  const [randomedArtifacts, setRandomedArtifacts] = useState<IArtifact[] | null>(null);
  const [selectedArtifacts, setSelectedArtifacts] = useState<IArtifact | null>(null);

  const handleRoll = () => {
    useShardArtifact();
    setRandomedArtifacts(getRandomGacha<IArtifact>(ALL_ARTIFACT_LIST));
    setSelectedArtifacts(null);
  };

  const handleSelect = () => {
    if (selectedArtifacts) {
      addGachaHistory(selectedArtifacts);
      toaster.create({ title: "Поздравляем", description: `Вы получили артефакт: ${selectedArtifacts.name}` });
      addNewArtifact(selectedArtifacts);
    }
    setRandomedArtifacts(null);
    setSelectedArtifacts(null);
  };

  const addGachaHistory = (newArtifact: IArtifact) => {
    setGachaHistory((prev) => [
      ...prev,
      { name: newArtifact.name, rarity: newArtifact.rarity, dateOfRecipe: new Date() },
    ]);
  };

  return (
    <Center flexDir={"column"} maxW={{ base: "6xl" }} w={"100%"}>
      <HStack mb={4} w={"100%"} gap={4}>
        <GachaHistory items={gachaHistory} />
        <GachaInfo />
        <HStack ml={"auto"}>
          {shardsArtifact}
          <IconArtifactShard />
        </HStack>
      </HStack>
      <HStack minH={"400px"}>
        <GachaList
          items={randomedArtifacts}
          selected={selectedArtifacts}
          select={(artifact: IArtifact) => setSelectedArtifacts(artifact)}
          Card={({ item, isSelected }) => <ArtifactCard artifact={item} isSelected={isSelected} />}
        />
        {!randomedArtifacts && (
          <Center w={"100%"} flexDir={"column"} gap={2}>
            <Text>У вас имеются {shardsArtifact} кристаллов призыва артефакта</Text>
            <Button disabled={shardsArtifact === 0} onClick={handleRoll}>
              Использовать
            </Button>
          </Center>
        )}
      </HStack>

      {randomedArtifacts && (
        <Button mt={4} disabled={!selectedArtifacts} onClick={handleSelect}>
          Выбрать
        </Button>
      )}
    </Center>
  );
};

export default GachaArtifact;
