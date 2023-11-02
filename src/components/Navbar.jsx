import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  const toast = useToast();

  return (
    <Flex as="nav" mb="40px" p="10px" alignItems="center" gap="10px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>Davis@gmail.com</Text>
        <Button
          colorScheme="purple"
          onClick={() => {
            toast({
              title: `Logged out successfully`,
              position: "top",
              isClosable: true,
              icon: <UnlockIcon />,
              colorScheme: "green",
            });
          }}
        >
          LogOut
        </Button>
      </HStack>
    </Flex>
  );
}
