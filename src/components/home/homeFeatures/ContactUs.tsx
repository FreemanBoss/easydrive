import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { HStack, Link } from "@chakra-ui/react";

const ContactUs: React.FC = () => {
    return (
        <Box bg="#EDEFF1" color="black" py={8} px={4} textAlign="center">
            {/* Project Overview Section */}
            <Box textAlign="center" mb={8}>
                <Heading fontSize="4xl" fontWeight="bold" mb={20}>
                    Contact Us!
                </Heading>
                <Heading fontSize="4xl" color="#0d5f07" mb={10}>Let’s Connect</Heading>
                <Text mb={10}>Interested in working together or learning more about EasyDrive? Feel free to reach out to us!</Text>

                <HStack justify="center" spacing={6}>
                    <Link href="mailto:team@easydrive.com" color="#0d5f07" fontWeight="bold" isExternal>Email Us</Link>
                    <Link href="https://github.com/easydrive" color="#0d5f07" fontWeight="bold" isExternal>GitHub</Link>
                    <Link href="https://linkedin.com/company/easydrive" color="#0d5f07" fontWeight="bold" isExternal>LinkedIn</Link>
                </HStack>
            </Box>
        </Box>
    )
};

export default ContactUs;
