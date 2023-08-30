import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HoveNav from "../Components/HoveNav";
import Cakes from "../Cards/Cakes";
import Footer from "../Components/Footer";
import MultiPro from "./../Cards/MultiPro";
import { FaCartPlus } from "react-icons/fa";
import { Router as RouterLink } from "react-router-dom";

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
import ProCarousal from "./../ProSideBar/ProCarousal";
import { useToast, WrapItem, Wrap } from "@chakra-ui/react";

export default function SingleProducts() {
  const toast = useToast();
  const positions = ["top"];
  const [prods, setProds] = useState([]);
  const [load, setLoad] = useState(false);
  const [cartdata, setCartdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDta();
  }, [id]);
  const getDta = async () => {
    setLoad(true);
    axios
      .get(`https://flowers-wdds.onrender.com/all-pro/${id}`)
      .then((res) => {
        console.log(res.data);
        setProds(res.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  // console.log(prods);

  const handlecart = () => {
    axios
      .get(`https://flowers-wdds.onrender.com/all-pro/${id}`)
      .then((res) => {
        console.log(res.data);
        cartval(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const cartval = (pr) => {
      axios
        .post("https://flowers-wdds.onrender.com/cartItems", pr)
        .then((res) => {
          console.log("res.data: ", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // <AddCartToast />;
  };

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
                w={"50%"}
                h={{ base: "100%", sm: "400px", lg: "180px" }}
              />
              <Image
                rounded={"lg"}
                alt={"product image"}
                src={prods.image3}
                fit={"cover"}
                align={"center"}
                w={"50%"}
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
                  BRAND: {prods.name}
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Name</ListItem>
                    <ListItem>Rating</ListItem>
                    <ListItem>Category</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{prods.name}</ListItem>
                    <ListItem>{prods.rating}</ListItem>
                    <ListItem> {prods.title} </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>
            <Button
              onClick={handlecart}
              rounded={"lg"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              colorScheme="red"
              // color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              <Wrap>
                {positions.map((position, i) => (
                  <WrapItem key={i}>
                    <Button
                      colorScheme="red"
                      onClick={() =>
                        toast({
                          title: "Added To Cart",
                          position: position,
                          isClosable: true,
                        })
                      }
                    >
                      Add to cart - <FaCartPlus />
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
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
      <Box textAlign="center" py={10} px={6}>
        <ProCarousal />
      </Box>
      <Cakes />
      <MultiPro />
      <ExclusiveGifts />
      <Footer />
    </div>
  );
}
// <Button
// onClick={handlecart}
// rounded={"lg"}
// w={"full"}
// mt={8}
// size={"lg"}
// py={"7"}
// colorScheme="red"
// color={useColorModeValue("white", "gray.900")}
// textTransform={"uppercase"}
// _hover={{
//   transform: "translateY(2px)",
//   boxShadow: "lg",
// }}
// >
// Add to cart - <FaCartPlus />
// </Button>
