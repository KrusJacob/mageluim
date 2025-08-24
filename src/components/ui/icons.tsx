import React from "react";
import { BiCoinStack } from "react-icons/bi";
import { SiCrystal } from "react-icons/si";
import { GiCrystalize } from "react-icons/gi";

export const IconGold = () => {
  return <BiCoinStack title="Золото" color="gold" size={24} />;
};
export const IconSkillShard = ({ size = 24 }: { size?: number }) => {
  return <SiCrystal size={size} title="Кристалл призыва cпособностей" color="violet" />;
};
export const IconArtifactShard = ({ size = 24 }: { size?: number }) => {
  return <GiCrystalize size={size} title="Кристалл призыва артефактов" color="rosybrown" />;
};
