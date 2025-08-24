import { Suspense, lazy, useState } from "react";
import { Center, For, Grid, Loader, Text } from "@chakra-ui/react";

// type IGasha = "skill" | "artifact";

const LazyGachaSkill = lazy(() => import("./Skill/GachaSkill"));
const LazyGachaArtifact = lazy(() => import("./Artifact/GachaArtifact"));
const Gacha = () => {
  const [selectGacha, setSelectGacha] = useState<string | null>(null);
  return (
    <Center w={"100%"}>
      {!selectGacha && (
        <Grid templateColumns="repeat(2, 1fr)" maxW={{ base: "6xl" }} w={"100%"} gap={8}>
          <For
            each={[
              { label: "Способности", img: "/img/bg_gacha.png", name: "skill" },
              { label: "Артефакты", img: "/img/bg_gacha_artifact.png", name: "artifact" },
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
        {selectGacha === "skill" && <LazyGachaSkill />}
        {selectGacha === "artifact" && <LazyGachaArtifact />}
      </Suspense>
    </Center>
  );
};

export default Gacha;
