import React, { useState, useContext } from "react";
import NorNav from "../Components/NorNav";

import { CartContext } from "./cartlength";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  Image,
  InputGroup,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export default function Payments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const toast = useToast();

  const { cartd, totalcart } = useContext(CartContext);
  // console.log(cartd, totalcart);
  let cost = 0;
  cost = cartd.reduce((acc, el) => acc + +el.price, 0);
  // console.log("my cost is :-", cost);

  const handleredirects = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      pin === ""
    ) {
      toast({
        title: "Please fill all the fields",
        position: ["top"],
        isClosable: true,
      });
    } else {
      let a = setTimeout(() => {
        window.location.href = "/delhivery";

        return () => a;
      }, 1500);
    }
  };
  return (
    <>
      <NorNav />
      <Container
        // bg="#9DC4FB"kk
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            // bg="purple.700"
            // color="white"
            borderRadius="lg"
            // border="1px solid grey"
            boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box w="100%">
                    <Heading>Delivery Information</Heading>

                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}></Box>
                    <VStack>
                      <Text fontSize="2xl">Total Price :- ₹ {cost}</Text>

                      <Text fontSize="2xl">Total Cart Item :- {totalcart}</Text>
                    </VStack>
                    <VStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      {cartd.map((el) => (
                        <HStack
                          key={el.id}
                          // border="1px solid grey"
                          p="5"
                          w="100%"
                          // boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
                          boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                        >
                          <Image w="60px" src={el.image1} />
                          <box>
                            <Text color="green" fontSize="xl">
                              {el.title.substring(0, 20)}..
                            </Text>
                            <Text>{el.name}</Text>
                            <p>₹ {el.price}</p>
                          </box>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box
                    bg="white"
                    borderRadius="lg"
                    w="80vh"
                    boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  >
                    <Box m={8} color="#0B0E3F" w="80%">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              size="md"
                              placeholder="Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>E-Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="email"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Phone</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="number"
                              size="md"
                              placeholder="Phone"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Address</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              size="md"
                              placeholder="Address"
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Pin-Code</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="number"
                              size="md"
                              placeholder="Pin-Code"
                              onChange={(e) => setPin(e.target.value)}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name" float="right">
                          {/* <RouterLink to="/delhivery"> */}
                          <Button
                            variant="solid"
                            bg="green"
                            color="white"
                            _hover={{}}
                            onClick={handleredirects}
                          >
                            Submit
                          </Button>
                          {/* </RouterLink> */}
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
