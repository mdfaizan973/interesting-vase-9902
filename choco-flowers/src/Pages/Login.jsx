import React, { useEffect, useState, useContext } from "react";
import NorNav from "../Components/NorNav";
import { Link as RouterLink } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useToast, WrapItem, Wrap } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const toast = useToast();
  // toast({
  //   title: "You are successfully registered",
  //   position: ["top"],
  //   isClosable: true,
  // });
  const loginSubmit = () => {
    if (email === "" || password === "") {
      toast({
        title: "Please fill all fields",
        position: ["top"],
        isClosable: true,
      });
    } else if (email === "admin_fz@gmail.com" && password === "hello_admin") {
      let a = setTimeout(() => {
        toast({
          title: "Admin Login successfully ",
          position: ["top"],
          isClosable: true,
        });
        let b = setTimeout(() => {
          window.location.href = "/admin-dashboard";
          return () => b;
        }, 1200);
        return () => a;
      }, 800);
    } else {
      fetch("https://flowers-wdds.onrender.com/users")
        .then((response) => response.json())
        .then((users) => {
          const user = users.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            toast({
              title: " Login successfully ",
              position: ["top"],
              isClosable: true,
            });
            let st = setTimeout(() => {
              window.location.href = "/";
              return () => st;
            }, 1000);
          } else {
            let st2 = setTimeout(() => {
              toast({
                title: "User Not Found",
                position: ["top"],
                isClosable: true,
              });
              return () => st2;
            }, 1000);
            let st3 = setTimeout(() => {
              toast({
                title: "If You Are New User Please Create Your Account",
                position: ["top"],
                isClosable: true,
              });
              return () => st3;
            }, 2800);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div>
      <NorNav />

      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
              <Stack spacing={8}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  {/* <Link color={"blue.400"}>Forgot password?</Link> */}
                  <RouterLink to="/signup">
                    <Button color={"blue.400"}>New Account</Button>
                  </RouterLink>
                </Stack>

                <Button
                  onClick={loginSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
