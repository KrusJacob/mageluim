import { Box, HStack, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import DetailedSkillBag from "./DetailedSkillBag";
import type { ISkillHero } from "@/types/skill";
import BagDeckSkill from "./BagDeckSkill";
import { useHeroSkillStore } from "@/store/heroSkillStore";
import BagDeckArtifact from "./BagDeckArtifact";
import BagSkill from "./BagSkills";
import BagResources from "./BagResources";
import { GiBurningEye, GiScrollUnfurled } from "react-icons/gi";
import BagArtifacts from "./BagArtifacts";
import DetailedArtifactBag from "./DetailedArtifactBag";
import type { IArtifactHero } from "@/types/artifact";

const Bag = () => {
  const [selectedSkill, setSelectedSkill] = useState<ISkillHero | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<IArtifactHero | null>(null);
  const skills = useHeroSkillStore((state) => state.skills);
  const artifacts = useHeroSkillStore((state) => state.artifacts);

  const handleSelectSkill = (skill: ISkillHero) => {
    setSelectedArtifact(null);
    setSelectedSkill(skill);
  };

  const handleSelectArtifact = (artifact: IArtifactHero) => {
    setSelectedSkill(null);
    setSelectedArtifact(artifact);
  };

  return (
    <HStack w={"100%"} alignItems={"start"}>
      <Box flexDir={"column"} maxW={{ base: "8xl" }} w={"100%"}>
        <HStack gap={4}>
          <HStack gap={4}>
            <BagDeckSkill />
            <BagDeckArtifact />
          </HStack>
          <BagResources />
        </HStack>
        <Tabs.Root mt={1} lazyMount defaultValue="skills" size={"lg"} variant={"line"}>
          <Tabs.List>
            <Tabs.Trigger value="skills">
              <GiScrollUnfurled />
              Способности
            </Tabs.Trigger>
            <Tabs.Trigger value="artifacts">
              <GiBurningEye />
              Артефакты
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content _open={{ animationName: "fade-in", animationDuration: "300ms" }} value="skills">
            <BagSkill skills={skills} setSelectedSkill={handleSelectSkill} />
          </Tabs.Content>
          <Tabs.Content _open={{ animationName: "fade-in", animationDuration: "300ms" }} value="artifacts">
            <BagArtifacts artifacts={artifacts} setSelectedArtifact={handleSelectArtifact} />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
      <Box w={"450px"}>
        {selectedSkill && <DetailedSkillBag skill={selectedSkill} />}
        {selectedArtifact && <DetailedArtifactBag artifact={selectedArtifact} />}
      </Box>
    </HStack>
  );
};

export default Bag;
