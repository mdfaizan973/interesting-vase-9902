import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcAssistant } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function UsersData() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={3}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Lifetime Support"}
            text={"faizan@gmail.com"}
          />
        </Box>

        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          borderRadius="15px"
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          borderRadius="15px"
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>

        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          borderRadius="15px"
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>

        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          borderRadius="15px"
        >
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
        <Box bg={useColorModeValue("white", "gray.800")} boxShadow={"2xl"}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Md Faizan"}
            text={"faizan@gmail.com"}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
