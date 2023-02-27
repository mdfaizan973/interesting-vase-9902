import React, { useContext } from "react";
import NorNav from "../Components/NorNav";
// import { Input, Box, Button } from "@chakra-ui/react";
// export default function Checkout() {
//   return (
//     <div>
//       <NorNav />
//       <Box
//         w="50% "
//         m={"15px auto"}
//         padding="15px 5px"
//         boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
//       >
//         <Input w="70%" />
//         <br />
//         <br />

//         <Input w="70%" />
//         <br />
//         <br />

//         <Input w="70%" />
//         <br />
//         <br />

//         <Input w="70%" />
//         <br />
//         <br />

//         <Input w="70% " />
//         <br />
//         <Button>Submit</Button>
//       </Box>
//     </div>
//   );
// }
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
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Checkout() {
  const { cartd, totalcart } = useContext(CartContext);

  console.log(cartd, totalcart);
  let cost = cartd.reduce((acc, el) => acc + +el.price, 0);
  // console.log("my cost is :-", cost);
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
                            <Input type="text" size="md" placeholder="Name" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="email" placeholder="Email" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Phone</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" placeholder="Phone" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Address</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              size="md"
                              placeholder="Address"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Pin-Code</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input
                              type="text"
                              size="md"
                              placeholder="Pin-Code"
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name" float="right">
                          <RouterLink to="/delhivery">
                            <Button
                              variant="solid"
                              bg="green"
                              color="white"
                              _hover={{}}
                            >
                              Submit
                            </Button>
                          </RouterLink>
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
