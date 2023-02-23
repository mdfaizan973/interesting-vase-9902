import React, { useEffect, useReducer } from "react";
import Navbar from "./../Components/Navbar";
import HoveNav from "./../Components/HoveNav";
import Footer from "../Components/Footer";
import FlowerSide from "../ProSideBar/FlowerSide";
// export default function Flowers() {
//   return (
//     <div>
//       <Navbar />
//       <HoveNav />
//       {/* Here my all the products will come Like Data*/}
//       <FlowerSide />
//     </div>
//   );
// }

// import React, { useEffect, useReducer } from "react";
// import axios from "axios";
import {
  IconButton,
  // Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Heading,
  useDisclosure,
  Stack,
  Button,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { FiToggleRight } from "react-icons/fi";
import { BsFillAwardFill } from "react-icons/bs";
// import Mens_Card from ".//Mens_Card";
import { useState } from "react";
import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { BiBody } from "react-icons/bi";

export default function Flowers({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mdata, setMdata] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  let searchResult = searchParams.get("query");
  // console.log(searchResult);
  // useEffect(() => {
  //   getData(page);
  // }, [searchParams, page]);
  // const getData = (page) => {
  //   axios
  //     .get(`http://localhost:3040/Child_shoe?_limit=8&_page=${page}`)
  //     .then((res) => {
  //       // setMdata(res.data);
  //       let data = res.data;
  //       if (searchResult) {
  //         data = data.filter((el) => {
  //           searchResult = searchResult.toLowerCase();

  //           return (
  //             el.brand.toLowerCase().includes(searchResult) ||
  //             el.category.toLowerCase().includes(searchResult) ||
  //             el.title.toLowerCase().includes(searchResult)
  //           );
  //         });
  //       }
  //       setMdata(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleChange = (val) => {
    //   setPage(page + val);
  };

  const handleltoh = () => {
    //   let asc = mdata.sort((a, b) => a.price - b.price);
    //   setMdata([...asc]);
    //   // alert("hello");
  };
  const handlehtol = () => {
    //   let desc = mdata.sort((a, b) => b.price - a.price);
    //   setMdata([...desc]);
    //   // alert("hello");
  };
  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("grey.100", "gray.900")}>
        <Navbar />
        <HoveNav />
        <SidebarContent
          handleltoh={handleltoh}
          handlehtol={handlehtol}
          // onClick={handlehtol}
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />

        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          onClick={handleltoh}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav
          display={{ base: "flex", md: "none" }}
          onOpen={onOpen}
          onClick={handleltoh}
          handlehtol={handlehtol}
        />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/*  {children}  */}
          <Text margin={" 30px auto"}>Kidspro</Text>
          <Grid
            templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
            width={"100%"}
            marginTop={"70px"}
            gap={2}
          ></Grid>
          <div style={{}}>
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Stack direction="row" spacing={4} align="center">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  isDisabled={page == 1}
                  onClick={() => handleChange(-1)}
                >
                  ⬅️Prev
                </Button>

                <h3>{page}</h3>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => handleChange(1)}
                >
                  Next➡️
                </Button>
              </Stack>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ handlehtol, handleltoh, onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="sticky"
      top="10"
      h="100%"
      mt={"-63px"}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Filter
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem key="faizan" icon={FiHome}>
        {" "}
        Home
      </NavItem>
      <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
        {" "}
        Sort
      </NavItem>
      <NavItem onClick={handleltoh} key="faizan" icon={FiCompass}>
        {" "}
        Price Low to High
      </NavItem>
      <NavItem onClick={handlehtol} key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>
      <NavItem onClick={handlehtol} key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>
      <NavItem onClick={handlehtol} key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>
      <NavItem onClick={handlehtol} key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>
      <NavItem onClick={handlehtol} key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>{" "}
      <NavItem onClick={handlehtol} key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>
    </Box>
  );
};

const NavItem = ({ handleltoh, icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        bg={useColorModeValue("gray.100", "gray.900")}
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        onClick={handleltoh}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ handleltoh, onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      mt={"-59"}
      height="20"
      pos="sitcky"
      width="100%"
      zIndex="1"
      alignItems="center"
      bg={useColorModeValue("gray.100", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
      onClick={handleltoh}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Filter
      </Text>
    </Flex>
  );
};
// {mdata?.length > 0 && line - 141 code
//   mdata?.map((e) => {
//     return (
//       <GridItem id={e.id} w="100%" h="100%">
//         <Mens_Card
//           id={e.id}
//           title={e.title}
//           image1={e.image1}
//           image2={e.image2}
//           price={e.price}
//           discription={e.discription}
//           category={e.category}
//           brand={e.brand}
//         />
//       </GridItem>
//     );
//   })}
