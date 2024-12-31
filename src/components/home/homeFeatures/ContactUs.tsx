import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { HStack, Link } from "@chakra-ui/react";

const ContactUs: React.FC = () => {
    return (
        <Box bg="#F4E6EC" color="black" py={8} px={4} textAlign="center">
            {/* Project Overview Section */}
            
                <Heading fontSize="4xl" color="#970747" mb={10} marginTop="10">Let’s Connect!</Heading>
                <Text mb={10}>Interested in working together or learning more about EasyDrive? Feel free to reach out to us!</Text>

                <HStack justify="center" spacing={6}>
                    <Link href="mailto:team@easydrive.com" color="#970747" fontWeight="bold" isExternal>Email Us</Link>
                    <Link href="https://github.com/easydrive" color="#970747" fontWeight="bold" isExternal>GitHub</Link>
                    <Link href="https://linkedin.com/company/easydrive" color="#970747" fontWeight="bold" isExternal>LinkedIn</Link>
                </HStack>
            </Box>
    )
};

export default ContactUs;
