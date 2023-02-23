import React from "react";
import { SimpleGrid, Box, Image, Heading, Link } from "@chakra-ui/react";
export default function MultiPro() {
  return (
    <>
      <Heading>Special </Heading>
      <SimpleGrid
        w="80%"
        m="auto"
        //   templateColumns="repeat(4, 1fr)"
        gap={4}
        columns={[2, 3, 4]}
      >
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://www.fnp.com/assets/images/custom/new-desk-home/cakes/2022/Butterscotch.jpg"
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.4s ease-in-out"
                _hover={{
                  transform: "scale(1.15)",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-feelings-of-love-gift-hamper-110722-m.jpg"
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
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://www.fnp.com/assets/images/custom/new-desk-home/cakes/2022/Flowers-N-Cakes.jpg"
                alt="some text"
                objectFit="contain"
                transition="0.4s ease-in-out"
                _hover={{
                  transform: "scale(1.15)",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-dream-a-little-98548-m.jpg"
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
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-luxe-floral-fountain-in-vase-135737-m.jpg"
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.4s ease-in-out"
                _hover={{
                  transform: "scale(1.15)",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/192558mx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}"
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.4s ease-in-out"
                _hover={{
                  transform: "scale(1.15)",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-the-delilah-187572-m.jpg"
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.4s ease-in-out"
                _hover={{
                  transform: "scale(1.15)",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box w="85%">
          <Box borderRadius="full" overflow="hidden">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                transform="scale(1.0)"
                src="https://www.fnp.com/assets/images/custom/new-desk-home/cakes/2022/Pineapple.jpg"
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.4s ease-in-out"
                _hover={{
                  transform: "scale(1.15)",
                }}
              />
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}
