import React, { useEffect, useState } from "react";
import NorNav from "../Components/NorNav";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  VStack,
  Text,
  HStack,
  Center,
  Box,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin, SiMessenger } from "react-icons/si";
// http://localhost:8010/users
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  const newDedails = {
    email,
    password,
    lname,
    fname,
    phone,
    id: new Date(),
  };

  const handleSubmitUser = () => {
    // console.log("SubmitUser-data", email, password, fname, fname, phone);

    axios
      .post("http://localhost:8010/users", newDedails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
            <HStack>
              <Box>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </Box>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
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
              <Button
                onClick={handleSubmitUser}
                colorScheme={"blue"}
                variant={"solid"}
              >
                Sign Up
              </Button>
            </Stack>
            <Center p={8}>
              <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                {/* Facebook */}
                <Button
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
                    <Text>Continue with Facebook</Text>
                  </Center>
                </Button>

                {/* Google */}
                <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>

                {/* LinkedIn */}
                <Button
                  w={"full"}
                  colorScheme={"messenger"}
                  leftIcon={<SiLinkedin />}
                >
                  <Center>
                    <Text>Send to Linkedin</Text>
                  </Center>
                </Button>

                {/* Messenger */}
                <Button
                  w={"full"}
                  colorScheme={"messenger"}
                  leftIcon={<SiMessenger />}
                >
                  <Center>
                    <Text>Send to Messenger</Text>
                  </Center>
                </Button>
              </Stack>
            </Center>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Image
            src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt8prodlp/banners/sdd_d_interflora_collections_20221107.jpg"
            alt="logo"
          />
        </Flex>
      </Stack>
    </div>
  );
}
