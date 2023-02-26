import React from "react";
import NorNav from "./../Components/NorNav";
import { Image, Box, Container, HStack } from "@chakra-ui/react";
export default function Delhivery() {
  return (
    <div>
      <NorNav />

      <Container>
        <Image
          src="https://media3.giphy.com/media/cmCHuk53AiTmOwBXlw/giphy.gif "
          alt="delhivery logo"
        />
      </Container>
    </div>
  );
}
