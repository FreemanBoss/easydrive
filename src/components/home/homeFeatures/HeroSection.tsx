import { Box, Heading, Text, Button } from "@chakra-ui/react";
import bannerImage from "../../../assets/images/banner/banner4.jpg";

const HeroSection = () => {
  return (
    <Box
      height="80vh"
      bgImage={`url(${bannerImage})`}
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
    >

      <Box
        maxW="lg"
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay
        p={6}                   // Padding
        borderRadius="md"       // Rounded corners
      >
        <Heading size="2xl" mb={4}>
          Unlock the Joy of Driving
        </Heading>
        <Text fontSize="xl" mb={6}>
          Affordable, convenient car rentals at your fingertips.
        </Text>
        <Button
          colorScheme="black"
          size="lg"
          onClick={() => console.log("Learn More Clicked!")}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
