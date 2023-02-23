import React from "react";
import { ReactNode } from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Input,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import {
  FaCartPlus,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
const ListHeader = () => {
  return <Text fontWeight={"700"} fontSize={"lg"} mb={2}></Text>;
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      color={useColorModeValue("black", "gray.300")}
      marginTop={"10px"}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" }}
          spacing={4}
        >
          <Stack spacing={2}>
            <Box>
              <img
                width="85%"
                src="https://sweetflower.com/wp-content/uploads/2022/11/SF-PrimaryLogo-RGB-01-transparent-300x151.png"
              />
            </Box>
            <Text fontSize={"sm"}>@Copyright 2023</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/"}>Home</Link>
            <Link href={"/prod_details"}>ProductDetails</Link>
            <Link href={"/regis_page"}>Login</Link>
            <Link href={"/prod_page"}>ProductPage</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
        <Stack direction={"row"} spacing={6}>
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
          <FaUser />
        </Stack>
      </Container>
    </Box>
  );
}
