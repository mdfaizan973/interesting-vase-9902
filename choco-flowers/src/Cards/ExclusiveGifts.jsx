import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./cards.css";
import { Link as RouterLink } from "react-router-dom";
export default function ExclusiveGifts() {
  return (
    <>
      <Heading as="h1" size="xl" mt={6} mb={12}>
        Send Flowers & Exclusive Gifts
      </Heading>
      <div className="prople_card">
        <RouterLink to="/flowers">
          <div>
            <img
              src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-dream-a-little-98548-m.jpg"
              alt=""
            />
            <Heading as="h1" size="sm" mt={5} mb={5} pb={2}>
              Sympathy
            </Heading>
          </div>
        </RouterLink>
        <RouterLink to="/plants">
          <div>
            <img src="https://imgcdn.floweraura.com/moner_plant_0.jpg?tr=w-310,h-310,dpr-1.5,q-70" />
            <Heading as="h1" size="sm" mt={6} mb={5} pb={2}>
              Fileds of Euro
            </Heading>
          </div>
        </RouterLink>
        <RouterLink to="/flowers">
          <div>
            <img
              src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-an-enchanted-tale-201242-m.jpg"
              alt=""
            />
            <Heading as="h1" size="sm" mt={6} mb={5} pb={2}>
              Love & Romance
            </Heading>
          </div>
        </RouterLink>
        <RouterLink to="/plants">
          <div>
            <img src="https://imgcdn.floweraura.com/ficus-bonsai-plant-A.jpg?tr=w-304,dpr-1.5,q-70" />
            <Heading as="h1" size="sm" mt={6} mb={5} pb={2}>
              Just Because
            </Heading>
          </div>
        </RouterLink>
        <RouterLink to="/flowers">
          <div>
            <img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-ethereal-bliss-199418-m.jpg" />
            <Heading as="h1" size="sm" mt={6} mb={5} pb={2}>
              Get Well
            </Heading>
          </div>
        </RouterLink>
        <RouterLink to="/plants">
          <div>
            <img src="https://imgcdn.floweraura.com/desktop_plant_2.jpg?tr=w-310,h-310,dpr-1.5,q-70" />
            <Heading as="h1" size="sm" mt={6} mb={5} pb={2}>
              Floral Embarac
            </Heading>
          </div>
        </RouterLink>
      </div>
    </>
  );
}
