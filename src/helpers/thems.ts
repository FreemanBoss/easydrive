import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };
  
  const theme = extendTheme({
    config,
    colors: {
      custom: {
        500: "#970747", // Custom primary color
        600: "#7A0535", // Optional darker shade for hover
      },
    },
  });

export default theme;