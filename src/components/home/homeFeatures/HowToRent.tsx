import { Box, Text, Flex, Heading, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCar, FaSmile, FaMap } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      description: "Pick the location and the date.",
    },
    {
      icon: FaCar,
      title: "Choose A Car",
      description: "Select the car you like.",
    },
    {
      icon: FaSmile,
      title: "Enjoy Your Ride",
      description: "Explore new sights and places with comfort.",
    },
    {
      icon: FaMap,
      title: "Return The Car",
      description: "Leave the car at one of our parks.",
    },
  ];

  return (
    <Box bg="#B9C2C8" py={48} px={24}>
      {/* Title Section */}
      <Box textAlign="center" mb={20}>
        <Heading color="#0d5f07" fontSize="6xl" fontWeight="bold" mb={2}>
          How To Rent
        </Heading>
        <Text fontSize="4xl" color="black" fontWeight="bold">
          Simple & Easy Steps
        </Text>
        <Text color="black" mt={3}>
          Choose Location, Car & Enjoy Your Ride
          <br />
          When you finish, return the car to one of our parking stations.
        </Text>
      </Box>
      <Flex justify="center" gap={20} flexWrap="wrap">
        {steps.map((step, index) => (
          <Box
            key={index}
            textAlign="center"
            bg="white"
            p={6}
            boxShadow="lg"
            borderRadius="lg"
            maxW="sm"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Icon as={step.icon} w={12} h={12} color="#0d5f07" mb={4} />
            <Heading size="md" mb={2}>
              {step.title}
            </Heading>
            <Text>{step.description}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HowItWorks;
