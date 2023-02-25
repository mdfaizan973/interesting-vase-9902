import React, { useEffect, useState, useContext } from "react";
import ExclusiveGifts from "../Cards/ExclusiveGifts";
import Footer from "../Components/Footer";
import HoveNav from "../Components/HoveNav";
import Navbar from "../Components/Navbar";
import Cakes from "../Cards/Cakes";
import ProCarousal from "./../ProSideBar/ProCarousal";
import axios from "axios";
// import { CartContext } from "./cartlength";
import {
  Divider,
  Container,
  Box,
  Button,
  Image,
  Heading,
  VStack,
  HStack,
  Text,
  Center,
} from "@chakra-ui/react";
export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [qties, setQties] = useState(1);
  // const [qty, setQty] = useState([]);

  useEffect(() => {
    MyCartData();
  }, [cartData]);
  const MyCartData = () => {
    axios
      .get("http://localhost:8010/cartItems")
      .then((res) => {
        // console.log(res);
        setCartData(res.data);
        // let arr = new Array(res.data.length).fill(1);
        // setQty(arr);
      })
      .catch((err) => console.log(err));
  };

  const deletecartItem = (id) => {
    axios
      .delete(`http://localhost:8010/cartItems/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleqty = (val) => {
    setQties(val + qties);
  };

  // let sum = 0;
  // for (let i = 0; i < cartData.length; i++) {
  //   sum += +cartData[i].price * qty[i];
  // }

  // console.log("my sum is :-", sum);

  let totalcart = cartData.length;
  // console.log("cdata", totalcart);
  return (
    <div>
      <Navbar totalcart={totalcart} />
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
                border: "1px solid grey",
                alignItems: "center",
                width: "80%",
                padding: "5px",
                borderRadius: "15px",
                marginTop: "5px",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              }}
            >
              <Container>
                <Image w="60%" src={item.image1} />
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
            padding="10px"
            boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
          >
            <Heading>Cart Summary</Heading>
            <Text>Grand Total</Text>
            <Text>Rs.1350</Text>
            <Text>
              Have a Coupon Code? You can apply the discount coupon in the
              Checkout Process
            </Text>
            <Button colorScheme="green">Place Order</Button>
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
