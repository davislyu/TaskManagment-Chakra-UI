import { Flex,Box, Heading,Text,Button, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'


export default function Navbar() {
  return (
    <Flex as="nav" mb="40px" p="10px" alignItems="center" gap="10px">
        <Heading as="h1">
            Dojo Tasks
        </Heading>
        <Spacer/>
        <HStack spacing="20px">
        <Box bg="gray.200" p="10px">M</Box>
        <Text>Davis@gmail.com</Text>
        <Button colorScheme='purple'>LogOut</Button>
        </HStack>
    </Flex>
  )
}
