import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Button,
  Image,
  useDisclosure,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaUser } from "react-icons/fa";
import { ReactNode } from "react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LogInPop from "../PopUp/LogInPop";
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function NorNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          w="10%"
          src="https://sweetflower.com/wp-content/uploads/2022/11/SF-PrimaryLogo-RGB-01-transparent-300x151.png"
        />

        <Stack direction={"row"} spacing={6}>
          <RouterLink to="/home">
            <Button>Home</Button>
          </RouterLink>
          <Button onClick={toggleColorMode} width="20px">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button>
            <RouterLink to="/">
              <FaUser />
            </RouterLink>
          </Button>
        </Stack>
      </Container>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <LogInPop />
        </ModalContent>
      </Modal>
    </Box>
  );
}
