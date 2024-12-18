import { Flex, Link as A, Box, useColorModeValue, Image } from "@chakra-ui/react";

/**
 * Footer component that displays the EasyDrive logo and footer text.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 * 
 * @returns {JSX.Element} The rendered footer component.
 * 
 * @remarks
 * This component uses Chakra UI for styling and layout. It includes the EasyDrive logo,
 * the current year, and a link to the EasyDrive GitHub repository.
 * 
 * @see {@link https://chakra-ui.com/} for more information about Chakra UI.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box bg={useColorModeValue("custom.500", "custom.600")} px={2} py={1}>
      <Box maxW="260px" mx="auto" p={2}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">

          {/* Logo */}
          <Image
            src="/images/logo3.png"
            alt="EasyDrive Logo"
            boxSize="120px"
            objectFit="contain"
          />
        </Flex>

        {/* Footer Text */}
        <Box textAlign="center" fontSize="sm" color="black">
          © {currentYear} EasyDrive. All Rights Reserved.
          <br />
          <A href="https://github.com/yourgithub/EasyDrive" isExternal color="#0d5f07">
            Made with ❤️ by the EasyDrive Team.
          </A>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
