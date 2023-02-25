import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./proside.css";
export default function Allpagesome() {
  return (
    <div className="mains">
      <Box>
        <Box className="Cmains">
          <Image
            w="30%"
            src="https://imgcdn.floweraura.com/love-forever-wall-clock-9988357gf-AAA.jpg?tr=w-304,dpr-1.5,q-70"
          />
          <Box>
            <Heading>Over 1000+ Gifts</Heading>
            <Text> To let you be spoilt for choice</Text>
          </Box>
        </Box>
        <hr />
        <Box className="Cmains">
          <Box>
            <Heading>Dedicated Efforts</Heading>
            <Text> Over 1 Million Smiles delivered</Text>
          </Box>
          <Image
            w="30%"
            src="https://imgcdn.floweraura.com/eggless-hbd-vanilla-cake-9913230ca_0.jpg?tr=w-264,dpr-1.5,q-70"
          />
        </Box>
        <hr />

        <Box className="Cmains">
          <Image
            w="30%"
            src="https://imgcdn.floweraura.com/red-n-pink-rosy-corsage-9839820fl-A_3.jpg?tr=w-264,dpr-1.5,q-70"
          />
          <Box>
            <Heading>Pocket Friendly Deals</Heading>
            <Text>While your loved ones smile, so should you</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
