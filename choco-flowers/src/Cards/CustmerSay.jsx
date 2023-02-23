import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Image,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import MultiPro from "./MultiPro";
const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function CustmerSay() {
  return (
    <>
      <MultiPro />
      <div className="div2">
        <img
          style={{
            marginTop: "20px",
          }}
          src="https://www.fnp.com/assets/images/custom/new-desk-home/offer-banners/New-arrival-gift-1-desk-8-sept-2022.jpg"
        />

        <Image src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt34prodlp/banners/founders_note_d_interflora_illustration_20221109.png" />
      </div>

      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>
              Some of the Great Things Our Customers Say About Us
            </Heading>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Beautiful</TestimonialHeading>
                <TestimonialText>
                  "I bought these for my Nana’s birthday she said they were
                  amazingly beautiful!"imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4c9be4e2d955776a/602a81580aba282006983f75/hp-reviews-final-167891.png?quality=70&auto=webp&optimize={medium}"
                }
                name={"– Pamela"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Sweet Anniversary</TestimonialHeading>
                <TestimonialText>
                  "The strawberries arrived on time and were fantastic as
                  always. Definitely made my anniversary a lot sweeter!"
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt854645311f2a8ec4/621cf518ba043c4a2c4a9a54/web_icons_125x125_Gourmet_Drizzled_Berries-v2.png?quality=70&auto=webp&optimize={medium}"
                }
                name={"– Brian"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Best Flowers</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2b874f93791fce4a/62b09064482ba357e65ddbe8/web_icons_125x125_ocean_breeze_orchids.png?quality=70&auto=webp&optimize={medium}"
                }
                name={"– Pamela"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Very Happy</TestimonialHeading>
                <TestimonialText>
                  I love how the recipient can plant the roses and enjoy them
                  for a long time. The plant is healthy and the candle I ordered
                  with it smells great!
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blte0c04d8be69858b7/6259b075b9aa584a4e32649f/web_icons_125x125_classic_budding_rose.png?quality=70&auto=webp&optimize={medium}"
                }
                name={"– Betty"}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
      <Image src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt34prodlp/banners/media_coverage_d_interflora_illustration_20220904.png" />
    </>
  );
}
