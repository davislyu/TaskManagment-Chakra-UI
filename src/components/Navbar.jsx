import { SunIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Wrap,
  WrapItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  const toast = useToast();

  return (
    <Flex as="nav" mb="40px" p="10px" wrap="wrap" alignItems="center">
      <VStack spacing={0} flex="1" alignItems="flex-start">
        <Wrap justify="center" align="center">
          <WrapItem>
            <SunIcon boxSize="16" />
          </WrapItem>
          <WrapItem>
            <Heading as="h1" size="lg">
              T.M.S
            </Heading>
          </WrapItem>
        </Wrap>

        <Heading as="h4" size="md" alignSelf="center">
          Task Management System
        </Heading>
      </VStack>

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
