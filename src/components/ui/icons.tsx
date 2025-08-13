import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { SiCrystal } from "react-icons/si";

export const IconGold = () => {
  return <BiCoinStack title="Золото" color="gold" size={24} />;
};
export const IconShard = ({ size = 24 }: { size?: number }) => {
  return <SiCrystal size={size} title="Кристалл призыва" color="violet" />;
};
