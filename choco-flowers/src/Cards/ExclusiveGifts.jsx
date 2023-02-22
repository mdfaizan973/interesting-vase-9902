import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./cards.css";
// import Simpleban from "./Simpleban";
export default function ExclusiveGifts() {
  return (
    <>
      <Heading as="h1" size="xl" mt={6} mb={2}>
        Send Flowers & Exclusive Gifts
      </Heading>
      <div className="prople_card">
        <div>
          <img
            src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-dream-a-little-98548-m.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Ethereal Bliss
          </Heading>
        </div>
        <div>
          <img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-ethereal-bliss-199418-m.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Addidas Ultra Lite 3
          </Heading>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-an-enchanted-tale-201242-m.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Puma Xtream Pro
          </Heading>
        </div>
        <div>
          <img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-pink-extravaganza-199417-m.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            LeBron XX Stuffer'
          </Heading>
        </div>
        <div>
          <img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-the-wild-garden-hamper-199419-m.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Sega Xtream Ultra
          </Heading>
        </div>
        <div>
          <img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-one-true-love-202537-m.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Air XX Stocking
          </Heading>
        </div>
      </div>
      {/*<Simpleban />*/}
    </>
  );
}
