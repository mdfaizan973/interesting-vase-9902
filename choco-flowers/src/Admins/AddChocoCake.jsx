import React, { ReactNode } from "react";
import ChocoForm from "./ChocoForm";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SmallAddIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  Button,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

export default function AddChocoCake() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
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
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* <FormAdmin />
         <Users />*/}
        <ChocoForm />
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <NavItem key="faizan" icon={FiHome}>
        Dashboard
      </NavItem>
      <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
        Accounts
      </NavItem>
      <RouterLink to="/users_acc">
        <NavItem key="faizan" icon={FiCompass}>
          Users
          <ArrowUpDownIcon />
        </NavItem>
      </RouterLink>

      <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
        Products
      </NavItem>
      <NavItem key="faizan" icon={FiCompass}>
        Flowers
        <SmallAddIcon />
      </NavItem>
      <RouterLink to="/addFlower">
        <NavItem key="faizan" icon={FiCompass}>
          Plants
          <SmallAddIcon />
        </NavItem>
      </RouterLink>
      <RouterLink to="/addFlower">
        <NavItem key="faizan" icon={FiCompass}>
          Flower Bukeh
          <SmallAddIcon />
        </NavItem>
      </RouterLink>
      <RouterLink to="/addFlower">
        <NavItem key="faizan" icon={FiCompass}>
          Sympathy Flowers
          <SmallAddIcon />
        </NavItem>
      </RouterLink>

      <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
        Sweets
      </NavItem>
      <RouterLink to="/add_choco/cake">
        <NavItem key="faizan" icon={FiCompass}>
          Chocolates
          <SmallAddIcon />
        </NavItem>
      </RouterLink>
      <RouterLink to="/add_choco/cake">
        <NavItem key="faizan" icon={FiCompass}>
          Cakes
          <SmallAddIcon />
        </NavItem>
      </RouterLink>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
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

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Button onClick={toggleColorMode} width="20px">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://media.licdn.com/dms/image/D4D03AQG0DyHH_PljYg/profile-displayphoto-shrink_400_400/0/1675934460685?e=1682553600&v=beta&t=hZ53q2DDl2xgpFYyO3BW_qm7A8OQ4zh-n424YB2axxs"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Md Faizan</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

/// From is below
