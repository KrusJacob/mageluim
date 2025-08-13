// const LazyGacha = lazy(() => import("../Gacha/GachaSkill"));
// const LazyBag = lazy(() => import("../Bag/Bag"));
// const LazyBattle = lazy(() => import("../Battle/Battle"));
// const LazyShop = lazy(() => import("../Shop/Shop"));

import { Suspense, useState } from "react";
import GachaArtifact from "./Artifact/GachaArtifact";
import GachaSkillItem from "./Skill/GachaSkillItem";
import { Center, For, Grid, Loader, Text } from "@chakra-ui/react";
import GachaSkill from "./Skill/GachaSkill";

type IGasha = "skill" | "artifact";

const Gacha = () => {
  const [selectGacha, setSelectGacha] = useState<string | null>(null);
  return (
    <Center w={"100%"}>
      {!selectGacha && (
        <Grid templateColumns="repeat(2, 1fr)" maxW={{ base: "6xl" }} w={"100%"} gap={8}>
          <For
            each={[
              { label: "Способности", img: "/img/bg_gacha.png", name: "skill" },
              { label: "Артефакты", img: "/img/bg_bag.png", name: "artifact" },
            ]}
          >
            {(item, index) => (
              <Center
                bgImage={item.img ? `url(${item.img})` : "none"}
                bgSize="cover"
                bgPos={"center"}
                key={index}
                h="300px"
                border={"1px solid gray"}
                onClick={() => setSelectGacha(item.name)}
                borderRadius={8}
                cursor={"pointer"}
                _hover={{ scale: 1.025 }}
                transition={"all 200ms ease-in-out"}
              >
                <Text fontSize="4xl" fontWeight="semibold">
                  {item.label}
                </Text>
              </Center>
            )}
          </For>
        </Grid>
      )}
      <Suspense fallback={<Loader mt={10} />}>
        {selectGacha === "skill" && <GachaSkill />}
        {selectGacha === "artifact" && <GachaArtifact />}
      </Suspense>
    </Center>
  );
};

export default Gacha;
