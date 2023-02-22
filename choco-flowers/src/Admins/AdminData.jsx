import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AspectRatio } from "@chakra-ui/react";

import AddCarousels from "./AddCarousels";
export default function AdminData() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        // border={"2px solid black"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack mt={"-25px"} flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"red.400"}>
              Sweets Flower
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Our local florists put love into every arrangement. Sometimes they
            have to substitute flower types, colors & containers to give you the
            freshest blooms available. Although your bouquet may vary from the
            photo shown, we promise your recipient will love it just as much!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <RouterLink to="/">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                Go to website
              </Button>
            </RouterLink>
          </Stack>
          <AspectRatio maxW="600px" ratio={1}>
            <Image
              allowFullScreen
              src="https://mobirise.com/assets52/images/poster.png"
            />
          </AspectRatio>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"880px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <AddCarousels />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
