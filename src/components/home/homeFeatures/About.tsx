// Imports
import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

// AboutSection Component
const AboutSection: React.FC = () => {
    return (
        <Box bg="#B9C2C8" py={10} px={6}>
            {/* Project Overview Section */}
            <Box textAlign="center" mb={8}>
                <Heading fontSize="4xl" fontWeight="bold" mb={20}>
                    About EasyDrive 🚗
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto" mb={20}>
                    EasyDrive is a modern and user-friendly car rental platform that
                    provides swift, flexible, and eco-conscious driving solutions for
                    users. Whether you're planning a road trip, commuting for work, or
                    simply need a quick ride, EasyDrive makes renting a car easier than
                    ever.
                </Text>
            </Box>

            {/* Team Introduction Section */}
            <Box>
                <Heading fontSize="4xl" fontWeight="semibold" mb={10} textAlign="center" color="black">
                    Meet the Team 👥
                </Heading>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                    align="center"
                    gap={20}
                >
                    {/* Team Member 1 */}
                    <Box textAlign="center" mb={20}>
                        <Heading fontSize="lg" fontWeight="bold">
                            Kliuvert Egbe
                        </Heading>
                        <Text color="gray.600">Project Lead and Frontend Developer</Text>
                    </Box>

                    {/* Team Member 2 */}
                    <Box textAlign="center" mb={20}>
                        <Heading fontSize="lg" fontWeight="bold">
                            Freeman Boss
                        </Heading>
                        <Text color="gray.600">Backend and Devops Engineer
                        </Text>
                    </Box>

                    {/* Team Member 3 */}
                    <Box textAlign="center" mb={20}>
                        <Heading fontSize="lg" fontWeight="bold">
                            Maimunah Elegushi
                        </Heading>
                        <Text color="gray.600">UI/UX and Frontend Developer</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default AboutSection;
