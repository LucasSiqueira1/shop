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
      green300: "#00B37E",
      container: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
    },

    fontSizes: {
      font18: "18px",
      font20: "20px",
      font24: "24px",
      font32: "32px",
    },
  },
});
