import { extendTheme, theme } from "@chakra-ui/react";

const fonts = {
  heading: `'Barlow', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const tokenSwapComradeTheme = extendTheme({
  colors: {
    ...theme.colors,
    primary: "#201D29",
    secondary: "",
    highlight: "",
    warning: "#e8a849",
    danger: "red",
    dark: "#000000",
    light: "#FFFFFF",
    grey: "#F6F6F6",
    darkGrey: "#737373",
    placeholderColor: "#999999",
    customScheme: {
      100: "#000000",
      200: "#801E1E",
    },
  },
  breakpoints,
  fonts,
  // breakpoints,
});

export default tokenSwapComradeTheme;
