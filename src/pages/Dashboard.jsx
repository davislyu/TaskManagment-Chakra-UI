import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const Tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {Tasks &&
        Tasks.map((task) => (
          <Card
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
            key={task.id}
          >
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Avatar src={task.img} />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>By {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
export const TasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
