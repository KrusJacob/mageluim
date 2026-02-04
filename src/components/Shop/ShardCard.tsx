import { Box, Card, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IconArtifactShard, IconSkillShard } from "../ui/icons";

const imgSkill = "/img/skill_shard.png";
const imgArtifact = "/img/artifact_shard.png";
const ShardCard = ({ type }: { type: "shardSkill" | "shardArtifact" }) => {
  return (
    <Card.Root maxW="sm" h={"100%"} overflow="hidden" cursor={"pointer"}>
      <Image src={type === "shardSkill" ? imgSkill : imgArtifact} alt="Крисстал призыва" />
      <Box position={"relative"} w={"100%"}>
        <Card.Title mt={-9} px={3} py={1} color={"gray.100"}>
          {type === "shardSkill" ? "Кристал знаний" : "Кристал материи"}
        </Card.Title>
      </Box>
      <Card.Body
        maxH={"280px"}
        minH={"120px"}
        overflowY={"auto"}
        scrollbarWidth={"none"}
        borderTop={`2px solid violet`}
        gap="1"
        bg={"gray.950"}
        p={3}
      >
        <Card.Description color={"gray.400"}>
          {type === "shardArtifact" ? <IconArtifactShard size={20} /> : <IconSkillShard size={20} />}
          <Text as={"span"} mt={2} display={"block"}>
            Исользуется для призыва {type === "shardSkill" ? "заклинания" : "артефакта"}
          </Text>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ShardCard;
