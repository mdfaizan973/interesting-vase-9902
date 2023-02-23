import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import NorNav from "../Components/NorNav";
const Blog = () => {
  return (
    <>
      <NorNav />

      <Container marginTop={"20px"} maxW={"7xl"} p="12">
        <Heading as="h1">WORKOUT SHOES, FOR ANY SPORT</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              // zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  width="100%"
                  src={
                    "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Sports-Running-Shoes-Banner-Design.jpg"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                STORIES, STYLES AND SPORTSHOES AT FZSHOES, SINCE 1949
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Athletic Shoes and Classic Shoes Driven by Bold Movement Whether
              you’re moving your body or moving ideas forward, aim to move in
              the direction of progress. Day after day, find time to lace up
              your gym shoes and get in your workout, wherever, whenever and
              whatever it might be. There’s no one way approach fitness as long
              as you’re living an active life. If you’re passionate about
              running, weightlifting, cross training or studio workouts, Reebok
              has a range of athletic shoes designed to support you with
              technology and comfort. And no matter how you move, do it with
              purpose and style. Reebok’s retro sneakers were born from sports
              out of the 80s and 90s. Then, they were gamechangers on the
              basketball and tennis courts, track and trails. Now, they’re
              timelessly authentic classic shoes. Iconic since day one.
            </Text>
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Latest articles
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPxlzNjSu2bYCBFrQgyzK-By0zVtMWix_NHD9sZ0eDPd93UD6pu1D03b4P0B8DUZbtg0&usqp=CAU"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>

              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                FZ Shoes is about more than sportswear and workout clothes. We
                partner with the best in the industry to co-create. This way we
                offer our fans the sports apparel and style that match their
                athletic needs, while keeping sustainability in mind. We’re here
                to support creators. Improve their game. Create change. And we
                think about the impact we have on our world.
              </Text>
            </Box>
          </WrapItem>

          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Feyv9n1AswWvdPOriJGR18chswOvS0lB1A&usqp=CAU"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>

              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                FZ Shoes is about more than sportswear and workout clothes. We
                partner with the best in the industry to co-create. This way we
                offer our fans the sports apparel and style that match their
                athletic needs, while keeping sustainability in mind. We’re here
                to support creators. Improve their game. Create change. And we
                think about the impact we have on our world.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEP0um2lkjt83eD77kSgRnrYvtSGJKgCadAQ&usqp=CAU"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>

              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                FZ Shoes is about more than sportswear and workout clothes. We
                partner with the best in the industry to co-create. This way we
                offer our fans the sports apparel and style that match their
                athletic needs, while keeping sustainability in mind. We’re here
                to support creators. Improve their game. Create change. And we
                think about the impact we have on our world.
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Text as="p" fontSize="lg">
            FZ Shoes designs for and with athletes of all kinds. Creators, who
            love to change the game. Challenge conventions. Break the rules and
            define new ones. Then break them again. We supply teams and
            individuals with athletic clothing pre-match. To stay focussed. We
            design sports apparel that get you to the finish line. To win the
            match. We support women, with bras and tights made for purpose. From
            low to high support. Maximum comfort. We design, innovate and
            itterate. Testing new technologies in action. On the pitch, the
            tracks, the court, the pool. Retro workout clothes inspire new
            streetwear essentials. Like NMD, Ozweego and our Firebird
            tracksuits. Classic sports models are brought back to life. Like
            Stan Smith. And Superstar. Now seen on the streets and the stages.
          </Text>
          <Text as="p" fontSize="lg">
            Sport keeps us fit. Keeps you mindful. Brings us together. Through
            sport we have the power to change lives. Whether it is through
            stories of inspiring athletes. Helping you to get up and get moving.
            Sportswear featuring the latest technologies, to up your
            performance. Beat your PB. adidas offers a home to the runner, the
            basketball player, the soccer kid, the fitness enthusiast. The
            weekend hiker that loves to escape the city. The yoga teacher that
            spreads the moves. The 3-Stripes are seen in the music scene. On
            stage, at festivals. Our sports clothing keeps you focused before
            that whistle blows. During the race. And at the finish lines. We’re
            here to support creators. Improve their game. Their lives. And
            change the world.
          </Text>
          <Text as="p" fontSize="lg">
            Through our collections we blur the borders between high fashion and
            high performance. Like our adidas by Stella McCartney athletic
            clothing collection – designed to look the part inside and outside
            of the gym. Or some of our adidas Originals lifestyle pieces, that
            can be worn as sportswear too. Our lives are constantly changing.
            Becoming more and more versatile. And adidas designs with that in
            mind.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default Blog;
