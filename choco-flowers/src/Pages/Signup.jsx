import React from "react";
import NorNav from "../Components/NorNav";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function Signup() {
  return (
    <>
      <NorNav />
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"lg"}
            boxShadow={
              "rgb(128, 128, 128) 0px 6px 12px -2px,  rgb(128, 128, 128) 0px 3px 7px -3px"
            }
            padding={"15px"}
          >
            <Heading fontSize={"2xl"}>Create your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <RouterLink to="/login">
                  <Link color={"blue.500"}> LogIn</Link>
                </RouterLink>
              </Stack>
              <Button colorScheme={"blue"} variant={"solid"}>
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Image
            src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt8prodlp/banners/sdd_d_interflora_collections_20221107.jpg"
            alt="logo"
          />
        </Flex>
      </Stack>
    </>
  );
}
