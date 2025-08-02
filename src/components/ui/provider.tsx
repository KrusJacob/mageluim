"use client";

import { ChakraProvider, createSystem, defaultConfig, defaultSystem, defineConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    tokens: {
      colors: {
        primary: { value: "{colors.green.600}" },
        primaryDark: { value: "{colors.green.400}" },
        grayColor: { value: "{colors.gray.300}" },
        grayColorDark: { value: "{colors.gray.500}" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} forcedTheme="dark" />
    </ChakraProvider>
  );
}
