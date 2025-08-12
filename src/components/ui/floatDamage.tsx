import type { ITakenDamage } from "@/types/hero";
import { Text } from "@chakra-ui/react";
import React from "react";

const FloatDamage = ({ takenLastDamages }: { takenLastDamages: ITakenDamage[] }) => {
  return (
    <>
      {takenLastDamages.map(({ value, key, isHeal }, i) => (
        <Text
          fontWeight="bold"
          opacity={0}
          key={key + i}
          data-state="open"
          animation="floatDamage"
          position="absolute"
          top={`calc(50% + ${i * 20}px)`} // вертикальное смещение
          left="50%"
          transform="translateX(-50%)"
          fontSize={24}
          color={isHeal ? "green.500" : "red.500"}
          style={{
            animationName: "floatDamage",
            animationDuration: "1250ms",
            animationFillMode: "forwards",
            animationDelay: `${i * 150}ms`,
          }}
        >
          {isHeal ? "+" : "-"} {value}
        </Text>
      ))}
    </>
  );
};

export default FloatDamage;
