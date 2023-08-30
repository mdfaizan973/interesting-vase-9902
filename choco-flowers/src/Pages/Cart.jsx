import React, { useEffect, useState, useContext } from "react";
import ExclusiveGifts from "../Cards/ExclusiveGifts";
import Footer from "../Components/Footer";
import HoveNav from "../Components/HoveNav";
import Navbar from "../Components/Navbar";
import Cakes from "../Cards/Cakes";
import ProCarousal from "./../ProSideBar/ProCarousal";
import axios from "axios";
import { CartContext } from "./cartlength";
import { Link as RouterLink } from "react-router-dom";
import {
  Divider,
  Container,
  Box,
  Button,
  Image,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [qties, setQties] = useState(1);
  const { totalcart } = useContext(CartContext);
  const toast = useToast();

  useEffect(() => {
    MyCartData();
  }, [cartData]);
  let arr;
  const MyCartData = () => {
    axios
      .get("https://flowers-wdds.onrender.com/cartItems")
      .then((res) => {
        // console.log(res);
        setCartData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deletecartItem = (id) => {
    axios
      .delete(`https://flowers-wdds.onrender.com/cartItems/${id}`)
      .then((res) => {
        // console.log(res);

        toast({
          title: "Item deleted successfully",
          position: ["top"],
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleqty = (val) => {
    setQties(val + qties);
  };

  // let sum = 0;
  // for (let i = 0; i < cartData.length; i++) {
  //   sum += +cartData[i].price * qty[i];
  // }

  let cost = cartData.reduce((acc, el) => acc + +el.price, 0);
  // console.log("my cost is :-", cost);
  return (
    <div>
      <Navbar />
      <HoveNav />

      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          {cartData.map((item) => (
            <div
              style={{
                display: "flex",
                // border: "1px solid grey",
                alignItems: "center",
                width: "80%",
                padding: "5px",
                borderRadius: "15px",
                marginTop: "5px",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              <Container>
                <Image borderRadius={"10px"} w="60%" src={item.image1} />
              </Container>
              <Container>
                <Heading color="green" fontSize="2xl">
                  {item.title}
                </Heading>
                <Heading fontSize="md">{item.name}</Heading>
                <br />
                <Divider w="60%" m="auto" />
                <HStack ml="25px" textAlign="center">
                  <Button onClick={() => handleqty(1)} colorScheme="blue">
                    +
                  </Button>
                  <Button>{qties}</Button>
                  <Button
                    isDisabled={qties == 1}
                    onClick={() => handleqty(-1)}
                    colorScheme="blue"
                  >
                    -
                  </Button>

                  <Text fontSize="2xl">₹ {item.price}</Text>
                </HStack>
                <Button
                  ml="70%"
                  colorScheme="red"
                  onClick={() => deletecartItem(item.id)}
                >
                  Delete
                </Button>
              </Container>
            </div>
          ))}
        </div>

        <Container>
          <Box
            borderRadius={"10px"}
            padding="18px"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          >
            <Heading>Cart Summary</Heading>
            <Text>Grand Total</Text>
            <br />
            <Text fontSize="2xl"> Total Rs. {cost}</Text>
            <Text fontSize="2xl"> Total Cart Item - {totalcart}</Text>
            <Text fontSize="xl" textDecoration="line-through">
              Total Disc : {cost * 1.7}
            </Text>
            <br />
            <Text>
              Have a Coupon Code? You can apply the discount coupon in the
              Checkout Process
            </Text>
            <br />
            <RouterLink to="/checkout">
              <Button colorScheme="green">Place Order</Button>
            </RouterLink>
          </Box>
        </Container>
      </div>
      <br />

      <Divider w="60%" m="auto" />
      <br />
      <Divider w="75%" m="auto" />

      <ExclusiveGifts />
      <ProCarousal />
      <Cakes />
      <Footer />
    </div>
  );
}
