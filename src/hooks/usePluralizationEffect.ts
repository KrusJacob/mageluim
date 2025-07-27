import React from "react";

const usePluralizationEffect = (duration: number) => {
  if (duration === 1) {
    return "ход";
  } else {
    return "хода";
  }
};

export default usePluralizationEffect;
