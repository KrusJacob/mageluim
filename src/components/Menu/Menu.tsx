import { Box, Center, Container, For, Grid, GridItem, Loader, Text } from "@chakra-ui/react";
import React, { Suspense, lazy, useState } from "react";
import Gacha from "../Gacha/Gacha";
import Bag from "../Bag/Bag";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Header from "../Header/Header";
import Battle from "../Battle/Battle";
import Shop from "../Shop/Shop";

const LazyGacha = lazy(() => import("../Gacha/Gacha"));
const LazyBag = lazy(() => import("../Bag/Bag"));
const LazyBattle = lazy(() => import("../Battle/Battle"));
const LazyShop = lazy(() => import("../Shop/Shop"));

const Menu = () => {
  const [selectMode, setSelectMode] = useState<string | null>(null);
  return (
    <>
      <Header back={() => setSelectMode(null)} title={selectMode} />
      <Container px={2} py={4} maxW={{ base: "8xl" }} justifyContent="center" position={"static"}>
        <Center w={"100%"}>
          {!selectMode && (
            <Grid templateColumns="repeat(2, 1fr)" maxW={{ base: "6xl" }} w={"100%"} gap={8}>
              <For
                each={[
                  { name: "Призыв", img: "/img/bg_gacha.png" },
                  { name: "Инвентарь", img: "/img/bg_bag.png" },
                  { name: "Бой", img: "/img/bg_battle.png" },
                  { name: "Магазин", img: "/img/bg_shop.png" },
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
                    onClick={() => setSelectMode(item.name)}
                    borderRadius={8}
                    cursor={"pointer"}
                    _hover={{ scale: 1.025 }}
                    transition={"all 200ms ease-in-out"}
                  >
                    <Text fontSize="4xl" fontWeight="semibold">
                      {item.name}
                    </Text>
                  </Center>
                )}
              </For>
            </Grid>
          )}
          <Suspense fallback={<Loader mt={10} />}>
            {selectMode === "Призыв" && <LazyGacha />}
            {selectMode === "Инвентарь" && <LazyBag />}
            {selectMode === "Бой" && <LazyBattle />}
            {selectMode === "Магазин" && <LazyShop />}
          </Suspense>
        </Center>
      </Container>
    </>
  );
};

export default Menu;
