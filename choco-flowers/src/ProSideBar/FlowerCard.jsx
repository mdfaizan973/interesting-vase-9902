import React from "react";
import "./pages.css";
import {
  useColorModeValue,
  Text,
  Button,
  VStack,
  Box,
  Center,
  Img,
  HStack,
} from "@chakra-ui/react";
import { FaCartPlus, FaStar } from "react-icons/fa";

export default function FlowerCard() {
  return (
    <div>
      <Box
        borderRadius={"25px"}
        boxShadow={"2xl"}
        className="catsDetails"
        w="full"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        p={"1"}
      >
        <Center>
          <Img
            boxSize="250px"
            maxW={"270px"}
            w={"full"}
            objectFit="cover"
            alt="fsdfasfs"
            src="https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191112xlz.jpg?quality=75&auto=webp&optimize={medium}"
            borderRadius="20px"
          />
        </Center>

        <VStack spacing={2} p={2}>
          <Text
            className="name"
            fontWeight="bold"
            color={"green.500"}
            textTransform={"uppercase"}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Same-Day Flower Delivery
          </Text>
          <Text className="cost">Flower Pot</Text>
          <Text className="likes">
            Loving Sentiments™ Blue & White Loving Sentiments™ Blue & White
          </Text>
          <HStack>
            <Text className="breed">
              <FaStar />
            </Text>
            <Text className="breed">555 -</Text>
            <Text className="description">$ 555</Text>
          </HStack>

          <Button colorScheme="facebook">
            Add To Cart -<FaCartPlus />
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
