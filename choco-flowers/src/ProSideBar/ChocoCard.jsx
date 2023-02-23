import React from "react";
import "./pages.css";
import { Link as RouterLink } from "react-router-dom";
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

export default function ChocoCard({
  title,
  image1,
  name,
  rating,
  id,
  price,
  discription,
}) {
  return (
    <div>
      <RouterLink to={`/singleProducts/${id}`}>
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
              src={image1}
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
              {title.substring(0, 25)}
            </Text>
            <Text className="cost">{name}</Text>
            <Text className="likes">{discription.substring(0, 65)}....</Text>
            <HStack>
              <Text className="breed">
                <FaStar />
              </Text>
              <Text color="red" className="breed">
                {Math.floor(Math.random() * 5 + 1)}
              </Text>
              <Text className="description">- ₹ {price}</Text>
            </HStack>

            <Button colorScheme="facebook">
              Add To Cart -<FaCartPlus />
            </Button>
          </VStack>
        </Box>
      </RouterLink>
    </div>
  );
}
