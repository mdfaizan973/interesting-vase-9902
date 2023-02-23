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
import Footer from "../Components/Footer";
const Blog = () => {
  return (
    <>
      <NorNav />

      <Container marginTop={"20px"} maxW={"7xl"} p="12">
        <Heading as="h1">BEAUTIFUL FLOWERS, FOR ANY FUNCTIONS</Heading>
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
                    "https://www.fnp.com/images/pr/l/v20221118132140/chocolate-cream-cake-half-kg_1.jpg"
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
                The Garden Gate Flower Company Blog
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Wish someone an extra special happy birthday with a dozen fresh
              strawberries dipped in pure Belgian dark chocolate. These Happy
              Birthday chocolate covered strawberries, each of which is
              hand-dipped, actually spell out the special occasion in white
              Belgian chocolate lettering. These extra-large berries arrive in
              an elegant gift box. Wish someone an extra special happy birthday
              with a dozen fresh strawberries dipped in pure Belgian dark
              chocolate. These Happy Birthday chocolate covered strawberries,
              each of which is hand-dipped, actually spell out the special
              occasion in white Belgian chocolate lettering. These extra-large
              berries arrive in an elegant gift box.
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
                      "https://www.fnp.com/images/pr/l/v20191125101018/2-layer-bamboo-plant-dairy-milk-silk-chocolates_1.jpg"
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
                  DAIRY MILK
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                The perfect gourmet gifts for chocolate lovers: our chocolate
                covered strawberries. Birthdays. Anniversaries. Weddings.
                Holidays. Or any occasion or event you want to celebrate. Buy
                chocolate strawberries dipped in milk, white or dark chocolate,
                then topped with our signature drizzles, chocolate chips,
                sprinkles, and more.
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
                      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt8prodlp/banners/sdd_d_interflora_collections_20221107.jpg"
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
                  SWEET FLOWAERS
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Covers blog posts on garden design, roses, tulips, spring
                bloomers, edible gardening, Perennials, shrubs, early bloomers,
                garden tools, botanic gardens, and more. White Flower Farm is
                the premier American source for plants, shrubs, bulbs, and
                gardening supplies delivered from our nursery to your home.
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
                      "https://www.fnp.com/images/pr/l/v20210701022542/red-velvet-heart-cake-half-kg-eggless_5.jpg"
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
                  HEART BEAT
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Gifting tips and advice to help you make the most of life's
                special moments. Key topics covered are flower facts, floral
                occasions & Holidays, seasonal trends, flower gifting ideas, and
                more. A retail florist shop changed the way flowers are bought
                for birthdays, anniversaries and special occasions.
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">What we write about</Heading>
          <Text as="p" fontSize="lg">
            SWEETS FLOWER designs for and with athletes of all function or
            fastival. Slow Flowers podcast is about the artisanal,
            anti-mass-market approach to celebrations, festivities and floral
            gifts of love. Its mission is to promote American grown flowers, to
            make it easy for flower consumers to connect with florists, shops,
            studios and farms who provide American grown flowers, and to
            encourage truthful and transparent country of origin labeling in the
            floral industry.
          </Text>
          <Text as="p" fontSize="lg">
            Discover the contemporary scene of European floral designers in the
            inspirational Fleur Créatif magazine. Fleur Créatif inspires boththe
            amateur and the professional with wonderful creations and trendy,
            ground-breaking designs. In addition to the digital platform, Fleur
            Créatif also focuses on the print version.
          </Text>
          <Text as="p" fontSize="lg">
            Melting flowers is the finest flower designer in south India, based
            in bangalore. If you are looking for the best flower decoration or
            wedding decorations for your special day, look no further. Follow
            their blog to read more about wedding decorations, party planner,
            theme wedding decorations, flower decoration, mandap decorations,
            showroom inauguration and more.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
