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
          Roman D
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-roman@gmail.com"}
            text={"Password:-rom2m@88"}
          />
        </Box>

        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Naruto
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-narito22@gmail.com"}
            text={"Password:-narito22@3454"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Messi
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-Messi@gmail.com"}
            text={"Password:-alpha3344"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Virs team
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-team@gmail.com"}
            text={"Password:-t12@5896"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Ronaldo 2
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-ron@gmail.com"}
            text={"Password:-ronch12369"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Jhon Dio
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-jhons@gmail.com"}
            text={"Password:-jhon@30044"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Faizan
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-faizan@gmail.com"}
            text={"Password:-fzs@3044"}
          />
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"4xl"}
          borderRadius="15px"
        >
          Danish
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Email:-Dans@gmail.com"}
            text={"Password:-jd@123694"}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
