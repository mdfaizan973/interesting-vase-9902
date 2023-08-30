import React from "react";
import NorNav from "./../Components/NorNav";
import { Image, Box, Container, HStack } from "@chakra-ui/react";
export default function Delhivery() {
  return (
    <div>
      <NorNav />

      <Container>
        <Image
          src="https://media0.giphy.com/media/gk3qooQQqkSvSQLsOt/giphy.gif?cid=6c09b95239mfhv0kystid26yzr5mia7gc8ujn8rnpyap5lnn&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt="delhivery logo"
        />
      </Container>
    </div>
  );
}
