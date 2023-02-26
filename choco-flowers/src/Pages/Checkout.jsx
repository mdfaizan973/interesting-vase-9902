// import React from "react";
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
  return (
    <>
      <NorNav />
      <Container
        // bg="#9DC4FB"
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
            border="1px solid grey"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box w="100%">
                    <Heading>Delivery Information</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      FREE Shipping/No Service Charge for Year
                      <br />
                      across our brands! Just $29.99/Year
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Image
                          m="10px"
                          w="25%"
                          src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png"
                        />
                        <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png" />
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg" w="80vh">
                    <Box m={8} color="#0B0E3F" w="80%">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Phone</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Address</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Pin-Code</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md" />
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
