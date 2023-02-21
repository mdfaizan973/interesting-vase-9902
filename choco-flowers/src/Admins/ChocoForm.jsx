import React, { useState } from "react";
import FlowerGetData from "./FlowerGetData";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useDisclosure,
  Link,
  useColorModeValue,
  VStack,
  HStack,
  Box,
  Collapse,
  Stack,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function ChocoForm() {
  return (
    <div>
      {" "}
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "black.800")}
        boxShadow={"2xl"}
        rounded={"md"}
      >
        <Flex
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("white", "black.800")}
          boxShadow={"2xl"}
          rounded={"md"}
        >
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name...." type="text" />
            </FormControl>
            <FormControl id="image1">
              <FormLabel>Image-1</FormLabel>
              <Input placeholder="Image-1...." type="text" />
            </FormControl>
            <FormControl id="image2">
              <FormLabel>Image-2</FormLabel>
              <Input placeholder="Image-2...." type="text" />
            </FormControl>
            <FormControl id="image3">
              <FormLabel>Image-3</FormLabel>
              <Input placeholder="Image-3...." type="text" />
            </FormControl>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title...." type="text" />
            </FormControl>

            <HStack spacing="24px">
              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <Input placeholder="Price...." type="text" />
              </FormControl>
              <FormControl id="ratings">
                <FormLabel>Ratings</FormLabel>
                <Input placeholder="Ratings...." type="text" />
              </FormControl>
            </HStack>
            <FormControl id="Discription">
              <FormLabel>Discription</FormLabel>
              <Input placeholder="Discription...." type="text" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button colorScheme={"blue"} variant={"solid"}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex
          flex={1}
          bg={useColorModeValue("white", "black.800")}
          boxShadow={"2xl"}
          rounded={"md"}
        >
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            borderRadius="100%"
            h="100vh"
            src={
              "https://cdn1.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/163159x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}"
            }
          />
        </Flex>
      </Stack>
      <br />
      <FadeEx />
    </div>
  );
}
function FadeEx() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button onClick={onToggle} colorScheme="green" w="100%" textAlign="start">
        {isOpen ? "Hide Products" : "Show Products"}
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          //   bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {/* Here my all the data wiil be -> Components */}
          <FlowerGetData />
        </Box>
      </Collapse>
    </>
  );
}
