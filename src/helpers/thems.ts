import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    custom: {
      500: "#B9C2C8", // Custom primary color
      600: "#394853", // Optional darker shade for hover
    },
  },
});

export default theme;