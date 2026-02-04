import { Box, HStack, Heading, Highlight, Portal, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IconArtifactShard, IconGold, IconSkillShard } from "../ui/icons";

const GuideInfo = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Box ml={2}>
      <FaInfoCircle onClick={() => setIsShow(!isShow)} cursor={"pointer"} />
      {isShow && (
        <Portal>
          <Box position={"absolute"} inset={0} zIndex={100} bg={"blackAlpha.600"} onClick={() => setIsShow(false)}>
            <Stack
              bg={"blue.300"}
              border={"2px solid blue"}
              h={"780px"}
              w={"740px"}
              overflowY={"auto"}
              scrollbarWidth={"thin"}
              m={"auto"}
              mt={16}
              p={4}
              color={"black"}
              onClick={(e) => e.stopPropagation()}
            >
              <Heading textAlign={"center"}>Руководство по игре "Mageluim"</Heading>
              <Text>
                <Highlight query={"Mageluim"} styles={{ fontWeight: "bold" }}>
                  Mageluim - карточная, коллекционная игра, в которой вас предстоит собрать колоду боевых
                  заклинаний, усилить героя волшебными артефактами и сразиться с различными врагами.
                </Highlight>
              </Text>
              <Heading textAlign={"center"}>Начало игры</Heading>
              <Text>
                Перед началом игры вы выбираете героя. Каждый герой обладают различными характеристиками и
                свойствами.
              </Text>
              <Heading textAlign={"center"}>Призыв</Heading>
              <Text>
                <Highlight
                  query={["Призыв заклинаний", "3 кристалла призыва заклинаний"]}
                  styles={{ fontWeight: "bold" }}
                >
                  На старте у вас будут 3 кристалла призыва заклинаний. Зайдите в Призыв заклинаний и используйте 3
                  кристалла призыва способностей, чтобы получить свои первые заклинания.
                </Highlight>
              </Text>
              <HStack>
                <IconSkillShard />- Кристалл призыва заклинаний
              </HStack>
              <HStack>
                <IconArtifactShard />- Кристалл призыва артефактов
              </HStack>
              <Heading textAlign={"center"}>Инвентарь</Heading>
              <Text>
                <Highlight query={["Бой", "Инвентарь", "Инвентаре"]} styles={{ fontWeight: "bold" }}>
                  Перед тем как отправиться в Бой, необходимо поставить полученные заклинания в боевую колоду.
                  Перейдите в Инвентарь, выберите заклинание и нажмите кнопку "Взять с собой". Также в Инвентаре
                  можно продать не нужные заклинания или улучшить уровень заклинания, для этого нужна копия этого
                  заклинания. С артефактами все аналогично.
                </Highlight>
              </Text>
              <Heading textAlign={"center"}>Бой</Heading>
              <Text>
                <Highlight query={["Бою", "золото", "кристаллы призыва"]} styles={{ fontWeight: "bold" }}>
                  В Бою вам предстоит сразиться с различными врагами, сложность которых выше с каждым этапом. В
                  награду вы будете получать золото и кристаллы призыва. Некоторые враги обладают уникальным
                  способностями
                </Highlight>
              </Text>
              <HStack>
                <IconGold />- Золото
              </HStack>
              <Heading textAlign={"center"}>Магазин</Heading>
              <Text>
                <Highlight
                  query={["Магазине", "золото", "заклинания и артефакты", "кристаллы призыва"]}
                  styles={{ fontWeight: "bold" }}
                >
                  В Магазине за золото можно купить различные заклинания и артефакты, а так же кристаллы призыва.
                  Ассортимент магазин будет переодически обновляться.
                </Highlight>
              </Text>
            </Stack>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default GuideInfo;
