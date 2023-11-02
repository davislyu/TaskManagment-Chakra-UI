import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  useToast,
  FormLabel,
  Input,
  Textarea,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";
import { useState } from "react";

export default function Create() {
  const [isEmptyName, setIsEmptyName] = useState(true);
  const [isEmptyNameDescription, SetIsEmptyNameDescription] = useState(true);

  const toast = useToast();

  const handleNameChange = (e) => {
    setIsEmptyName(e.target.value.trim() === "");
  };

  const handleDescriptionChange = (e) => {
    SetIsEmptyNameDescription(e.target.value.trim() === "");
  };

  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired={isEmptyName} mb="40px">
          <Flex justifyContent="space-between">
            <FormLabel>Task Name:</FormLabel>
            {isEmptyName && <FormHelperText>Cannot be empty</FormHelperText>}
          </Flex>
          <Input
            type="text"
            name="title"
            onChange={handleNameChange}
            placeholder="Enter task name"
          />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl isRequired={isEmptyNameDescription}>
          <Flex justifyContent="space-between">
            <FormLabel>Task description</FormLabel>
            {isEmptyNameDescription && (
              <FormHelperText>Cannot be empty</FormHelperText>
            )}
          </Flex>

          <Textarea
            name="description"
            onChange={handleDescriptionChange}
            placeholder="Enter a detailed description"
          />
        </FormControl>
        <FormControl mt="10px" display="flex" alignItems="center">
          <Checkbox colorScheme="purple" name="isPriority" size="lg" />
          <FormLabel mb="0px" ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>

        <Button
          mt="40px"
          type="submit"
          colorScheme="purple"
          onClick={() => {
            if (!isEmptyName && !isEmptyNameDescription) {
              toast({
                title: "Success",
                description: "Task created successfully.",
                status: "success",
                isClosable: true,
                duration: 2000,
              });
            } else {
              toast({
                title: "Warning",
                description: "Please fill in all required fields.",
                status: "warning",
                isClosable: true,
                duration: 2000,
              });
            }
          }}
        >
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();
  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };
  console.log(task);
  return redirect("/");
};
