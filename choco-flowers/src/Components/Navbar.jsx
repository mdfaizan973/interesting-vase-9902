import React, { useContext } from "react";
import { Image, Input } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "..//Pages/cartlength";

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Signup from "./../Pages/Signup";
import LoginPop from "./../PopUp/LogInPop";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
export default function Navbar() {
  const { cartd, totalcart } = useContext(CartContext);
  // console.log("data", totalcart);

  const { colorMode, toggleColorMode } = useColorMode();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   let navigate = useNavigate();
  const handlSearch = (e) => {
    //     if (e.key === "Enter") {
    //       let searchResult = e.target.value;
    //       navigate(`/all_pro/?query=${searchResult}`);
    //     }
  };
  //   let anser = localStorage.getItem("totalcart") || 0;
  //   console.log("sdfasjfdsjfksjfksjfkjskdfa:- ", anser);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <div>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        width="100%"
        top={0}
        position="fixed"
        style={{ zIndex: 1 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Box>
              <Image
                src="https://sweetflower.com/wp-content/uploads/2022/11/SF-PrimaryLogo-RGB-01-transparent-300x151.png"
                alt="Sweets Choco"
                width="40%"
              />
            </Box>
          </RouterLink>

          <Input
            bg={useColorModeValue("shyblue", "gray")}
            width="60%"
            placeholder="Search your products..."
            onKeyDown={(e) => handlSearch(e)}
          />
          <Flex alignItems={"center"} marginLeft={"30px"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} width="20px">
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <RouterLink to="/cart">
                  <Center>
                    {" "}
                    <Text
                      fontWeight="700"
                      position="absolute"
                      top="2px"
                      color="red"
                    >
                      {totalcart}
                      {/*} 
                      {anser} */}
                    </Text>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://cdn-icons-png.flaticon.com/512/263/263142.png"
                      }
                    />
                  </Center>
                </RouterLink>
                <Button
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    onOpen();
                  }}
                >
                  <FaUser />
                </Button>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <LoginPop />
        </ModalContent>
      </Modal>
    </div>
  );
}
// <MenuList alignItems={"center"}>
//   <br />

//   <Center>
//     <Avatar
//       size={"2xl"}
//       src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"}
//     />
//   </Center>

//   <br />
//   <Center>{/*  <p>Md Faizan</p> */}</Center>
//   <br />
//   <MenuDivider />
//   <RouterLink to="/signup">
//     <MenuItem>New Account</MenuItem>
//   </RouterLink>
//   <MenuItem>LogIn</MenuItem>
//   <MenuItem>Logout</MenuItem>
// </MenuList>;
