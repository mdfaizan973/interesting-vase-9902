import React from "react";
import NorNav from "../Components/NorNav";
import { Input, Box, Button } from "@chakra-ui/react";
export default function Checkout() {
  return (
    <div>
      <NorNav />
      <Box w="50% " mt={10} m={"auto"}>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Button>Submit</Button>
      </Box>
    </div>
  );
}
