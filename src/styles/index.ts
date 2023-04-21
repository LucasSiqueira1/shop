import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#C4C4CC",
      gray100: "#E1E1E6",

      green500: "#00875F",
      grenn300: "#00B37E",
    },
  },
});
