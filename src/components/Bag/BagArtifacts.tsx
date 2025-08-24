import { Box, Flex } from "@chakra-ui/react";
import ArtifactCard from "../Artifact/ArtifactCard";
import type { IArtifactHero } from "@/types/artifact";
import LevelItem from "../Skill/SkilLevel";

const BagArtifacts = ({
  artifacts,
  setSelectedArtifact,
}: {
  artifacts: IArtifactHero[];
  setSelectedArtifact: Function;
}) => {
  return (
    <Box overflow={"auto"} h={"600px"}>
      <Flex w={"100%"} justifyContent={"start"} alignItems={"start"} flexWrap={"wrap"} gap={1}>
        {artifacts?.map((artifact, i) => (
          <Box
            position={"relative"}
            key={i + artifact.name}
            onClick={() => setSelectedArtifact(artifact)}
            w={"260px"}
            h={"400px"}
          >
            <LevelItem level={artifact.level} />
            <ArtifactCard key={i + artifact.name} artifact={artifact} isSelected={false} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default BagArtifacts;
