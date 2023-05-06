import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

interface colorTheme {
  brand: {
    black: string;
    primary: string;
  };
}

export const colors: colorTheme = {
  brand: {
    black: "#000000",
    primary: "#0900FF",
  },
};

export const theme = extendTheme(
  { config },
  {
    colors: colors,
  }
);
