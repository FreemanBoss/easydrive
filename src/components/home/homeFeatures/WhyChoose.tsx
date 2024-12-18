import { Box, Flex, Heading, Text, Icon, VStack } from "@chakra-ui/react";
import { FaCar, FaLeaf, FaCog } from "react-icons/fa";
import carImage from "../../../assets/images/cars/car01.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaCar,
      title: "Community Vibes",
      description:
        "Join a community of car enthusiasts. Share your travel experiences, discover new destinations, and celebrate the joy of driving.",
    },
    {
      icon: FaCog,
      title: "Pay As You Ride",
      description:
        "No need for long-term contracts. Pay for the ride you need and tailor your experience to your schedule and wallet.",
    },
    {
      icon: FaLeaf,
      title: "Easy Rentals",
      description:
        "Rent a Car in just a few taps. Our app makes the process swift and straightforward so you can focus on your ride.",
    },
  ];

  // New Emoji-based points
  const bulletPoints = [
    { emoji: "🚗", text: "Dive into Adventures: Hit the road with style! Explore urban adventures in sleek, reliable, and eco-friendly rides." },
    { emoji: "⚙️", text: "Easy Rentals: Experience a fast, smart, and hassle-free with our user-friendly app—your ride is just a tap away!" },
    { emoji: "🌱", text: "Drive Green, Go Clean: Our eco-friendly cars help you explore while reducing your carbon footprint." },
    { emoji: "🤝", text: "A Community for Car Lovers: Join a vibrant community of driving enthusiasts!" },
  ];

  return (
    <Box bg="#EDEFF1" py={10} px={6}>
      {/* Title Section */}
      <Box textAlign="center" mb={8}>
        <Heading fontSize="4xl" fontWeight="bold" mb={4}>
          Why Choose EasyDrive 🚗✨
        </Heading>
        {/* New Emoji-based Bullet Points */}
        <VStack spacing={3} mb={20}>
          {bulletPoints.map((point, index) => (
            <Text key={index} fontSize="lg" color="gray.700">
              <span style={{ marginRight: "8px" }}>{point.emoji}</span>
              {point.text}
            </Text>
          ))}
        </VStack>
      </Box>

      <Flex direction={{ base: "column", lg: "row" }} align="center" gap={6}>
        {/* Left Section: Image */}
        <Box flex="1">
          <img
            src={carImage}
            alt="Car"
            style={{ maxWidth: "80%", borderRadius: "10px", marginBottom: "20px" }}
          />
        </Box>

        {/* Right Section: Content */}
        <Box flex="1">
          <VStack align="start" spacing={6}>
            {features.map((feature, index) => (
              <Flex
                key={index}
                align="start"
                bg="white"
                p={4}
                shadow="md"
                borderRadius="lg"
              >
                <Icon as={feature.icon} w={8} h={8} color="#0d5f07" mr={4} />
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {feature.title}
                  </Text>
                  <Text fontSize="sm">{feature.description}</Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyChooseUs;
