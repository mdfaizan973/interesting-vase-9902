import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HoveNav from "../Components/HoveNav";
import Cakes from "../Cards/Cakes";
import Footer from "../Components/Footer";
import MultiPro from "./../Cards/MultiPro";
// import { Router as RouterLink } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  HStack,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import ExclusiveGifts from "../Cards/ExclusiveGifts";
export default function SingleProducts() {
  const [prods, setProds] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getDta = async () => {
    axios
      .get(`https://quaint-panama-hat-bass.cyclic.app/api/flower_pot/${id}`)
      .then((res) => {
        console.log(res.data);
        setProds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getDta();
  }, [id]);
  console.log(prods);

  return (
    <div>
      <Navbar />
      <HoveNav />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Stack>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={prods.image1}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
            <HStack>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={prods.image2}
                fit={"cover"}
                align={"center"}
                w={"49%"}
                h={{ base: "100%", sm: "400px", lg: "180px" }}
              />
              <Image
                rounded={"md"}
                alt={"product image"}
                src={prods.image3}
                fit={"cover"}
                align={"center"}
                w={"49%"}
                h={{ base: "100%", sm: "400px", lg: "180px" }}
              />
            </HStack>
          </Stack>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {prods.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ₹ {prods.price}
              </Text>
              <Text textDecoration={"line-through"}> ₹{prods.price * 1.7}</Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {prods.discription}
                </Text>
                <Text fontSize={"lg"}>
                  Get the most out of every step in the NikeCourt Air Zoom NXT.
                  Using insights from our top athletes, we added a large Zoom
                  Air unit for extra bounce and spring when you push off to
                  serve. After removing as much weight as we could without
                  sacrificing durability, we also made sure this incredibly
                  lightweight design was extremely comfortable. Thanks to a
                  plush collar and a more linear, angular-shaped mesh and
                  finish, you get the cushioned feel you love so you can focus
                  on playing at your best.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  BRAND: {prods.brand}
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Category</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem> {prods.category} </ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>
            <Button
              // onClick={handlecart}
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box textAlign="center" py={10} px={6}></Box>
      <Cakes />
      <MultiPro />
      <ExclusiveGifts />
      <Footer />
    </div>
  );
}
//  <FpicCards />
